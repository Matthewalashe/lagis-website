import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, ShieldAlert, Home, FileSearch } from 'lucide-react'
import { images } from '@/data/images'
import { externalTools, mapEmbeds } from '@/data/extraData'

export default function LASRERALanding() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Vibrant Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={images?.realEstate?.modern || '/placeholder.jpg'} alt="Real Estate" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 via-cyan-500/60 to-blue-700/80" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10 container mx-auto px-6 py-28 text-center">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">LASRERA</motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">Lagos State Real Estate Regulatory Authority</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}>
            <a href={externalTools?.lasreraOnline || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors shadow-lg">
              Visit Portal <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-teal-900/5">
            <Home className="w-12 h-12 text-teal-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">Agency Registration</h3>
            <p className="text-gray-600">Register your real estate agency with the state government for legitimacy and trust.</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-teal-900/5">
            <FileSearch className="w-12 h-12 text-cyan-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">Property Verification</h3>
            <p className="text-gray-600">Verify property titles and ownership details before concluding any real estate transaction.</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.2}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-xl shadow-teal-900/5">
            <ShieldAlert className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold text-navy mb-3">Anti-Fraud Protection</h3>
            <p className="text-gray-600">Report fraudulent real estate practitioners and seek mediation for disputes.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
