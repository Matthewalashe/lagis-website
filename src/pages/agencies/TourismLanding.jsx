import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Compass, Star, Music, Palmtree, ShoppingBag, Landmark } from 'lucide-react';
import { images } from '@/data/images';
import { tourismSpots, mapEmbeds } from '@/data/extraData';

const TourismLanding = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSpots = activeCategory === 'All' 
    ? tourismSpots.dettyDecember 
    : tourismSpots.dettyDecember.filter(spot => spot.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Nightlife': return <Music size={16} />;
      case 'Beach': return <Palmtree size={16} />;
      case 'Culture': return <Star size={16} />;
      case 'Heritage': return <Landmark size={16} />;
      case 'Shopping': return <ShoppingBag size={16} />;
      default: return <Compass size={16} />;
    }
  };

  return (
    <div className="w-full bg-orange-50 overflow-hidden font-inter">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.tourism.beach} 
            alt="Bar Beach Lagos" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Warm Vibrant Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-orange-500/80 via-pink-500/60 to-purple-600/80" />
        
        {/* Floating Emojis / Decor */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 text-6xl drop-shadow-lg"
          >
            🌴
          </motion.div>
          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, 15, -5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-1/4 text-5xl drop-shadow-lg"
          >
            🎉
          </motion.div>
          <motion.div 
            animate={{ y: [0, -25, 0], rotate: [0, -20, 20, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/3 text-6xl drop-shadow-lg"
          >
            🌊
          </motion.div>
          <motion.div 
            animate={{ y: [0, 35, 0], rotate: [0, 20, -20, 0] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-1/3 right-1/3 text-5xl drop-shadow-lg"
          >
            🍹
          </motion.div>
        </div>

        <div className="relative z-30 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-epilogue font-extrabold text-white mb-6 drop-shadow-xl"
          >
            This is Lagos, <br/> Eko Akete <span className="inline-block text-yellow-300">🌴</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-yellow-100 font-medium mb-10 drop-shadow-md"
          >
            Experience the pulse of Africa's most vibrant city
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-yellow-400 text-purple-900 text-xl font-bold rounded-full shadow-[0_0_40px_rgba(250,204,21,0.6)] hover:bg-yellow-300 transition-colors flex items-center gap-3"
            onClick={() => document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the Map <MapPin size={24} />
          </motion.button>
        </div>
      </section>

      {/* 2. Detty December Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-orange-100 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-epilogue font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600 mb-6"
            >
              Detty December & Beyond
            </motion.h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {tourismSpots.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    activeCategory === category 
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-purple-600 hover:bg-purple-50 shadow'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredSpots.map((spot, index) => (
                <motion.div
                  key={spot.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-pink-100 flex flex-col group"
                >
                  <div className="h-48 w-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 relative overflow-hidden flex items-center justify-center">
                    {/* Placeholder image effect */}
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
                    <div className="text-white opacity-50 group-hover:scale-110 transition-transform duration-500">
                      {getCategoryIcon(spot.category)}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-purple-700 px-3 py-1 rounded-full text-xs font-bold shadow flex items-center gap-1">
                      {getCategoryIcon(spot.category)}
                      {spot.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm font-bold text-orange-500 mb-2 gap-1 uppercase tracking-wider">
                      <MapPin size={14} /> {spot.area}
                    </div>
                    <h3 className="text-2xl font-epilogue font-bold text-gray-900 mb-3">{spot.name}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{spot.desc}</p>
                    <button className="mt-auto w-full py-3 bg-pink-50 text-pink-600 font-bold rounded-xl group-hover:bg-pink-600 group-hover:text-white transition-colors flex justify-center items-center gap-2">
                      View Details <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. Lagos at Night */}
      <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={images.tourism.nightlife} 
            alt="Lagos Nightlife" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        
        <div className="relative z-20 max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-epilogue font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 mb-6"
          >
            The City That Never Sleeps
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            When the sun goes down, Lagos comes alive. From the vibrant mainland clubs to the upscale island lounges, experience a nightlife that sets the standard for the continent.
          </motion.p>
        </div>
      </section>

      {/* 4. Culture */}
      <section className="py-24 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-orange-900 mb-6">Deep Roots, Modern Vibes</h2>
            <p className="text-lg text-orange-800/80 mb-6">
              Home to the iconic National Theatre, world-class art galleries, and a thriving creative scene. Lagos is where traditional African heritage meets contemporary global culture.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-orange-900 font-medium">
                <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-600"><Star size={20} /></div>
                Nike Art Gallery - Africa's largest art collection
              </li>
              <li className="flex items-center gap-3 text-orange-900 font-medium">
                <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-600"><Landmark size={20} /></div>
                National Theatre - The architectural masterpiece
              </li>
              <li className="flex items-center gap-3 text-orange-900 font-medium">
                <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-600"><Music size={20} /></div>
                Fela Shrine - The home of Afrobeat
              </li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-[2rem] transform rotate-3 opacity-50"></div>
            <img 
              src={images.tourism.culture} 
              alt="National Theatre" 
              className="relative w-full rounded-[2rem] shadow-2xl object-cover h-96 border-4 border-white"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Map Embed */}
      <section id="map-section" className="py-24 px-4 bg-purple-900 text-white relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTggMEwwIDhaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-epilogue font-bold mb-4">Interactive Tourist Map</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Plan your adventure. Discover hot spots, navigate the city, and build your perfect Lagos itinerary.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-3xl shadow-2xl overflow-hidden">
            <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gray-100">
              <iframe 
                src={mapEmbeds.units.tourism}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Lagos Tourism Map"
                className="w-full h-full grayscale-[20%] contrast-125"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourismLanding;
