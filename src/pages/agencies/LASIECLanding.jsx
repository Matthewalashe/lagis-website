import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ExternalLink, Grid, List, CheckCircle, Users } from 'lucide-react';
import { images } from '@/data/images';
import { lagosLGAs, lagosLGATotals, externalTools } from '@/data/extraData';

const Counter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const LASIECLanding = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredLGAs = lagosLGAs.filter(lga => 
    lga.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lga.headquarters.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen font-inter">
      {/* 1. Hero Section */}
      <section className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.election.voting} 
            alt="Voting in Lagos" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Vibrant Blue-Green Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-600/90 via-teal-500/80 to-emerald-600/90 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-md text-white font-bold tracking-widest text-sm mb-6 border border-white/30 uppercase">
              Lagos State Independent Electoral Commission
            </span>
            <h1 className="text-5xl md:text-7xl font-epilogue font-extrabold text-white mb-6 drop-shadow-xl">
              Find Your <br/> Polling Unit
            </h1>
            <p className="text-xl text-teal-100 font-medium mb-12 max-w-2xl mx-auto">
              Empowering Lagosians with accurate electoral data. Locate your ward, polling unit, and get ready to make your voice heard.
            </p>
          </motion.div>

          {/* Polling Unit Finder Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto border border-teal-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-teal-400"></div>
            <h3 className="text-2xl font-epilogue font-bold text-slate-800 mb-6 flex items-center justify-center gap-2">
              <Search className="text-teal-500" /> Search INEC Portal
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Enter your Polling Unit Number or Location" 
                className="flex-grow px-6 py-4 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-teal-500 outline-none text-slate-700"
              />
              <button 
                onClick={() => window.open(externalTools.inecPollingUnit, '_blank')}
                className="px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30 whitespace-nowrap"
              >
                Search Portal <ExternalLink size={18} />
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              You will be redirected to the official INEC Polling Unit locator.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Counter Banner */}
      <section className="py-12 bg-white border-y border-slate-200 relative z-30 -mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-epilogue font-black text-blue-600 mb-2">
                <Counter end={lagosLGATotals.totalLGAs} />
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Local Govts</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-epilogue font-black text-teal-600 mb-2">
                <Counter end={lagosLGATotals.totalLCDAs} />
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">LCDAs</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-epilogue font-black text-emerald-600 mb-2">
                <Counter end={lagosLGATotals.totalWards} />
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Wards</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-epilogue font-black text-cyan-600 mb-2">
                <Counter end={lagosLGATotals.totalPollingUnits} suffix="+" />
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Polling Units</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. All 20 LGAs Interactive Grid/Table */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-epilogue font-bold text-slate-900 mb-2">Lagos Electoral Directory</h2>
              <p className="text-slate-600">Browse polling units and wards by Local Government Area.</p>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-grow md:flex-grow-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Filter by LGA name..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="flex bg-white rounded-xl border border-slate-200 p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-teal-50 text-teal-600' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Grid size={20} />
                </button>
                <button 
                  onClick={() => setViewMode('table')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'table' ? 'bg-teal-50 text-teal-600' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {filteredLGAs.map((lga, index) => (
                  <motion.div
                    key={lga.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all group"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{lga.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-slate-500 mb-4">
                      <MapPin size={14} /> HQ: {lga.headquarters}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 rounded-xl p-3 text-center">
                        <div className="text-2xl font-black text-slate-700">{lga.wards}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase">Wards</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-3 text-center">
                        <div className="text-2xl font-black text-slate-700">{lga.pollingUnits}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase">P. Units</div>
                      </div>
                    </div>
                    
                    <a 
                      href={externalTools.inecPollingUnit} 
                      target="_blank" 
                      rel="noreferrer"
                      className="block w-full py-3 text-center rounded-xl bg-slate-50 text-teal-600 font-bold group-hover:bg-teal-600 group-hover:text-white transition-colors"
                    >
                      Find PU &rarr;
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="table"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4 font-bold text-slate-700">LGA Name</th>
                        <th className="px-6 py-4 font-bold text-slate-700">Headquarters</th>
                        <th className="px-6 py-4 font-bold text-slate-700">Wards</th>
                        <th className="px-6 py-4 font-bold text-slate-700">Polling Units</th>
                        <th className="px-6 py-4 font-bold text-slate-700 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLGAs.map((lga, index) => (
                        <motion.tr 
                          key={lga.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.03 }}
                          className="hover:bg-teal-50/50 transition-colors"
                        >
                          <td className="px-6 py-4 font-bold text-slate-900">{lga.name}</td>
                          <td className="px-6 py-4 text-slate-600 flex items-center gap-2">
                            <MapPin size={16} className="text-slate-400" /> {lga.headquarters}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-block px-3 py-1 bg-slate-100 rounded-full font-bold text-slate-700 text-sm">
                              {lga.wards}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full font-bold text-sm">
                              {lga.pollingUnits}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <a 
                              href={externalTools.inecPollingUnit} 
                              target="_blank" 
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-teal-600 font-bold hover:text-teal-800 transition-colors text-sm"
                            >
                              Search <ExternalLink size={14} />
                            </a>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Get Your PVC CTA */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 opacity-50"></div>
        <div className="max-w-5xl mx-auto relative z-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden">
          {/* Decorative background circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-20">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-white/30">
              <Users size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-epilogue font-bold mb-6">Your Vote is Your Voice</h2>
            <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-10 leading-relaxed">
              Ensure you are registered and ready for the next elections. Civic participation is the foundation of a progressive and smart Lagos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={externalTools.inecPollingUnit}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                Register for PVC <ExternalLink size={20} />
              </a>
              <div className="flex items-center justify-center gap-2 text-teal-100 px-4 py-2">
                <CheckCircle size={20} className="text-green-300" /> Secure via INEC Portal
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LASIECLanding;
