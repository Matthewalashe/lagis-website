import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Info, FileText, ExternalLink } from 'lucide-react';
import { blueBookData } from '@/data/siteData';

// Optional import since externalTools may not exist in extraData depending on user state
let externalTools = { landUseCharge: 'https://luc.lagosstate.gov.ng/' };
try {
  const extra = require('@/data/extraData');
  if (extra.externalTools) externalTools = extra.externalTools;
} catch(e) {}

const BlueBookPage = () => {
  return (
    <div className="w-full bg-light-gray min-h-screen py-24 px-4 font-inter">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-epilogue font-bold text-navy mb-4">{blueBookData.title}</h1>
          <p className="text-xl text-dark-gray">{blueBookData.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <div className="flex gap-4 items-start mb-6">
            <Info className="text-primary shrink-0" size={32} />
            <p className="text-lg text-gray-700 leading-relaxed">{blueBookData.overview}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-epilogue font-bold text-navy mb-6 flex items-center gap-2">
              <Calculator className="text-teal-500" /> Calculation Steps
            </h3>
            <div className="space-y-6">
              {blueBookData.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 font-bold">{idx + 1}</div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-navy p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl font-epilogue font-bold mb-6 flex items-center gap-2">
              <FileText className="text-blue-400" /> Key Facts
            </h3>
            <ul className="space-y-4 text-light-blue">
              {blueBookData.keyFacts.map((fact, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100 mb-8">
          <h4 className="font-bold text-navy mb-2">Example Calculation</h4>
          <p className="text-gray-700 italic">{blueBookData.example}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col items-center gap-6">
          <a 
            href={externalTools.landUseCharge} 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-navy transition-colors flex items-center gap-2 shadow-lg"
          >
            Go to LUC Calculator <ExternalLink size={20} />
          </a>
          <p className="text-sm text-gray-500 text-center max-w-2xl">{blueBookData.disclaimer}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlueBookPage;
