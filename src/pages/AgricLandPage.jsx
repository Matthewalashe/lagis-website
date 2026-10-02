import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Tractor, Sprout, Wheat } from 'lucide-react'
import { images } from '@/data/images'
import { externalTools, mapEmbeds } from '@/data/extraData'

export default function AgricLandPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Vibrant Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={images?.agriculture?.aerial || '/placeholder.jpg'} alt="Agriculture" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-lime-600/80 via-green-500/60 to-emerald-700/80" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10 container mx-auto px-6 py-28 text-center">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Agricultural Land Holdings</motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">Securing Land for Food Security and Agri-business</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}>
            <a href="#" className="inline-flex items-center gap-2 bg-white text-lime-900 px-8 py-3 rounded-full font-semibold hover:bg-lime-50 transition-colors shadow-lg">
              Agric Portal <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-lime-900/5">
            <Sprout className="w-12 h-12 text-lime-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">Farm Estates</h3>
            <p className="text-gray-600">Allocation and management of agricultural lands across dedicated farm estates in the state.</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-lime-900/5">
            <Tractor className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">Agri-business Support</h3>
            <p className="text-gray-600">Facilitating access to land for large-scale commercial farming and processing hubs.</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.2}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-lime-900/5">
            <Wheat className="w-12 h-12 text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">Food Security</h3>
            <p className="text-gray-600">Strategic land preservation to ensure long-term food production capabilities for Lagos.</p>
          </motion.div>
        </div>
      </section>

      {/* Map Embed */}
      {mapEmbeds?.units?.agric && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Agricultural Zones Map</h2>
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl" dangerouslySetInnerHTML={{__html: mapEmbeds.units.agric}} />
          </div>
        </section>
      )}
    </div>
  )
}
