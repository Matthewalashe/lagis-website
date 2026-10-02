import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, UserPlus, LogIn, ShoppingBag, Search } from 'lucide-react';
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

const LASVOLanding = () => {
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
            src={images.units.lasvo.hero}
            alt="LASVO Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600/80 via-blue-500/60 to-indigo-700/80 mix-blend-multiply" />
        </div>

        <FloatingCircle className="w-72 h-72 bg-sky-400 top-20 left-20" />
        <FloatingCircle className="w-96 h-96 bg-indigo-400 bottom-20 right-20 animation-delay-2000" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-epilogue font-bold mb-6">
              LASVO - Value Your Property.
            </h1>
            <p className="text-xl md:text-2xl font-inter mb-10 text-sky-50">
              Lagos State Valuation Office. Your property is valuable. See how it works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-800 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition flex items-center justify-center gap-2">
                Start now <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculate & Verify Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-light-gray rounded-3xl p-10 border-t-4 border-sky-500 shadow-sm"
            >
              <Calculator className="w-12 h-12 text-sky-600 mb-6" />
              <h2 className="text-3xl font-epilogue font-bold text-navy mb-4">Calculate Your Land Use Charge</h2>
              <p className="text-gray-600 mb-8">Easily estimate your land use charge for properties within Lagos state.</p>
              <button className="bg-sky-600 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-700 transition flex items-center gap-2">
                Calculate now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-light-gray rounded-3xl p-10 border-t-4 border-indigo-500 shadow-sm"
            >
              <Search className="w-12 h-12 text-indigo-600 mb-6" />
              <h2 className="text-3xl font-epilogue font-bold text-navy mb-4">Value your property. Contact a valuer</h2>
              <p className="text-gray-600 mb-8">Connect with registered professionals to assess your property's worth accurately.</p>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition flex items-center gap-2">
                Search Now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valuers Network Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <FloatingCircle className="w-64 h-64 bg-sky-500/20 top-1/2 left-0" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-epilogue font-bold mb-6">Are you a valuer?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join our growing list of verified Valuers and easily get more clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-sky-500 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-600 transition flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" /> Create an account
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition flex items-center justify-center gap-2">
                <LogIn className="w-5 h-5" /> Already registered? Login
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-24 bg-sky-50 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-epilogue font-bold text-navy mb-4">Our SHOP</h2>
            <p className="text-xl text-gray-600 mb-6">Merchandise</p>
            <button className="text-sky-600 font-bold flex items-center justify-center gap-2 mx-auto hover:text-sky-700">
              Discover All <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'LAGIS Hoodie', date: 'Sep 15, 2024' },
              { name: 'LAGIS Cargo Pants', date: 'Sep 10, 2024' },
              { name: 'LAGIS Shorts', date: 'Sep 12, 2024' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-indigo-500 hover:shadow-md transition text-center"
              >
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-sm text-gray-500 mb-1">Souvenir</p>
                <h3 className="text-xl font-bold text-navy mb-2">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LASVOLanding;
