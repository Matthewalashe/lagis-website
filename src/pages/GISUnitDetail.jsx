import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, MapPin, ExternalLink } from 'lucide-react';
import { gisUnits } from '@/data/siteData';
import { unitImages, unitQRCodes, images } from '@/data/images';

const GISUnitDetail = () => {
  const { id } = useParams();
  const unit = gisUnits.find(u => u.slug === id || u.id === id);

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light-gray">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Unit Not Found</h2>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const heroImg = unitImages[unit.id] || images.maps.hero;
  const qrCode = unitQRCodes[unit.id];

  return (
    <div className="w-full bg-light-gray min-h-screen font-inter pb-24">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt={unit.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
        
        <div className="max-w-7xl mx-auto w-full relative z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-light-blue hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} /> Back to Directory
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className={`inline-block px-4 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${unit.gradient} mb-4`}>
              {unit.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-epilogue font-bold text-white mb-4 max-w-4xl">{unit.name}</h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="text-3xl font-epilogue font-bold text-navy mb-6">Overview</h2>
              <div className="prose prose-lg text-gray-700">
                {unit.overview ? (
                  unit.overview.map((p, idx) => <p key={idx} className="mb-4">{p}</p>)
                ) : (
                  <p>{unit.description}</p>
                )}
              </div>
            </motion.section>

            {unit.services && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-3xl font-epilogue font-bold text-navy mb-6">Key Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {unit.services.map((svc, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primary">
                      <h3 className="text-xl font-bold text-navy mb-3">{svc.title}</h3>
                      <p className="text-gray-600">{svc.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {unit.impact && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="text-3xl font-epilogue font-bold text-navy mb-6">Impact & Benefits</h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-teal-500">
                  <div className="space-y-6">
                    {unit.impact.map((imp, idx) => (
                      <div key={idx} className="flex gap-4">
                        <CheckCircle className="text-teal-500 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-navy text-lg">{imp.title}</h4>
                          <p className="text-gray-600">{imp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {qrCode && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary text-center">
                <h3 className="text-xl font-bold font-epilogue text-navy mb-4">Scan for Portal</h3>
                <div className="bg-gray-50 p-4 rounded-xl inline-block mb-4">
                  <img src={qrCode} alt="Unit QR Code" className="w-48 h-48 mx-auto" />
                </div>
                <p className="text-sm text-gray-500">Scan this code to quickly access the {unit.shortName} mobile portal.</p>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-navy p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-xl font-bold font-epilogue mb-6">Resources & Links</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Official Portal</span>
                  <ExternalLink size={18} />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Submit Application</span>
                  <ExternalLink size={18} />
                </a>
                {unit.id === 'lasvo' && (
                  <Link to="/blue-book" className="flex items-center justify-between p-4 bg-primary rounded-xl hover:bg-blue-600 transition-colors">
                    <span className="font-semibold">LUC Calculator</span>
                    <ExternalLink size={18} />
                  </Link>
                )}
                {unit.id === 'ntda' && (
                  <Link to="/contact" className="flex items-center justify-between p-4 bg-primary rounded-xl hover:bg-blue-600 transition-colors">
                    <span className="font-semibold">Apply via LUAC</span>
                    <ExternalLink size={18} />
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GISUnitDetail;
