'use client';

import Image from "next/image";
import { Phone, Shield, CheckCircle2, Star, Users, Award, MapPin, Calendar, Home, Sofa, Building, Brush } from "lucide-react";
import { useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

export default function Leaflet() {
  const leafletRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!leafletRef.current) return;
    
    const pages = leafletRef.current.querySelectorAll('.leaflet-page');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a5'
    });

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i] as HTMLElement, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      if (i > 0) {
        pdf.addPage();
      }
      
      pdf.addImage(imgData, 'PNG', 0, 0, 148, 210);
    }
    
    pdf.save('dustblasters-leaflet.pdf');
  };

  return (
    <>
      {/* Download Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={downloadPDF}
          className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors font-semibold"
        >
          Download PDF
        </button>
      </div>

      {/* Leaflet Container */}
      <div className="bg-gray-100 min-h-screen py-8 flex flex-col items-center">
        <div ref={leafletRef} className="space-y-8">
          
          {/* Front Page */}
          <div 
            className="leaflet-page bg-white relative overflow-hidden"
            style={{
              width: "1748px",
              height: "2480px",
              padding: "120px",
              fontFamily: "var(--font-poppins)",
            }}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-2/3 h-2/3 opacity-5">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Header Section */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-16">
                <div>
                  <div className="text-8xl font-bold mb-4">
                    <span className="text-red-600">DUST</span><span className="text-gray-900">BLASTERS</span>
                  </div>
                  <div className="text-4xl text-gray-700 font-medium">CLEANING SERVICES</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-4 text-red-600 mb-4">
                    <Phone className="w-12 h-12" />
                    <div className="text-5xl font-bold">07547 593160</div>
                  </div>
                  <div className="text-3xl text-gray-700">Call Today for Free Quote</div>
                </div>
              </div>

              {/* Trust Badge Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-12 mb-16 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-6">Peterborough&apos;s Most Trusted</div>
                  <div className="text-5xl mb-8">Carpet & Upholstery Cleaners</div>
                  <div className="flex justify-center items-center gap-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-16 h-16 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-4xl font-semibold mt-6">110+ Five-Star Reviews</div>
                  <div className="text-3xl mt-4 opacity-90">3 Times More Than Other Local Companies</div>
                </div>
              </div>

              {/* Main Value Proposition */}
              <div className="text-center mb-20">
                <h1 className="text-7xl font-bold text-gray-900 mb-8 leading-tight">
                  Your Local Family-Run Team<br />
                  Caring for Peterborough Homes<br />
                  Since 2014
                </h1>
                <p className="text-4xl text-gray-700 leading-relaxed max-w-6xl mx-auto">
                Professional Standards • Family Values • Fully Insured
                </p>
              </div>

              {/* Customer Reviews Section */}
              <div className="mb-20">
                <div className="text-5xl font-bold text-center text-gray-900 mb-12">
                  What Our Customers Say - Real Reviews
                </div>
                <div className="grid grid-cols-3 gap-10">
                  <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-2xl text-gray-700 italic mb-6 leading-relaxed">
                      &ldquo;Michael is a true professional. He has been cleaning our carpets for the last three years
                      and they always come up a treat, smell fresh...&rdquo;
                    </div>
                    <div className="text-2xl font-semibold text-gray-900">- Mrs. Sian, Peterborough</div>
                  </div>

                  <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-2xl text-gray-700 italic mb-6 leading-relaxed">
                      &ldquo;Michael is very experienced and knowledgeable in the job. 
                      Discussed the job with us and offered very professional advice. Very tidy workers...&rdquo;
                    </div>
                    <div className="text-2xl font-semibold text-gray-900">- Mr. Russ, Peterborough</div>
                  </div>

                  <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-2xl text-gray-700 italic mb-6 leading-relaxed">
                      &ldquo;Highly recommend Michael and his team. 
                      They always do a thorough job, and are reliable, professional and friendly. My carpets and ovens look like new! &rdquo;
                    </div>
                    <div className="text-2xl font-semibold text-gray-900">- Mrs. Davies, Bretton</div>
                  </div>
                </div>
              </div>

              {/* Team Photo Section */}
              <div className="bg-gray-50 rounded-3xl p-12 mb-16">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    Meet Your Local Cleaning Experts
                  </div>
                  <div className="text-3xl text-gray-700">
                    Professional, Friendly, and Ready to Help
                  </div>
                </div>
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/dustblasters_team.webp"
                    alt="DustBlasters Professional Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl p-16 text-center shadow-2xl">
                <div className="text-6xl font-bold mb-6">Book Your Free Quote Today</div>
                <div className="flex justify-center items-center gap-6 mb-8">
                  <Phone className="w-20 h-20" />
                  <div className="text-8xl font-bold">07547 593160</div>
                </div>
                <div className="text-4xl">No Obligation • Free Consultation • Same Day Response</div>
              </div>

              {/* Bottom Trust Signals */}
              <div className="flex justify-around items-center mt-16 pt-12 border-t-4 border-gray-200">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                  <span className="text-3xl text-gray-700">Fully Insured</span>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="w-12 h-12 text-green-600" />
                  <span className="text-3xl text-gray-700">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-12 h-12 text-green-600" />
                  <span className="text-3xl text-gray-700">All Peterborough Areas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back Page */}
          <div 
            className="leaflet-page bg-white relative overflow-hidden"
            style={{
              width: "1748px",
              height: "2480px",
              padding: "120px",
              fontFamily: "var(--font-poppins)",
            }}
          >
            {/* Header */}
            <div className="text-center mb-16">
              <div className="text-7xl font-bold mb-4">
                <span className="text-red-600">DUST</span><span className="text-gray-900">BLASTERS</span>
              </div>
              <div className="text-4xl text-gray-700">Why Peterborough Families Choose Us</div>
            </div>

            {/* Key Benefits Grid */}
            <div className="mb-20">
              <div className="text-5xl font-bold text-center text-gray-900 mb-12">
                Why Choose DustBlasters
              </div>
              <div className="grid grid-cols-3 gap-10">
                <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-10">
                  <Shield className="w-20 h-20 text-green-600 mb-6" />
                  <div className="text-3xl font-bold text-gray-900 mb-4">100% Safe & Non-Toxic</div>
                  <div className="text-2xl text-gray-700 leading-relaxed">
                    Family & pet-friendly products. No harsh chemicals, 
                    just effective cleaning that&apos;s safe for everyone.
                  </div>
                </div>
                
                <div className="bg-blue-50 border-2 border-blue-500 rounded-2xl p-10">
                  <Shield className="w-20 h-20 text-blue-600 mb-6" />
                  <div className="text-3xl font-bold text-gray-900 mb-4">Fully Insured</div>
                  <div className="text-2xl text-gray-700 leading-relaxed">
                    Complete insurance coverage and DBS-checked professionals. 
                    Your peace of mind is guaranteed.
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-500 rounded-2xl p-10">
                  <Users className="w-20 h-20 text-purple-600 mb-6" />
                  <div className="text-3xl font-bold text-gray-900 mb-4">Trusted Local Team</div>
                  <div className="text-2xl text-gray-700 leading-relaxed">
                    Professional, DBS-checked specialists. 
                    We treat your home with respect and care.
                  </div>
                </div>
              </div>
            </div>

            {/* Before & After Section */}
            <div className="bg-gray-50 rounded-3xl p-12 mb-20">
              <div className="text-5xl font-bold text-center text-gray-900 mb-12">
                See The DustBlasters Difference
              </div>
              <div className="grid grid-cols-3 gap-10">
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="relative w-full h-64 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src="/stain.webp"
                        alt="Professional Stain Removal Before and After"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-2xl font-semibold">Stain Removal</div>
                    <div className="text-xl text-gray-600 mt-2">Expert treatment for tough stains</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="relative w-full h-64 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src="/deep1.webp"
                        alt="Deep Carpet Cleaning Results"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-2xl font-semibold">Deep Cleaning</div>
                    <div className="text-xl text-gray-600 mt-2">Removes 99% of bacteria & allergens</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="relative w-full h-64 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src="/like_new.webp"
                        alt="Carpet Restoration - Like New Results"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-2xl font-semibold">Like New Again</div>
                    <div className="text-xl text-gray-600 mt-2">Restores original appearance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mb-20">
              <div className="text-5xl font-bold text-center text-gray-900 mb-12">
                Complete Cleaning Solutions
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-6 bg-blue-50 rounded-xl p-8">
                  <Home className="w-16 h-16 text-blue-600" />
                  <div>
                    <div className="text-3xl font-semibold text-gray-900">End of Tenancy Cleaning</div>
                    <div className="text-2xl text-gray-700">Professional deep clean for deposits</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-green-50 rounded-xl p-8">
                  <Sofa className="w-16 h-16 text-green-600" />
                  <div>
                    <div className="text-3xl font-semibold text-gray-900">Upholstery Cleaning</div>
                    <div className="text-2xl text-gray-700">Sofas, chairs, and fabric furniture</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-purple-50 rounded-xl p-8">
                  <Building className="w-16 h-16 text-purple-600" />
                  <div>
                    <div className="text-3xl font-semibold text-gray-900">Commercial Cleaning</div>
                    <div className="text-2xl text-gray-700">Offices, shops, and businesses</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-red-50 rounded-xl p-8">
                  <Brush className="w-16 h-16 text-red-600" />
                  <div>
                    <div className="text-3xl font-semibold text-gray-900">Regular House Cleaning</div>
                    <div className="text-2xl text-gray-700">Weekly or monthly service available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-12">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-8">Book Your Cleaning Today</div>
                  <div className="flex items-center gap-6 mb-6">
                    <Phone className="w-16 h-16 text-red-600" />
                    <div>
                      <div className="text-5xl font-bold text-red-600">07547 593160</div>
                      <div className="text-2xl text-gray-700">Call for immediate response</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mb-6">
                    <Calendar className="w-16 h-16 text-blue-600" />
                    <div className="text-2xl text-gray-700">
                      Flexible scheduling • 7 days a week
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <MapPin className="w-16 h-16 text-green-600" />
                    <div className="text-2xl text-gray-700">
                      Serving all Peterborough areas & villages
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <Image
                        src="/qrcode.png"
                        alt="QR Code for Google Reviews - DustBlasters"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-2xl font-semibold text-gray-900 mb-2">
                      Scan for Google Reviews
                    </div>
                    <div className="text-xl text-gray-600">
                      See why we&apos;re Peterborough&apos;s #1 choice
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12 pt-8 border-t-2 border-gray-300">
                <div className="text-3xl font-bold text-gray-900">www.dustblasters.co.uk</div>
                <div className="text-2xl text-gray-700 mt-2">
                  Professional • Reliable • Local • Trusted Since 2014
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}