#!/usr/bin/env node

/**
 * PDF Optimization Script
 * Compresses PDF files using multiple methods for maximum file size reduction
 * 
 * Usage: node scripts/optimize-pdf.js <input-file> [output-file] [quality-level]
 * 
 * Quality levels:
 * - high: 90-95% quality (minimal compression)
 * - medium: 75-85% quality (balanced)
 * - low: 50-70% quality (maximum compression)
 * - web: optimized for web viewing (75 DPI)
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

// Configuration
const QUALITY_PRESETS = {
  high: {
    dpi: 150,
    imageQuality: 90,
    gsSettings: '/printer'
  },
  medium: {
    dpi: 100,
    imageQuality: 80,
    gsSettings: '/ebook'
  },
  low: {
    dpi: 75,
    imageQuality: 60,
    gsSettings: '/screen'
  },
  web: {
    dpi: 75,
    imageQuality: 75,
    gsSettings: '/screen'
  }
};

class PDFOptimizer {
  constructor() {
    this.checkDependencies();
  }

  checkDependencies() {
    // Check if Ghostscript is installed
    try {
      execSync('gs --version', { stdio: 'ignore' });
      console.log('✓ Ghostscript found');
    } catch (error) {
      console.error('❌ Ghostscript not found. Please install Ghostscript:');
      console.error('   macOS: brew install ghostscript');
      console.error('   Ubuntu: sudo apt-get install ghostscript');
      console.error('   Windows: Download from https://www.ghostscript.com/download/gsdnld.html');
      process.exit(1);
    }
  }

  async optimizeWithGhostscript(inputFile, outputFile, quality = 'medium') {
    const preset = QUALITY_PRESETS[quality] || QUALITY_PRESETS.medium;
    
    const gsCommand = [
      'gs',
      '-sDEVICE=pdfwrite',
      '-dCompatibilityLevel=1.4',
      `-dPDFSETTINGS=${preset.gsSettings}`,
      '-dNOPAUSE',
      '-dQUIET',
      '-dBATCH',
      `-r${preset.dpi}`,
      '-dColorImageResolution=' + preset.dpi,
      '-dGrayImageResolution=' + preset.dpi,
      '-dMonoImageResolution=' + preset.dpi,
      '-dColorImageDownsampleType=/Bicubic',
      '-dGrayImageDownsampleType=/Bicubic',
      '-dMonoImageDownsampleType=/Bicubic',
      '-dColorImageDownsampleThreshold=1.5',
      '-dGrayImageDownsampleThreshold=1.5',
      '-dMonoImageDownsampleThreshold=1.5',
      '-dOptimize=true',
      '-dEmbedAllFonts=true',
      '-dSubsetFonts=true',
      '-dCompressFonts=true',
      '-dDetectDuplicateImages=true',
      `-sOutputFile=${outputFile}`,
      inputFile
    ];

    return new Promise((resolve, reject) => {
      const process = spawn(gsCommand[0], gsCommand.slice(1), {
        stdio: ['pipe', 'pipe', 'pipe']
      });

      let stderr = '';
      process.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      process.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Ghostscript failed with code ${code}: ${stderr}`));
        }
      });
    });
  }

  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  calculateCompressionRatio(originalSize, compressedSize) {
    const ratio = ((originalSize - compressedSize) / originalSize * 100);
    return Math.round(ratio * 100) / 100;
  }

  async optimizePDF(inputFile, outputFile, quality = 'medium') {
    if (!fs.existsSync(inputFile)) {
      throw new Error(`Input file not found: ${inputFile}`);
    }

    const originalStats = fs.statSync(inputFile);
    const originalSize = originalStats.size;

    console.log(`📄 Optimizing: ${path.basename(inputFile)}`);
    console.log(`📊 Original size: ${this.formatFileSize(originalSize)}`);
    console.log(`⚙️  Quality level: ${quality}`);
    console.log('🔄 Processing...');

    const startTime = Date.now();

    try {
      await this.optimizeWithGhostscript(inputFile, outputFile, quality);
      
      if (!fs.existsSync(outputFile)) {
        throw new Error('Output file was not created');
      }

      const compressedStats = fs.statSync(outputFile);
      const compressedSize = compressedStats.size;
      const processingTime = (Date.now() - startTime) / 1000;
      const compressionRatio = this.calculateCompressionRatio(originalSize, compressedSize);

      console.log('\n✅ Optimization complete!');
      console.log(`📊 Compressed size: ${this.formatFileSize(compressedSize)}`);
      console.log(`📉 Size reduction: ${compressionRatio}%`);
      console.log(`⏱️  Processing time: ${processingTime}s`);
      console.log(`💾 Saved: ${this.formatFileSize(originalSize - compressedSize)}`);
      console.log(`📁 Output: ${outputFile}`);

      return {
        originalSize,
        compressedSize,
        compressionRatio,
        processingTime,
        outputFile
      };

    } catch (error) {
      if (fs.existsSync(outputFile)) {
        fs.unlinkSync(outputFile);
      }
      throw error;
    }
  }

  async batchOptimize(inputDir, outputDir, quality = 'medium') {
    if (!fs.existsSync(inputDir)) {
      throw new Error(`Input directory not found: ${inputDir}`);
    }

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const files = fs.readdirSync(inputDir)
      .filter(file => path.extname(file).toLowerCase() === '.pdf');

    if (files.length === 0) {
      console.log('No PDF files found in input directory');
      return;
    }

    console.log(`🚀 Starting batch optimization of ${files.length} files`);
    console.log(`📁 Input directory: ${inputDir}`);
    console.log(`📁 Output directory: ${outputDir}`);
    console.log(`⚙️  Quality level: ${quality}\n`);

    const results = [];
    let totalOriginalSize = 0;
    let totalCompressedSize = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const inputFile = path.join(inputDir, file);
      const outputFile = path.join(outputDir, file);

      console.log(`\n[${i + 1}/${files.length}] Processing ${file}`);

      try {
        const result = await this.optimizePDF(inputFile, outputFile, quality);
        results.push({ file, ...result });
        totalOriginalSize += result.originalSize;
        totalCompressedSize += result.compressedSize;
      } catch (error) {
        console.error(`❌ Failed to optimize ${file}: ${error.message}`);
        results.push({ file, error: error.message });
      }
    }

    // Summary
    const totalCompressionRatio = this.calculateCompressionRatio(totalOriginalSize, totalCompressedSize);
    const successCount = results.filter(r => !r.error).length;

    console.log('\n' + '='.repeat(60));
    console.log('📊 BATCH OPTIMIZATION SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Successfully processed: ${successCount}/${files.length} files`);
    console.log(`📊 Total original size: ${this.formatFileSize(totalOriginalSize)}`);
    console.log(`📊 Total compressed size: ${this.formatFileSize(totalCompressedSize)}`);
    console.log(`📉 Overall compression: ${totalCompressionRatio}%`);
    console.log(`💾 Total saved: ${this.formatFileSize(totalOriginalSize - totalCompressedSize)}`);

    return results;
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('PDF Optimization Script');
    console.log('Usage:');
    console.log('  Single file: node scripts/optimize-pdf.js <input-file> [output-file] [quality]');
    console.log('  Batch mode:  node scripts/optimize-pdf.js --batch <input-dir> <output-dir> [quality]');
    console.log('');
    console.log('Quality levels: high, medium, low, web (default: medium)');
    console.log('');
    console.log('Examples:');
    console.log('  node scripts/optimize-pdf.js document.pdf');
    console.log('  node scripts/optimize-pdf.js document.pdf compressed.pdf web');
    console.log('  node scripts/optimize-pdf.js --batch ./pdfs ./optimized medium');
    process.exit(1);
  }

  const optimizer = new PDFOptimizer();

  try {
    if (args[0] === '--batch') {
      // Batch mode
      const inputDir = args[1];
      const outputDir = args[2];
      const quality = args[3] || 'medium';

      if (!inputDir || !outputDir) {
        console.error('❌ Batch mode requires input and output directories');
        process.exit(1);
      }

      await optimizer.batchOptimize(inputDir, outputDir, quality);
    } else {
      // Single file mode
      const inputFile = args[0];
      const outputFile = args[1] || inputFile.replace('.pdf', '_optimized.pdf');
      const quality = args[2] || 'medium';

      await optimizer.optimizePDF(inputFile, outputFile, quality);
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = PDFOptimizer;