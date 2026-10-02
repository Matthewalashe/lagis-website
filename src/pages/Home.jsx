import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Map, Layers, BarChart, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { images, unitImages, unitQRCodes } from '@/data/images';
import { gisUnits } from '@/data/siteData';

const ROTATING_WORDS = ['Mapping Lagos', 'Building Smart Cities', 'Powering Data'];

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-light-gray overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={images.maps.hero} 
            alt="Lagos Aerial Drone View" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-navy/80 via-primary/70 to-purple-900/80 animate-gradient-cycle bg-[length:200%_200%]" />
        
        {/* Floating Circles */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl"
            animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/20 rounded-full blur-lg"
            animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-epilogue font-bold text-white mb-6 tracking-tight"
          >
            <span className="block mb-2">LAGIS is</span>
            <div className="h-20 overflow-hidden relative w-full flex justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-light-blue to-white"
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-light-blue max-w-2xl mb-10 font-inter"
          >
            Empowering Lagos State with geospatial intelligence for sustainable growth and a smarter future.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <Link to="/maps" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-white hover:text-navy transition-colors flex items-center gap-2">
              Explore Maps <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-colors">
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 z-20 text-white flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm font-semibold tracking-widest uppercase mb-2">Scroll</span>
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-purple-500 rounded-3xl blur-lg opacity-30"></div>
            <img 
              src={images.units.lamata.hero} 
              alt="Lagos Transport Infrastructure" 
              className="relative w-full h-auto rounded-3xl shadow-2xl object-cover border-4 border-white"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-epilogue font-bold text-navy mb-6">A Unified Vision for a Mega City</h2>
            <p className="text-lg text-dark-gray mb-6 leading-relaxed">
              The Lagos State Geographic Information System (LAGIS) provides the critical spatial infrastructure needed to govern, plan, and manage one of Africa's fastest-growing economies. 
            </p>
            <p className="text-lg text-dark-gray mb-8 leading-relaxed">
              By connecting multiple agencies and units under one cohesive data umbrella, we enable transparent land administration, effective transport planning, and smarter urban development.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-light-blue rounded-lg text-primary">
                  <Map size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Accurate Mapping</h4>
                  <p className="text-sm text-gray-600">High-res aerial and drone data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-light-blue rounded-lg text-primary">
                  <Layers size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Integrated Layers</h4>
                  <p className="text-sm text-gray-600">Cross-agency data sharing.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. GIS Units Grid */}
      <section className="py-24 px-4 bg-light-gray relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-epilogue font-bold text-navy mb-4"
            >
              Our GIS Units
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-dark-gray max-w-2xl mx-auto"
            >
              Explore the specialized units driving innovation across sectors in Lagos State.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gisUnits.map((unit, index) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={unitImages[unit.id] || images.lagos.ekoAtlantic} 
                    alt={unit.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 text-white text-xs font-bold rounded-full bg-gradient-to-r ${unit.gradient}`}>
                    {unit.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow relative">
                  <h3 className="text-xl font-bold text-navy mb-3 font-epilogue">{unit.shortName}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{unit.description}</p>
                  
                  <div className="flex justify-between items-end mt-auto">
                    <Link to={`/agencies/${unit.slug}`} className="text-primary font-semibold hover:text-navy transition-colors flex items-center gap-1 text-sm">
                      Learn More <ArrowRight size={16} />
                    </Link>
                    {unitQRCodes[unit.id] && (
                      <div className="w-12 h-12 p-1 bg-white border border-gray-100 rounded-lg shadow-sm">
                        <img src={unitQRCodes[unit.id]} alt="QR Code" className="w-full h-full" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-epilogue font-bold text-navy mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-light-gray"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <MapPin size={32} />
              </div>
              <h4 className="font-bold text-navy mb-2">Location</h4>
              <p className="text-sm text-gray-600 text-center">LASPIC Building 15,<br/>The Secretariat, Alausa</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-light-gray"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <Phone size={32} />
              </div>
              <h4 className="font-bold text-navy mb-2">Phone</h4>
              <p className="text-sm text-gray-600">+234 (0) 9039814222<br/>+234 (0) 9039817323</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-light-gray"
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Mail size={32} />
              </div>
              <h4 className="font-bold text-navy mb-2">Email</h4>
              <p className="text-sm text-gray-600">info@egisunit.com<br/>info@lagisunit.com</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Newsletter */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl font-epilogue font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-light-blue mb-8">Subscribe to our newsletter for the latest updates on Lagos spatial data and urban planning.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary border-none shadow-inner"
              required
            />
            <button type="submit" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap shadow-lg">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* Include CSS keyframes in the global styles or standard Tailwind arbitrary values */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-cycle {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-cycle {
          animation: gradient-cycle 15s ease infinite;
        }
      `}} />
    </div>
  );
};

export default Home;
