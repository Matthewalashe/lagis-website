import { images } from '@/data/images';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Waves, CreditCard, MapPin, Anchor } from 'lucide-react';

const WaterfrontPage = () => {
  return (
    <div className="min-h-screen bg-light-gray font-inter text-dark-gray">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMjBRMTAgMTAgMjAgMjBUMzkgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')]"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-epilogue mb-6 max-w-4xl mx-auto leading-tight"
          >
            Improving & Sustaining Our Waterfront Infrastructure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10"
          >
            Creating livable communities for everyone through the development and preservation of Lagos State's extensive waterfront and inland waterways.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        
        {/* Visual Waterfront Imagery Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-epilogue">Reclaiming and protecting our shorelines</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Ministry of Waterfront Infrastructure Development is committed to providing modern waterfront infrastructure, combating coastal erosion, and harnessing the economic potential of our waterways to enhance the quality of life for all Lagosians.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded text-blue-600"><Waves size={20} /></div>
                <div>
                  <h4 className="font-bold text-gray-800">Coastal Protection</h4>
                  <p className="text-sm text-gray-600">Building groynes and sea walls to prevent shoreline erosion.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded text-blue-600"><Anchor size={20} /></div>
                <div>
                  <h4 className="font-bold text-gray-800">Jetty Construction</h4>
                  <p className="text-sm text-gray-600">Developing modern jetties for safe inland water transportation.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded text-blue-600"><MapPin size={20} /></div>
                <div>
                  <h4 className="font-bold text-gray-800">Land Reclamation</h4>
                  <p className="text-sm text-gray-600">Sustainable reclamation projects for residential and commercial expansion.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-gray-200 h-48 rounded-2xl shadow-md overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center">
                   <span className="text-gray-500 font-medium">Jetty Infrastructure</span>
                </div>
              </div>
              <div className="bg-gray-200 h-64 rounded-2xl shadow-md overflow-hidden relative">
                 <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center">
                   <span className="text-gray-500 font-medium">Coastal Protection</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-200 h-64 rounded-2xl shadow-md overflow-hidden relative">
                 <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center">
                   <span className="text-gray-500 font-medium">Waterfront View</span>
                </div>
              </div>
              <div className="bg-gray-200 h-48 rounded-2xl shadow-md overflow-hidden relative">
                 <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center">
                   <span className="text-gray-500 font-medium">Reclamation Site</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
              <CreditCard size={40} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-epilogue mb-2">Get Your Cowry Card</h2>
              <p className="text-gray-600">
                Experience seamless travel across Lagos waterways. Tap and go with the unified transport payment system.
              </p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shrink-0 shadow-lg">
            Get Cowry Card Now
          </button>
        </section>

      </main>
    </div>
  );
};

export default WaterfrontPage;
