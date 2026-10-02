import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, CreditCard, Download, Building, Users } from 'lucide-react';
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

const NTDALanding = () => {
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
            src={images.units.ntda.hero}
            alt="NTDA Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 via-green-500/60 to-teal-700/80 mix-blend-multiply" />
        </div>

        <FloatingCircle className="w-72 h-72 bg-emerald-400 top-20 left-20" />
        <FloatingCircle className="w-96 h-96 bg-teal-400 bottom-20 right-20 animation-delay-2000" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-epilogue font-bold mb-6">
              Apply for Private Lands with LUAC
            </h1>
            <p className="text-xl md:text-2xl font-inter mb-10 text-emerald-50">
              Apply for State Lands. Start your journey here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-800 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition flex items-center justify-center gap-2">
                Start Application <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
                Start Here
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-epilogue font-bold text-navy mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">3-Step Process to enjoy our services</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: '1. Choose Service', desc: 'Select from available eGIS services and continue.' },
              { icon: CreditCard, title: '2. Pay Online', desc: 'Secure payment via our payment gateway.' },
              { icon: Download, title: '3. Receive Document', desc: 'Emailed or available for download after confirmation.' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-light-gray p-8 rounded-2xl shadow-sm border-t-4 border-emerald-500 hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estate Help Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <FloatingCircle className="w-64 h-64 bg-emerald-500/20 top-0 left-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-epilogue font-bold mb-6">We Help Estates Move Faster</h2>
              <p className="text-lg text-gray-300 mb-8">
                Put yourselves in the merchant's shoes. We are meant to partner on the long run to build your dream project.
                Let LAGIS Units handle your digitization projects. We will handle the heavy lifting for you.
              </p>
              <ul className="space-y-4 mb-8">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Building className="w-6 h-6 text-emerald-400" />
                    <span>Comprehensive GIS planning for estates</span>
                  </li>
                ))}
              </ul>
              <button className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition">
                Contact Us
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={images.units.ntda.card} alt="Estate Help" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-emerald-50 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-epilogue font-bold text-navy mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-10">Block 15, The Secretariat, Alausa | +234 (808) 567-89-00 | info@lagisunit.com</p>
            <button className="bg-navy text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition flex items-center justify-center gap-2 mx-auto">
              <Users className="w-5 h-5" /> Submit Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NTDALanding;
