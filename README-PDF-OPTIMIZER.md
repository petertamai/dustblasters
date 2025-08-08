# PDF Optimization Script

A powerful Node.js script that compresses PDF files using Ghostscript for maximum file size reduction while maintaining quality.

## Features

- **Multiple Quality Levels**: High, medium, low, and web-optimized presets
- **Batch Processing**: Process entire directories of PDF files
- **Detailed Statistics**: Shows compression ratios, file sizes, and processing time
- **Progress Tracking**: Real-time feedback during optimization
- **Error Handling**: Graceful handling of failed optimizations

## Prerequisites

Install Ghostscript on your system:

### macOS
```bash
brew install ghostscript
```

### Ubuntu/Debian
```bash
sudo apt-get install ghostscript
```

### Windows
Download from https://www.ghostscript.com/download/gsdnld.html

## Usage

### Single File Optimization

```bash
# Basic usage (uses medium quality)
npm run optimize-pdf document.pdf

# Specify output file and quality
npm run optimize-pdf input.pdf output.pdf web

# Different quality levels
npm run optimize-pdf document.pdf compressed.pdf high    # Minimal compression
npm run optimize-pdf document.pdf compressed.pdf medium  # Balanced (default)
npm run optimize-pdf document.pdf compressed.pdf low     # Maximum compression
npm run optimize-pdf document.pdf compressed.pdf web     # Web-optimized (75 DPI)
```

### Batch Processing

```bash
# Process all PDFs in a directory
npm run optimize-pdf -- --batch ./input-folder ./output-folder medium
```

## Quality Presets

| Preset | DPI | Image Quality | Best For |
|--------|-----|---------------|----------|
| **high** | 150 | 90% | Print documents, minimal compression |
| **medium** | 100 | 80% | General use, balanced quality/size |
| **low** | 75 | 60% | Maximum compression, storage |
| **web** | 75 | 75% | Web viewing, email attachments |

## Expected Results

Typical compression ratios:
- **High quality**: 20-40% size reduction
- **Medium quality**: 40-60% size reduction  
- **Low quality**: 60-80% size reduction
- **Web quality**: 50-70% size reduction

## Example Output

```
📄 Optimizing: large-document.pdf
📊 Original size: 15.2 MB
⚙️  Quality level: medium
🔄 Processing...

✅ Optimization complete!
📊 Compressed size: 6.1 MB
📉 Size reduction: 59.87%
⏱️  Processing time: 3.2s
💾 Saved: 9.1 MB
📁 Output: large-document_optimized.pdf
```

## Troubleshooting

### "Ghostscript not found"
Install Ghostscript using the commands above for your operating system.

### Permission Errors
Make sure the script is executable:
```bash
chmod +x scripts/optimize-pdf.js
```

### Large Files
For very large PDFs (>100MB), the process may take several minutes. The script will show progress updates.

## Technical Details

The script uses Ghostscript with optimized settings:
- **Compression**: Bicubic downsampling for images
- **Optimization**: Removes duplicate images and fonts
- **Font handling**: Embeds and subsets fonts efficiently  
- **Compatibility**: Outputs PDF 1.4 for maximum compatibility

## Integration

You can also use the optimizer programmatically:

```javascript
const PDFOptimizer = require('./scripts/optimize-pdf.js');

const optimizer = new PDFOptimizer();
const result = await optimizer.optimizePDF('input.pdf', 'output.pdf', 'web');
console.log(`Saved ${result.compressionRatio}% space`);
```