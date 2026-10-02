import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, FileText, CheckCircle, Building } from 'lucide-react'
import { images } from '@/data/images'
import { externalTools, mapEmbeds } from '@/data/extraData'

export default function NTDALanding() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Vibrant Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={images?.lagos?.ekoAtlantic || '/placeholder.jpg'} alt="NTDA" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 via-green-500/60 to-teal-700/80" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10 container mx-auto px-6 py-28 text-center">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">New Towns Development Authority</motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">Pioneering sustainable urban development across Lagos State</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}>
            <a href={externalTools?.ntdaOnline || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg">
              Visit Portal <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3 Step Process */}
      <section className="py-20 container mx-auto px-6">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Development Application Process</h2>
          <p className="text-gray-600">Streamlined process for land allocation and scheme development.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: 1, icon: FileText, title: "Submit Application", desc: "Complete the online forms with required documentation.", color: "emerald" },
            { step: 2, icon: Building, title: "Site Assessment", desc: "Our team reviews the proposal and conducts site visits.", color: "green" },
            { step: 3, icon: CheckCircle, title: "Final Approval", desc: "Receive your allocation letter and development permits.", color: "teal" }
          ].map((item, idx) => (
            <motion.div key={idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:idx*0.1}} viewport={{once:true}} className="relative bg-white p-8 rounded-2xl shadow-xl shadow-emerald-900/5 text-center">
              <div className={`w-16 h-16 bg-${item.color}-100 text-${item.color}-600 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LUAC Application */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Land Use and Allocation Committee (LUAC)</h2>
            <p className="text-emerald-100 mb-8 text-lg">Apply for state land allocations efficiently through the digitized LUAC portal. Ensure you have your tax clearance and identification documents ready.</p>
            <a href="#" className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-400 transition">
              Start Application <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="flex-1 bg-emerald-800 p-8 rounded-2xl shadow-2xl">
             <ul className="space-y-4">
               <li className="flex items-center gap-3"><CheckCircle className="text-emerald-400" /> <span>Faster processing times</span></li>
               <li className="flex items-center gap-3"><CheckCircle className="text-emerald-400" /> <span>Transparent allocation</span></li>
               <li className="flex items-center gap-3"><CheckCircle className="text-emerald-400" /> <span>Online status tracking</span></li>
             </ul>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
