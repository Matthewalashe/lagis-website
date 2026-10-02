import React from 'react';
import { motion } from 'framer-motion';
import { AlertOctagon, Scan, Search, ShieldCheck } from 'lucide-react';
import { images } from '@/data/images';

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

const LASRERALanding = () => {
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
            src={images.units.lasrera.hero}
            alt="LASRERA Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 via-cyan-500/60 to-blue-700/80 mix-blend-multiply" />
        </div>

        <FloatingCircle className="w-72 h-72 bg-teal-400 top-20 left-20" />
        <FloatingCircle className="w-96 h-96 bg-cyan-400 bottom-20 right-20 animation-delay-2000" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-epilogue font-bold mb-6">
              Don't Get Scammed. Report Rogue Agents & Developers
            </h1>
            <p className="text-xl md:text-2xl font-inter mb-10 text-teal-50">
              Invest in Real Estate with Confidence: Enjoy a Seamless Experience with Clear Property Documentation and Hassle-Free Verification.
            </p>
            <button className="bg-white text-teal-800 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition flex items-center justify-center gap-2 mx-auto">
              <AlertOctagon className="w-5 h-5" /> Report Rogue Agents
            </button>
          </motion.div>
        </div>
      </section>

      {/* Scan to Verify Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-800 font-semibold mb-6">
                <Scan className="w-4 h-4" /> SCAN ME
              </div>
              <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-navy mb-6">
                Scan to Verify Landlords & Developers
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Verify building approvals and ensure you're working with registered, legitimate entities in the Lagos Real Estate sector.
              </p>
              <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-700 transition flex items-center gap-2">
                <Search className="w-5 h-5" /> Search Now
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-light-gray p-8 rounded-3xl shadow-xl flex flex-col items-center">
                <img src={images.units.lasrera.qr} alt="Verify QR Code" className="w-64 h-64 object-cover rounded-xl mb-6 shadow-md" />
                <p className="text-lg font-bold text-navy">Point your camera to scan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confidence Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <FloatingCircle className="w-64 h-64 bg-cyan-500/20 top-1/2 left-1/4" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <ShieldCheck className="w-16 h-16 text-teal-400 mx-auto mb-6" />
            <h2 className="text-4xl font-epilogue font-bold mb-6">Invest in Real Estate with Confidence</h2>
            <p className="text-lg text-gray-300 mb-8">
              Lagos State Real Estate Regulatory Authority (LASRERA) protects residents from fraud and ensures standards in the real estate sector.
            </p>
            <img src={images.units.lasrera.verify} alt="Verified" className="mx-auto h-32 object-contain" />
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-teal-50 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-lg"
          >
            <h2 className="text-3xl font-epilogue font-bold text-navy mb-4">Start Your Verification</h2>
            <p className="text-gray-600 mb-8">Don't take chances with your investments. Check the registry today.</p>
            <button className="bg-navy text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition w-full md:w-auto">
              Search Database
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LASRERALanding;
