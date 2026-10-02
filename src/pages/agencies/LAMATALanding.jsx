import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Train, Bus, Map as MapIcon, Download, Navigation } from 'lucide-react';
import { images } from '@/data/images';
import { mapEmbeds, externalTools } from '@/data/extraData';

const FloatingCircle = ({ className }) => (
  <motion.div
    className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

const LAMATALanding = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-light-gray overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.units.lamata.hero}
            alt="LAMATA Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 via-orange-500/60 to-red-800/80 mix-blend-multiply" />
        </div>

        <FloatingCircle className="w-72 h-72 bg-red-400 top-20 left-20" />
        <FloatingCircle className="w-96 h-96 bg-orange-400 bottom-20 right-20 animation-delay-2000" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-epilogue font-bold mb-6">
              LAMATA
            </h1>
            <p className="text-xl md:text-3xl font-inter mb-4 text-orange-50 font-semibold">
              Lagos State Transport Management Authority
            </p>
            <p className="text-lg md:text-xl font-inter mb-10 text-orange-100">
              Keeping Lagos moving and functional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-800 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition flex items-center justify-center gap-2">
                See what we offer <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transport Modes Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-epilogue font-bold text-navy mb-4">Lagos is moving</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See how the BRT and Metro Systems are making life easier</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-light-gray rounded-3xl p-8 shadow-sm hover:shadow-md transition"
            >
              <Bus className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-navy mb-4">BRT System</h3>
              <img src={images.units.lamata.brt} alt="BRT" className="w-full h-48 object-cover rounded-xl mb-6" />
              <p className="text-gray-600 mb-6">See how the BRT System is making life easier.</p>
              <button className="text-red-600 font-bold flex items-center gap-2 hover:text-red-700">
                See what we do <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-light-gray rounded-3xl p-8 shadow-sm hover:shadow-md transition"
            >
              <Train className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold text-navy mb-4">Lagos Metro</h3>
              <img src={images.units.lamata.metro} alt="Metro" className="w-full h-48 object-cover rounded-xl mb-6" />
              <p className="text-gray-600 mb-6">Lagos Metro is solving our transport issues.</p>
              <button className="text-orange-600 font-bold flex items-center gap-2 hover:text-orange-700">
                See how we get here <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <FloatingCircle className="w-64 h-64 bg-red-500/20 top-0 right-0" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-epilogue font-bold mb-4">Layered Metro and BRT Map</h2>
            <div className="flex justify-center gap-4">
              <button className="bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition flex items-center gap-2">
                <MapIcon className="w-4 h-4" /> Go to map
              </button>
              <button className="border border-white text-white px-6 py-2 rounded-full font-bold hover:bg-white/10 transition flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Map
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[500px] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl bg-gray-800"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={mapEmbeds.units.lamata}
              title="LAMATA Map"
            />
          </motion.div>
        </div>
      </section>

      {/* Lagride CTA Section */}
      <section className="py-24 bg-red-50 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-epilogue font-bold text-navy mb-6">Get Lagride</h2>
            <p className="text-xl text-gray-600 mb-4">Download → Book → Ride</p>
            <p className="text-lg text-gray-500 mb-10">If you must ride, ride with style and convenience</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={externalTools.lagRide} target="_blank" rel="noreferrer" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition flex items-center justify-center gap-2">
                <Navigation className="w-5 h-5" /> Get LagRide
              </a>
              <a href={externalTools.cowryCard} target="_blank" rel="noreferrer" className="bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition flex items-center justify-center gap-2">
                Get Cowry Card
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LAMATALanding;
