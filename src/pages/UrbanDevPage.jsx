import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, HardHat, FileSearch, Building2 } from 'lucide-react'
import { images } from '@/data/images'
import { externalTools, mapEmbeds } from '@/data/extraData'

export default function UrbanDevPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Vibrant Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={images?.construction?.crane || '/placeholder.jpg'} alt="Urban Development" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-indigo-500/60 to-blue-700/80" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10 container mx-auto px-6 py-28 text-center">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Urban Development</motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">Building a Smart and Sustainable Megacity</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}>
            <a href={externalTools?.laspppa || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-lg">
              Planning Portal <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-purple-900/5">
            <FileSearch className="w-12 h-12 text-purple-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">Building Permit Search</h3>
            <p className="text-gray-600">Verify the approval status of building developments across Lagos to ensure compliance with urban planning regulations.</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-purple-900/5">
            <Building2 className="w-12 h-12 text-indigo-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">CAP Program</h3>
            <p className="text-gray-600">The Certified Accreditor Program streamlines the building approval process by partnering with private sector professionals.</p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <HardHat className="w-16 h-16 text-indigo-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Regulating Physical Development</h2>
          <p className="text-indigo-100 text-lg mb-8">We are committed to achieving zero building collapse in Lagos State through strict enforcement of building codes and regular site inspections.</p>
          <a href={externalTools?.lasbcaOnline || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-400 transition-colors">
            Report Illegal Construction <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}
