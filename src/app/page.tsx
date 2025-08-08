import Image from "next/image";
import { Phone, Shield, Clock, CheckCircle2, Star, Users, Sparkles, Home as HomeIcon, QrCode } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans" style={{
      width: "595px", 
      minHeight: "842px",
      margin: "0 auto",
      padding: "0",
      fontSize: "14px",
      lineHeight: "1.4"
    }}>
      {/* A5 Leaflet - Front Side */}
      <div className="relative w-full h-full p-6 bg-gradient-to-br from-blue-50 to-white">
        
        {/* Header with Logo */}
        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-2">
            <span className="text-red-600">DUST</span><span className="text-gray-800">BLASTERS</span>
          </div>
          <div className="text-blue-700 font-semibold text-lg tracking-wide">
            CLEANING SERVICES
          </div>
        </div>

        {/* Trust Badge */}
        <div className="bg-blue-600 text-white text-center py-3 px-4 rounded-lg mb-6 shadow-lg">
          <div className="font-bold text-xl mb-1">Peterborough&apos;s Most Trusted</div>
          <div className="text-lg">Carpet Cleaning Company</div>
          <div className="flex justify-center items-center mt-2 gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="ml-2 font-semibold">110+ Five Star Reviews</span>
          </div>
        </div>

        {/* Main Value Proposition */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
            Professional Carpet Cleaning<br />You Can Trust
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Over 10 years serving local Peterborough families with safe, 
            effective carpet & upholstery cleaning
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-500">
            <Shield className="w-6 h-6 text-green-600" />
            <div>
              <div className="font-semibold text-gray-800">Family-Safe Products</div>
              <div className="text-sm text-gray-600">Non-toxic, pet-friendly cleaning solutions</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500">
            <Clock className="w-6 h-6 text-blue-600" />
            <div>
              <div className="font-semibold text-gray-800">Quick Dry Technology</div>
              <div className="text-sm text-gray-600">Advanced equipment - ready to use in hours</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border-l-4 border-purple-500">
            <Users className="w-6 h-6 text-purple-600" />
            <div>
              <div className="font-semibold text-gray-800">Local Family Business</div>
              <div className="text-sm text-gray-600">Fully insured, professional Peterborough team</div>
            </div>
          </div>
        </div>

        {/* Prominent Phone Number */}
        <div className="bg-red-600 text-white text-center py-4 px-6 rounded-xl mb-6 shadow-lg">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Phone className="w-8 h-8" />
            <div className="text-3xl font-bold tracking-wide">07547 593160</div>
          </div>
          <div className="text-lg font-semibold">Call for FREE No-Obligation Quote</div>
          <div className="text-sm mt-1 opacity-90">Available now - we respect your time</div>
        </div>

        {/* Team Photo Section */}
        <div className="text-center mb-4">
          <div className="relative w-full h-24 mb-3 overflow-hidden rounded-lg border-2 border-gray-200">
            <Image
              src="/dustblasters_team.webp"
              alt="DustBlasters Professional Team - Local Peterborough Carpet Cleaners"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="text-sm text-gray-700 font-medium">
            Meet our professional, friendly local team
          </div>
        </div>

        {/* Bottom Trust Signals */}
        <div className="flex justify-center gap-4 text-sm text-gray-700 border-t border-gray-200 pt-4">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Fully Insured</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>No Hidden Costs</span>
          </div>
        </div>
      </div>

      {/* A5 Leaflet - Back Side */}
      <div className="relative w-full h-full p-6 bg-white border-t-2 border-gray-200" style={{
        marginTop: "20px"
      }}>
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-3xl font-bold mb-2">
            <span className="text-red-600">DUST</span><span className="text-gray-800">BLASTERS</span>
          </div>
          <div className="text-lg text-gray-700">Complete Cleaning Solutions for Your Home</div>
        </div>

        {/* Additional Services */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Did You Know We Also Offer:
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <HomeIcon className="w-4 h-4 text-blue-600" />
              <span>End of Tenancy Cleaning</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>After Builders Cleaning</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Commercial Cleaning</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <HomeIcon className="w-4 h-4 text-blue-600" />
              <span>Regular House Cleaning</span>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Why Peterborough Families Choose Us:
          </h2>
          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
              <div className="font-semibold text-gray-800">British-Made Professional Equipment</div>
              <div className="text-sm text-gray-600">We invest in the best Airflex Storm systems for superior results</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
              <div className="font-semibold text-gray-800">Flexible Scheduling</div>
              <div className="text-sm text-gray-600">We work around your timetable with respectful, punctual service</div>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
              <div className="font-semibold text-gray-800">Transparent Pricing</div>
              <div className="text-sm text-gray-600">Clear quotes with no hidden costs or surprises</div>
            </div>
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-2 border-yellow-200">
          <div className="flex justify-center mb-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
          <div className="text-center text-gray-700 italic mb-2">
            &ldquo;They were punctual, professional, and friendly. The carpet looks and smells lovely, 
            even though we have two large dogs. Will definitely use again.&rdquo;
          </div>
          <div className="text-center text-sm font-semibold text-gray-800">
            - Verified Google Review
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">07547 593160</div>
                <div className="text-sm text-gray-700">Call for immediate response</div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <QrCode className="w-8 h-8 text-gray-600" />
              </div>
              <div className="text-xs text-gray-600">Scan for instant quote</div>
            </div>
          </div>
          <div className="text-center mt-4 pt-3 border-t border-gray-300">
            <div className="text-sm font-semibold text-gray-800">www.dustblasters.co.uk</div>
            <div className="text-xs text-gray-600 mt-1">Serving all Peterborough areas & villages</div>
          </div>
        </div>
      </div>
    </div>
  );
}