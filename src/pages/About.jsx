import React from 'react';
import { motion } from 'framer-motion';
import { images } from '@/data/images';
import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 via-indigo-500/60 to-purple-700/80 z-10" />
        <img src={images.hero.about} alt="Lagos Island" className="absolute inset-0 w-full h-full object-cover z-0" loading="eager" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-float z-10" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} className="font-epilogue text-5xl md:text-7xl font-bold mb-6 drop-shadow-md">About LAGIS</motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="font-inter text-xl text-blue-100 max-w-2xl mx-auto">Professional GIS Services & Innovation.</motion.p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
          <h2 className="font-epilogue text-4xl font-bold text-[#001838] mb-6">Lagos State Geographic Information System</h2>
          <p className="font-inter text-gray-600 mb-6 text-lg">We provide a full range of services including technical skills, design, and business understanding tailored for spatial mapping and governmental efficiency.</p>
        </motion.div>
        <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img src={images.team.meeting} alt="Team" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500" />
        </motion.div>
      </section>

      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="bg-white p-10 rounded-3xl shadow-sm flex items-start gap-6">
            <Target className="w-12 h-12 text-blue-600 shrink-0" />
            <div>
              <h3 className="font-epilogue text-2xl font-bold text-[#001838] mb-2">Our Mission</h3>
              <p className="font-inter text-gray-600 text-lg">To provide accurate, reliable, and comprehensive geospatial information services supporting sustainable planning in Lagos.</p>
            </div>
          </motion.div>
          
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}} className="bg-white p-10 rounded-3xl shadow-sm flex items-start gap-6">
            <Eye className="w-12 h-12 text-green-600 shrink-0" />
            <div>
              <h3 className="font-epilogue text-2xl font-bold text-[#001838] mb-2">Our Vision</h3>
              <p className="font-inter text-gray-600 text-lg">To be the premier geospatial information hub in Africa, driving innovation and resilience in urban environments.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
