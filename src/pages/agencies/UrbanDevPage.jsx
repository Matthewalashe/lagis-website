import { images } from '@/data/images';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Leaf, User, ShoppingBag } from 'lucide-react';

const UrbanDevPage = () => {
  return (
    <div className="min-h-screen bg-light-gray font-inter text-dark-gray">
      {/* Hero Section */}
      <section className="bg-amber-600 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-epilogue mb-6"
          >
            Search for Building Approvals
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto mb-10"
          >
            Creating liveable communities for everyone through strategic physical planning, urban development, and building control.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto flex"
          >
            <input 
              type="text" 
              placeholder="Enter Application Reference or Site Address..." 
              className="w-full px-6 py-4 pr-16 rounded-l-xl border-none focus:outline-none text-dark-gray text-lg"
            />
            <button className="bg-navy hover:bg-gray-800 text-white px-8 py-4 rounded-r-xl transition-colors flex items-center justify-center">
              <Search size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        
        {/* Programs Section */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* CAP Program */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
          >
            <ShieldCheck className="w-12 h-12 text-amber-600 mb-6" />
            <h2 className="text-3xl font-bold font-epilogue mb-4">Certified Accreditators Programme (CAP)</h2>
            <p className="text-gray-600 mb-8">
              Are you a developer or consultant in the built environment? Certify your property with our internationally recognized CAP certification to ensure compliance with Lagos State building standards.
            </p>
            <Link to="/cap-registration" className="text-amber-600 font-bold hover:text-amber-700 flex items-center gap-2">
              Apply for Certification &rarr;
            </Link>
          </motion.div>

          {/* Green Building */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-emerald-50 p-10 rounded-3xl border border-emerald-100"
          >
            <Leaf className="w-12 h-12 text-emerald-600 mb-6" />
            <h2 className="text-3xl font-bold font-epilogue mb-4 text-emerald-900">Lagos is going green</h2>
            <p className="text-emerald-800 mb-8">
              Get your building certified as a Green Building. Join the movement towards sustainable urban development and enjoy incentives for eco-friendly construction practices.
            </p>
            <Link to="/green-building" className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-2">
              Learn More &rarr;
            </Link>
          </motion.div>
        </section>

        {/* Leader Spotlight */}
        <section className="bg-navy text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-full flex items-center justify-center shrink-0 border-4 border-gray-700 overflow-hidden">
               <User className="w-16 h-16 text-gray-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-epilogue mb-2">Leadership Spotlight</h2>
              <p className="text-primary font-medium text-lg mb-4">Dr. Olajide Abiodun Babatunde</p>
              <p className="text-gray-300 text-sm uppercase tracking-wider mb-6">Special Adviser, eGIS & Urban Development</p>
              <p className="text-light-blue leading-relaxed">
                "Our mission is to transform Lagos into a resilient, smart, and inclusive megacity. Through robust urban planning, building control, and spatial technology, we are creating sustainable communities for present and future generations."
              </p>
            </div>
          </div>
        </section>

        {/* Merchandise Preview */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold font-epilogue mb-2">Urban Planning Materials</h2>
              <p className="text-gray-600">Official masterplans, zoning maps, and merchandise.</p>
            </div>
            <Link to="/shop" className="text-primary font-medium hover:underline hidden md:block">View All</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
                <div className="h-48 bg-gray-100 w-full flex items-center justify-center">
                  <ShoppingBag size={40} className="text-gray-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-amber-600 transition-colors">Lagos Masterplan Document {item}</h3>
                  <p className="text-gray-600 text-sm font-medium mb-3">₦15,000</p>
                  <button className="text-amber-600 text-sm font-bold">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default UrbanDevPage;
