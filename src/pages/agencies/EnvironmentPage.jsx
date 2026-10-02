import { images } from '@/data/images';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplets, Leaf, Shield, MapPin, Mail, Phone } from 'lucide-react';

const EnvironmentPage = () => {
  return (
    <div className="min-h-screen bg-light-gray font-inter text-dark-gray">
      {/* Hero Section */}
      <section className="bg-teal-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-epilogue mb-6"
          >
            The Environment of Tomorrow
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto mb-10"
          >
            See how we are making our environment livable through data-driven environmental monitoring and spatial planning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/maps" className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg">
              Explore Environment Data
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        
        {/* Livable Environment Section */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Droplets size={32} />
            </div>
            <h3 className="text-xl font-bold font-epilogue mb-3">Flood Management</h3>
            <p className="text-gray-600">Tracking erosion, flooding, and drainage systems to safeguard communities.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-bold font-epilogue mb-3">Vegetation Tracking</h3>
            <p className="text-gray-600">Monitoring wetlands, deforestation, and green spaces using drone-enabled data.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold font-epilogue mb-3">Pollution Control</h3>
            <p className="text-gray-600">Identifying pollution hotspots and analyzing environmental hazards.</p>
          </div>
        </section>

        {/* Drainage Map Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold font-epilogue mb-6">The Drainage Map of Lagos</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Explore the comprehensive network of canals, primary channels, and secondary drains across Lagos State. Our interactive drainage map helps planners, developers, and residents understand waterflow patterns and flood vulnerability.
              </p>
              <Link to="/maps" className="inline-flex items-center justify-center bg-navy hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View Interactive Map
              </Link>
            </div>
            <div className="flex-1 w-full">
              {/* Map Placeholder */}
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative border border-gray-300">
                <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500">
                  <MapPin size={48} className="mb-2 opacity-50" />
                  <span className="font-medium">Interactive Map Loading...</span>
                </div>
                {/* Decorative map elements */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyIiBmaWxsPSIjMDAwIj48L2NpcmNsZT4KPC9zdmc+')]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-epilogue mb-6">Make informed decisions. Start here.</h2>
          <p className="text-teal-50 max-w-2xl mx-auto mb-8 text-lg">
            Access high-resolution aerial data, real-time surveillance, and geospatial analytics for your next environmental project.
          </p>
          <Link to="/shop" className="bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold transition-colors inline-block">
            Access Data Portal
          </Link>
        </section>

        {/* Contact Section */}
        <section className="grid md:grid-cols-2 gap-12 pt-16">
          <div>
            <h2 className="text-3xl font-bold font-epilogue mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our environmental data or need custom mapping solutions? Our team is ready to assist.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-navy"><Phone size={18} /></div>
                <span>+234 (0) 903 981 4222</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-navy"><Mail size={18} /></div>
                <span>info@egisunit.com</span>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-teal-500" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-teal-500" />
                <textarea placeholder="Message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-teal-500"></textarea>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default EnvironmentPage;
