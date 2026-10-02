import { images } from '@/data/images';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bus, Ship, Train, Car, Navigation, ShoppingBag, Phone, Mail } from 'lucide-react';

const agencies = [
  { name: 'LagFerry', icon: Ship, desc: 'Optimizing water transport routes and terminal locations.', color: 'bg-blue-500' },
  { name: 'LAMATA', icon: Train, desc: 'Planning BRT and metro rail corridors for seamless mobility.', color: 'bg-red-500' },
  { name: 'LASTMA', icon: Navigation, desc: 'Managing traffic flow and incident response mapping.', color: 'bg-yellow-500' },
  { name: 'VIS', icon: Car, desc: 'Vehicle inspection and safety compliance tracking.', color: 'bg-green-500' },
  { name: 'MVAA', icon: Bus, desc: 'Motor vehicle administration and licensing spatial data.', color: 'bg-purple-500' }
];

const TransportPage = () => {
  return (
    <div className="min-h-screen bg-light-gray font-inter text-dark-gray">
      {/* Hero Section */}
      <section className="bg-red-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-epilogue mb-6"
          >
            Moving Lagos Forward
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-red-100 max-w-2xl mb-10"
          >
            See how we are redefining mobility in Lagos using geospatial intelligence for transportation planning and infrastructure development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/maps" className="bg-white text-red-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-colors shadow-lg">
              View Transport Maps
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        
        {/* Agencies Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-epilogue mb-4">Integrated Transport Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We support multimodal transport systems including road, rail, water, and non-motorized transport across various agencies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencies.map((agency, index) => (
              <motion.div 
                key={agency.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 ${agency.color} text-white rounded-xl flex items-center justify-center mb-6`}>
                  <agency.icon size={28} />
                </div>
                <h3 className="text-xl font-bold font-epilogue mb-3">{agency.name}</h3>
                <p className="text-gray-600">{agency.desc}</p>
              </motion.div>
            ))}
            {/* Join Us Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-navy text-white p-8 rounded-2xl shadow-sm border border-navy flex flex-col justify-center"
            >
              <h3 className="text-xl font-bold font-epilogue mb-3">Join us in shaping history</h3>
              <p className="text-light-blue mb-6">Contribute to the smart and sustainable megacity vision.</p>
              <Link to="/contact" className="text-primary hover:text-white font-medium flex items-center gap-2 transition-colors">
                Partner with us &rarr;
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Merchandise Preview */}
        <section className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold font-epilogue mb-4">Official Transport Maps & Merch</h2>
              <p className="text-gray-600 mb-8">
                Get high-quality printed maps of Lagos transport corridors, BRT routes, and metro lines. Perfect for planners, researchers, and enthusiasts.
              </p>
              <Link to="/shop" className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <ShoppingBag size={20} />
                Shop Now
              </Link>
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-xl p-4 flex flex-col items-center justify-center border border-gray-200">
                <MapIcon className="w-16 h-16 text-gray-400 mb-2" />
                <span className="text-sm font-medium text-gray-600">Metro Map</span>
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl p-4 flex flex-col items-center justify-center border border-gray-200">
                <MapIcon className="w-16 h-16 text-gray-400 mb-2" />
                <span className="text-sm font-medium text-gray-600">BRT Routes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-900 text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold font-epilogue mb-6">Need Transport Data?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Request access to transport-related spatial datasets, collaborate on mobility studies, or submit feedback on infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:info@egisunit.com" className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-xl transition-colors">
              <Mail size={20} className="text-primary" />
              info@egisunit.com
            </a>
            <a href="tel:+2349039814222" className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-xl transition-colors">
              <Phone size={20} className="text-primary" />
              +234 (0) 903 981 4222
            </a>
          </div>
        </section>

      </main>
    </div>
  );
};

// Simple map icon component since we can't import map easily inside the same file
const MapIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="15" y1="3" x2="15" y2="21"></line>
  </svg>
);

export default TransportPage;
