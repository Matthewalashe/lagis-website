import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Bus, Ship, Train } from 'lucide-react'
import { images } from '@/data/images'
import { externalTools, mapEmbeds } from '@/data/extraData'

export default function TransportPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Vibrant Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={images?.transport?.thirdMainland || '/placeholder.jpg'} alt="Transport" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 via-orange-500/60 to-yellow-600/80" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10 container mx-auto px-6 py-28 text-center">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Transportation</motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">Integrated Multi-Modal Transport System</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}>
            <a href={externalTools?.lamataOnline || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors shadow-lg">
              Transport Portal <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-red-900/5">
            <Bus className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-2xl font-bold text-navy mb-4">Bus Rapid Transit (BRT)</h3>
            <p className="text-gray-600 mb-6">High-capacity buses running on dedicated lanes, offering fast and reliable commutes across Lagos.</p>
            <img src={images?.transport?.brt || '/placeholder.jpg'} alt="BRT" className="w-full h-48 object-cover rounded-xl" />
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-red-900/5">
            <Ship className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold text-navy mb-4">Ferry Services (LAGFERRY)</h3>
            <p className="text-gray-600 mb-6">Utilizing Lagos waterways to ease road congestion with safe and modern ferries.</p>
            <img src={images?.transport?.ferry || '/placeholder.jpg'} alt="Ferry" className="w-full h-48 object-cover rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* Map Embed */}
      {mapEmbeds?.lagosMetro && (
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Lagos Metro Network</h2>
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl bg-white" dangerouslySetInnerHTML={{__html: mapEmbeds.lagosMetro}} />
          </div>
        </section>
      )}
    </div>
  )
}
