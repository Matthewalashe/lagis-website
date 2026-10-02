import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck, FileText, Landmark } from 'lucide-react';
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

const LandsBureauLanding = () => {
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
            src={images.units.landsBureau.hero}
            alt="Lands Bureau Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/80 via-amber-500/60 to-orange-700/80 mix-blend-multiply" />
        </div>

        <FloatingCircle className="w-72 h-72 bg-yellow-400 top-20 left-20" />
        <FloatingCircle className="w-96 h-96 bg-amber-400 bottom-20 right-20 animation-delay-2000" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-epilogue font-bold mb-6">
              Lands Bureau eGIS Unit
            </h1>
            <p className="text-xl md:text-2xl font-inter mb-10 text-yellow-50">
              Securing Land Tenure and Facilitating Sustainable Urban Planning in Lagos State
            </p>
            <button className="bg-white text-yellow-800 px-8 py-4 rounded-full font-bold hover:bg-yellow-50 transition flex items-center justify-center gap-2 mx-auto">
              Explore Services <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-epilogue font-bold text-navy mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Managing the land resources of Lagos effectively.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Land Allocation', desc: 'Efficient allocation of state lands to citizens and investors.' },
              { icon: FileText, title: 'Title Registration', desc: 'Secure and digital registration of land titles and documents.' },
              { icon: Landmark, title: 'Land Administration', desc: 'Comprehensive management and oversight of land policies.' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-light-gray p-8 rounded-2xl shadow-sm border-t-4 border-yellow-500 hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <FloatingCircle className="w-64 h-64 bg-amber-500/20 bottom-0 left-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-epilogue font-bold mb-6">Digital Mapping & Records</h2>
              <p className="text-lg text-gray-300 mb-8">
                We utilize advanced geographic information systems to maintain accurate and transparent land records for Lagos State.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-yellow-400" />
                  <span>Secure digital archives</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-yellow-400" />
                  <span>Quick access to property history</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <img src={images.units.landsBureau.map} alt="Digital Mapping" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-yellow-50 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-lg border-t-4 border-yellow-500"
          >
            <h2 className="text-3xl font-epilogue font-bold text-navy mb-4">Need Assistance?</h2>
            <p className="text-gray-600 mb-8">Contact the Lands Bureau for queries related to land administration in Lagos.</p>
            <button className="bg-yellow-600 text-white px-10 py-4 rounded-full font-bold hover:bg-yellow-700 transition">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandsBureauLanding;
