import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, HardHat, ShieldCheck, ClipboardCheck } from 'lucide-react'
import { images } from '@/data/images'
import { externalTools, mapEmbeds } from '@/data/extraData'

export default function LASBCALanding() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Vibrant Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={images?.construction?.crane || '/placeholder.jpg'} alt="Construction" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 via-amber-500/60 to-orange-800/80" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10 container mx-auto px-6 py-28 text-center">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">LASBCA & LASPPPA</motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">Building Control and Physical Planning Permits</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}} className="flex flex-wrap justify-center gap-4">
            <a href={externalTools?.lasbcaOnline || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-900 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors shadow-lg">
              LASBCA Portal <ExternalLink className="w-4 h-4" />
            </a>
            <a href={externalTools?.laspppa || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-800 transition-colors shadow-lg border border-orange-700">
              LASPPPA Portal <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3 Step Building Approval */}
      <section className="py-20 container mx-auto px-6">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">3-Step Building Approval Process</h2>
          <p className="text-gray-600">Ensuring structurally sound and aesthetically pleasing developments across Lagos.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-orange-900/5">
            <ClipboardCheck className="w-12 h-12 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">1. Planning Permit</h3>
            <p className="text-gray-600">Submit architectural drawings to LASPPPA for zoning and planning approval.</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-orange-900/5">
            <ShieldCheck className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">2. Authorization</h3>
            <p className="text-gray-600">Obtain structural approval and site authorization from LASBCA.</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.2}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-orange-900/5">
            <HardHat className="w-12 h-12 text-orange-700 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">3. Stage Certification</h3>
            <p className="text-gray-600">Ongoing inspections at key construction stages to ensure compliance.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
