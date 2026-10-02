import React from 'react';
import { motion } from 'framer-motion';
import { Download, Map as MapIcon, Layers } from 'lucide-react';
import { images } from '@/data/images';
import { mapsData } from '@/data/siteData';

const MapsPage = () => {
  return (
    <div className="w-full bg-light-gray min-h-screen pb-24 font-inter">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={images.maps.hero} alt="Maps Hero" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-10 bg-navy/70" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-epilogue font-bold text-white mb-6"
          >
            {mapsData.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-light-blue"
          >
            {mapsData.overview}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-[-60px] relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-epilogue font-bold text-navy mb-6">Map Preview</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img src={images.maps.satellite} alt="Satellite" className="rounded-xl object-cover h-48 w-full" />
                <img src={images.maps.data1} alt="Data View 1" className="rounded-xl object-cover h-48 w-full" />
                <img src={images.maps.data2} alt="Data View 2" className="rounded-xl object-cover h-48 w-full" />
                <img src={images.maps.gis} alt="GIS Map" className="rounded-xl object-cover h-48 w-full" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Processing Details</h3>
              <ul className="space-y-3">
                {mapsData.processing.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-epilogue font-bold text-navy mb-6">Available Layers</h2>
              <div className="flex flex-wrap gap-2">
                {mapsData.layers.map((layer, idx) => (
                  <span key={idx} className="px-4 py-2 bg-light-blue text-navy rounded-full text-sm font-semibold">
                    {layer}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 rounded-2xl shadow-lg sticky top-24">
              <div className="mb-6 text-center">
                <h3 className="text-lg text-gray-500 mb-2">Starting at</h3>
                <div className="text-4xl font-bold text-navy">{mapsData.price}</div>
              </div>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl flex justify-center items-center gap-2 hover:bg-navy transition-colors mb-6">
                <Download size={20} />
                Order Data Package
              </button>
              <div className="space-y-4 pt-6">
                <h4 className="font-bold text-navy flex items-center gap-2"><Layers size={18} /> Formats Available</h4>
                <div className="flex flex-wrap gap-2">
                  {mapsData.formats.map((fmt, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">{fmt}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-navy p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-xl font-bold font-epilogue mb-6">Order Process</h3>
              <div className="space-y-6">
                {mapsData.orderProcess.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 font-bold">{idx + 1}</div>
                    <p className="text-sm text-light-blue pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapsPage;
