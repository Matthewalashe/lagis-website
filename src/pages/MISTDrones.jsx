import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Camera, Map, CloudRain } from 'lucide-react'
import { images } from '@/data/images'
import { externalTools, mapEmbeds } from '@/data/extraData'

export default function MISTDrones() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Vibrant Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={images?.drone?.cityAerial || '/placeholder-image.jpg'} alt="Lagos Aerial" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-cyan-500/60 to-blue-800/80" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10 container mx-auto px-6 py-28 text-center">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">MIST Drones</motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">Advanced Aerial Intelligence & Mapping for Lagos State</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}>
            <a href={externalTools?.eGIS || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Visit Portal <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16 container mx-auto px-6">
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5">
            <Camera className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-navy mb-2">Aerial Mapping</h3>
            <p className="text-gray-600">High-resolution drone mapping services for urban planning and real estate.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-cyan-900/5">
            <Map className="w-12 h-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-bold text-navy mb-2">Topographic Surveys</h3>
            <p className="text-gray-600">Precise elevation data and contours for infrastructure development.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5">
            <CloudRain className="w-12 h-12 text-blue-800 mb-4" />
            <h3 className="text-xl font-bold text-navy mb-2">Environmental Monitoring</h3>
            <p className="text-gray-600">Tracking vegetation, waterways, and ecological changes from above.</p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl font-bold text-center text-navy mb-12">Pricing & Plans</motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm text-center">
                <h4 className="text-2xl font-bold text-navy mb-2">Basic Survey</h4>
                <p className="text-blue-600 font-bold text-3xl mb-6">₦50,000<span className="text-lg text-gray-500 font-normal">/hectare</span></p>
                <ul className="text-gray-600 space-y-3 mb-8">
                  <li>2D Orthomosaic Map</li>
                  <li>Standard Resolution</li>
                  <li>3-Day Delivery</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-blue-100 text-blue-700 font-bold hover:bg-blue-200 transition">Request Quote</button>
             </div>
             <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-600/30 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                <h4 className="text-2xl font-bold mb-2">Premium 3D</h4>
                <p className="font-bold text-3xl mb-6">₦120,000<span className="text-lg text-blue-200 font-normal">/hectare</span></p>
                <ul className="space-y-3 mb-8 text-blue-50">
                  <li>3D Point Cloud & Mesh</li>
                  <li>High-Res Orthomosaic</li>
                  <li>Elevation Models (DSM/DTM)</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-white text-blue-600 font-bold hover:bg-gray-50 transition">Request Quote</button>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
