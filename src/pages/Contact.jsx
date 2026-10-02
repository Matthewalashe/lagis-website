import React from 'react';
import { motion } from 'framer-motion';
import { images } from '@/data/images';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-indigo-500/60 to-purple-600/80 z-10" />
        <img src={images.hero.contact} alt="Contact" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute top-20 left-20 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-float z-10" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-float-delayed z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1 initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} className="font-epilogue text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Contact Us</motion.h1>
          <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="font-inter text-xl max-w-2xl mx-auto drop-shadow-md">Get in touch with the LAGIS team.</motion.p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{x:-30, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}}>
            <h2 className="font-epilogue text-4xl font-bold text-[#001838] mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-inter" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-inter" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-inter" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-inter font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">Send Message</button>
            </form>
          </motion.div>

          <motion.div initial={{x:30, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} className="space-y-12">
            <div>
              <h2 className="font-epilogue text-4xl font-bold text-[#001838] mb-8">Our Location</h2>
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe 
                  title="LAGIS Location"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0" 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=3.35,6.61,3.37,6.63&layer=mapnik&marker=6.6218,3.3615">
                </iframe>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><MapPin className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-epilogue font-bold text-[#001838]">Address</h4>
                  <p className="font-inter text-gray-600 mt-1">Alausa, Ikeja, Lagos</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Phone className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-epilogue font-bold text-[#001838]">Phone</h4>
                  <p className="font-inter text-gray-600 mt-1">+234 (0) 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Mail className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-epilogue font-bold text-[#001838]">Email</h4>
                  <p className="font-inter text-gray-600 mt-1">info@lagis.gov.ng</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
