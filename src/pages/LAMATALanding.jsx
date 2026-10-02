import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Bus, Train, CreditCard } from 'lucide-react'
import { images } from '@/data/images'
import { externalTools, mapEmbeds } from '@/data/extraData'

export default function LAMATALanding() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Vibrant Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={images?.transport?.thirdMainland || '/placeholder.jpg'} alt="Lagos Transport" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 via-orange-500/60 to-red-800/80" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10 container mx-auto px-6 py-28 text-center">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">LAMATA</motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">Lagos Metropolitan Area Transport Authority</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}>
            <a href={externalTools?.lamataOnline || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors shadow-lg">
              Visit Portal <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Transport Services */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-red-900/5">
            <Bus className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">BRT System</h3>
            <p className="text-gray-600 mb-4">Dedicated bus lanes providing rapid transit across major corridors in Lagos.</p>
            <img src={images?.transport?.brt || '/placeholder.jpg'} alt="BRT" className="w-full h-32 object-cover rounded-lg" />
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-red-900/5">
            <Train className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">Lagos Rail Mass Transit</h3>
            <p className="text-gray-600 mb-4">Blue and Red rail lines connecting key urban centers for faster commutes.</p>
            <img src={images?.transport?.rail || '/placeholder.jpg'} alt="Rail" className="w-full h-32 object-cover rounded-lg" />
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.2}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-red-900/5">
            <CreditCard className="w-12 h-12 text-yellow-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">Cowry Card</h3>
            <p className="text-gray-600 mb-4">Unified payment system for seamless travel across all LAMATA transport modes.</p>
            <div className="h-32 bg-yellow-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-16 h-16 text-yellow-600" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Embed */}
      {mapEmbeds?.lagosMetro && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Metro Network Map</h2>
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl" dangerouslySetInnerHTML={{__html: mapEmbeds.lagosMetro}} />
          </div>
        </section>
      )}
    </div>
  )
}
