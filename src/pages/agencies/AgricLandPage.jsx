import { images } from '@/data/images';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { QrCode, Map, Tractor, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AgricLandPage = () => {
  return (
    <div className="min-h-screen bg-light-gray font-inter text-dark-gray">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMzAgTDMwIDAgTDYwIDMwIEwzMCA2MCBaIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+')] bg-[length:60px_60px]"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-epilogue mb-6"
          >
            Scan now. Become an Agric Land Owner.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-green-100 max-w-2xl mb-10"
          >
            Secure arable land in designated agricultural zones across Lagos State to support food security and agribusiness.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-4 rounded-2xl shadow-2xl inline-block"
          >
            {/* Fake QR Code */}
            <div className="w-48 h-48 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center flex-col text-gray-500">
               <QrCode size={64} className="mb-2 text-green-700" />
               <span className="text-sm font-medium">Scan to Apply</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        
        {/* Map Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-epilogue mb-4">View Map for Available Lands Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore designated agricultural zones, check soil types, and find the perfect plot for your farming needs.
          </p>
          
          {/* Map Placeholder */}
          <div className="w-full aspect-[21/9] bg-gray-200 rounded-2xl border border-gray-300 relative overflow-hidden mb-8">
             <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500 bg-green-900/5">
                <Map size={48} className="mb-4 text-green-700 opacity-50" />
                <span className="font-bold text-lg text-gray-600">Agricultural Land Map Loading...</span>
             </div>
          </div>
          
          <Link to="/maps" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold transition-colors">
            Open Interactive Map
          </Link>
        </section>

        {/* Benefits & CTA */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-epilogue">Why Invest in Lagos Agriculture?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-700"><Tractor size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg">Subsidized Land Rates</h4>
                  <p className="text-gray-600">Access land at highly competitive rates designed specifically to encourage agricultural development.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-700"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg">Strategic Locations</h4>
                  <p className="text-gray-600">Estates located in Epe, Badagry, and Ikorodu with proximity to markets and processing hubs.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-8 md:p-12 rounded-3xl border border-green-200">
            <h3 className="text-2xl font-bold font-epilogue mb-4 text-green-900">Ready to start farming?</h3>
            <p className="text-green-800 mb-8">
              Submit your application today. The process is fully digitized for your convenience.
            </p>
            <Link to="/luac-application" className="w-full flex items-center justify-between bg-green-700 hover:bg-green-800 text-white px-6 py-4 rounded-xl font-bold transition-colors">
              <span>Apply Now</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-navy text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold font-epilogue mb-6">Need Help with Your Application?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="flex items-center justify-center gap-3 bg-gray-800 px-6 py-3 rounded-lg">
              <Phone size={18} className="text-green-400" />
              <span>+234 (0) 903 981 4222</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-gray-800 px-6 py-3 rounded-lg">
              <Mail size={18} className="text-green-400" />
              <span>info@egisunit.com</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AgricLandPage;
