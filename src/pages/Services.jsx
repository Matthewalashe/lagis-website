import React from 'react';
import { motion } from 'framer-motion';
import { images } from '@/data/images';
import { Layers, Map, Compass, Server, Shield, Activity } from 'lucide-react';

const services = [
  { title: "Spatial Data Infrastructure", icon: Layers, desc: "Robust data architecture for geospatial mapping." },
  { title: "Topographic Mapping", icon: Map, desc: "Detailed terrain and elevation modeling." },
  { title: "Land Surveying", icon: Compass, desc: "Accurate boundary and parcel demarcation." },
  { title: "Geospatial Hosting", icon: Server, desc: "Secure cloud infrastructure for GIS assets." },
  { title: "Data Security", icon: Shield, desc: "Enterprise-grade protection for sensitive spatial records." },
  { title: "Real-time Analytics", icon: Activity, desc: "Dynamic monitoring of geographic indicators." },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 via-blue-500/60 to-cyan-600/80 z-10" />
        <img src={images.hero.services} alt="Services" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-float z-10" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-float-delayed z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1 initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} className="font-epilogue text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Our Services</motion.h1>
          <motion.p initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="font-inter text-xl max-w-2xl mx-auto drop-shadow-md">Comprehensive GIS solutions for Lagos State.</motion.p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50/50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay: i*0.1}}
              className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="absolute -right-4 -bottom-4 text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-50 to-blue-50 z-0 group-hover:scale-110 transition-transform pointer-events-none select-none">
                {String(i+1).padStart(2, '0')}
              </div>
              <div className="relative z-10">
                <svc.icon className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="font-epilogue text-2xl font-bold text-[#001838] mb-4">{svc.title}</h3>
                <p className="font-inter text-gray-600">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
