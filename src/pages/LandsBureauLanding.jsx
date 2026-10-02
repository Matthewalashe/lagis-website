import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Map, FileCheck, Calculator } from 'lucide-react'
import { images } from '@/data/images'
import { externalTools, mapEmbeds } from '@/data/extraData'

export default function LandsBureauLanding() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Vibrant Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={images?.land?.property || '/placeholder.jpg'} alt="Lands Bureau" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/80 via-amber-500/60 to-orange-700/80" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10 container mx-auto px-6 py-28 text-center">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Lands Bureau</motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">Management and Administration of Land in Lagos State</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}} className="flex flex-wrap justify-center gap-4">
            <a href={externalTools?.landsBureau || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-900 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors shadow-lg">
              Lands Portal <ExternalLink className="w-4 h-4" />
            </a>
            <a href={externalTools?.landUseCharge || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-800 transition-colors shadow-lg border border-orange-700">
              Land Use Charge <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-orange-900/5">
            <FileCheck className="w-12 h-12 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">LUAC Application</h3>
            <p className="text-gray-600">Process your Certificate of Occupancy (C of O) and Governor's Consent electronically.</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-orange-900/5">
            <Map className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">Land Registry</h3>
            <p className="text-gray-600">Conduct electronic land searches and verify property titles securely online.</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.2}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-orange-900/5">
            <Calculator className="w-12 h-12 text-yellow-600 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">LUC Calculator</h3>
            <p className="text-gray-600">Calculate and pay your Land Use Charge seamlessly with our online portal.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
