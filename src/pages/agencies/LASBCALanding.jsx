import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckSquare, Search, Award, ShieldCheck } from 'lucide-react';
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

const LASBCALanding = () => {
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
            src={images.units.lasbca.hero}
            alt="LASBCA Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 via-amber-500/60 to-orange-800/80 mix-blend-multiply" />
        </div>

        <FloatingCircle className="w-72 h-72 bg-amber-400 top-20 left-20" />
        <FloatingCircle className="w-96 h-96 bg-orange-400 bottom-20 right-20 animation-delay-2000" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-epilogue font-bold mb-6">
              What is LASBCA?
            </h1>
            <p className="text-xl md:text-2xl font-inter mb-10 text-orange-50">
              LASBCA eGIS Unit - Building Control and Compliance
            </p>
            <button className="bg-white text-orange-800 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition flex items-center justify-center gap-2 mx-auto">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
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
            <h2 className="text-4xl font-epilogue font-bold text-navy mb-4">How It Works (3-Step Process)</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ensuring compliance and building safety</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CheckSquare, title: 'Get Building Approval', desc: 'Contact LASPPPA for planning permit with your valid land documents before commencing construction.' },
              { icon: Search, title: 'Staging Inspection', desc: 'We will carry out inspections at every stage of construction to ensure that your project meets our standard.' },
              { icon: Award, title: 'Get CAP', desc: 'Certify your property with our internationally recognized CAP certification.' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-light-gray p-8 rounded-2xl shadow-sm border-t-4 border-orange-500 hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Information */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <FloatingCircle className="w-64 h-64 bg-orange-500/20 bottom-0 right-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={images.units.lasbca.hero} alt="Compliance" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-epilogue font-bold mb-6">Building the Future Safely</h2>
              <p className="text-lg text-gray-300 mb-8">
                Compliance with LASBCA guidelines ensures that your building stands the test of time, free from regulatory hurdles.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-orange-400" />
                  <span>Robust material inspection</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-orange-400" />
                  <span>Site safety enforcement</span>
                </li>
              </ul>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter & Contact */}
      <section className="py-24 bg-orange-50 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-lg border-t-4 border-orange-500"
          >
            <h2 className="text-3xl font-epilogue font-bold text-navy mb-4">Subscribe to Updates</h2>
            <p className="text-gray-600 mb-8">Be the first to know when we share updates. Sign up for our weekly newsletter.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LASBCALanding;
