import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import { gisUnits } from '@/data/siteData';
import { unitImages, unitQRCodes, images } from '@/data/images';

// Per-unit gallery images from Framer
const unitGalleries = {
  mist: [images.units.mist.hero, images.units.mist.card, images.units.mist.drone, images.mist.drone1, images.mist.drone2, images.mist.training],
  ntda: [images.units.ntda.hero, images.units.ntda.card, images.units.ntda.map],
  lasbca: [images.units.lasbca.hero, images.maps.data1, images.maps.gis],
  tourism: [images.units.tourism.hero, images.units.tourism.beach, images.units.tourism.nightlife, images.units.tourism.culture, images.units.tourism.detty1, images.units.tourism.food],
  lamata: [images.units.lamata.hero, images.units.lamata.metro, images.units.lamata.brt, images.units.lamata.map],
  lasiec: [images.units.lasiec.hero, images.units.lasiec.polling, images.units.lasiec.voting, images.units.lasiec.card, images.units.lasiec.ward, images.units.lasiec.pvc],
  lasrera: [images.units.lasrera.hero, images.units.lasrera.qr, images.units.lasrera.card],
  'lands-bureau': [images.units.landsBureau.hero, images.units.landsBureau.map, images.units.landsBureau.card, images.units.landsBureau.property],
  lasvo: [images.units.lasvo.hero, images.units.lasvo.property, images.units.lasvo.valuation, images.units.lasvo.card, images.units.lasvo.building],
};

const unitGradients = {
  mist: 'from-blue-600/80 via-cyan-500/60 to-blue-800/80',
  ntda: 'from-emerald-600/80 via-green-500/60 to-teal-700/80',
  lasbca: 'from-orange-600/80 via-amber-500/60 to-orange-800/80',
  tourism: 'from-orange-500/80 via-pink-500/60 to-purple-600/80',
  lamata: 'from-red-600/80 via-orange-500/60 to-red-800/80',
  lasiec: 'from-blue-600/80 via-teal-500/60 to-green-600/80',
  lasrera: 'from-teal-600/80 via-cyan-500/60 to-blue-700/80',
  'lands-bureau': 'from-yellow-600/80 via-amber-500/60 to-orange-700/80',
  lasvo: 'from-sky-600/80 via-blue-500/60 to-indigo-700/80',
};

const GISUnitDetail = () => {
  const { unitId } = useParams();
  const unit = gisUnits.find(u => u.slug === unitId || u.id === unitId);
  const gallery = unitGalleries[unitId] || [];
  const gradient = unitGradients[unitId] || 'from-blue-600/80 via-cyan-500/60 to-blue-800/80';

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#001838] mb-4">Unit Not Found</h2>
          <Link to="/gis-units" className="text-[#59a9f0] hover:underline text-lg">← Back to GIS Units</Link>
        </div>
      </div>
    );
  }

  const heroImg = unitImages[unit.id] || gallery[0] || images.maps.hero;
  const qrCode = unitQRCodes[unit.id];

  return (
    <div className="w-full min-h-screen font-inter">
      {/* Full-bleed Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img src={heroImg} alt={unit.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float-delayed" />

        <div className="relative z-10 w-full px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/gis-units" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm">
              <ArrowLeft size={16} /> All GIS Units
            </Link>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                {unit.category}
              </span>
              <h1 className="font-epilogue text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">{unit.name}</h1>
              <p className="text-xl text-white/90 max-w-2xl">{unit.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Mosaic Gallery */}
      {gallery.length > 1 && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-epilogue text-3xl font-bold text-[#001838] mb-8">Visual Gallery</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.slice(0, 6).map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl overflow-hidden shadow-lg ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                  <img src={img} alt={`${unit.name} ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    style={{ minHeight: i === 0 ? '400px' : '200px' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview with side image */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-epilogue text-3xl md:text-4xl font-bold text-[#001838] mb-6">About This Unit</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              {unit.overview ? (
                unit.overview.map((p, idx) => <p key={idx}>{p}</p>)
              ) : (
                <p>{unit.description}</p>
              )}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={gallery[1] || heroImg} alt={unit.name} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
        </div>
      </section>

      {/* Services as visual cards */}
      {unit.services && (
        <section className="py-20 px-6 bg-[#001838]">
          <div className="max-w-7xl mx-auto">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-epilogue text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Services</motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {unit.services.map((svc, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all group">
                  {gallery[idx + 2] && (
                    <div className="h-40 rounded-xl overflow-hidden mb-6">
                      <img src={gallery[idx + 2]} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-3 font-epilogue">{svc.title}</h3>
                  <p className="text-white/70">{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impact with alternating image-text layout */}
      {unit.impact && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-epilogue text-3xl md:text-4xl font-bold text-[#001838] mb-12 text-center">Impact & Benefits</motion.h2>
            <div className="space-y-16">
              {unit.impact.map((imp, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                  <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                    <h3 className="font-epilogue text-2xl font-bold text-[#001838] mb-4">{imp.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{imp.desc}</p>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-xl ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <img src={gallery[idx % gallery.length] || heroImg} alt={imp.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* QR Code + CTA Section */}
      <section className={`py-20 px-6 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          {qrCode && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl shadow-2xl text-center shrink-0">
              <img src={qrCode} alt="QR Code" className="w-40 h-40 mx-auto mb-3" />
              <p className="text-sm text-gray-500 font-medium">Scan for mobile access</p>
            </motion.div>
          )}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-epilogue text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-white/80 text-lg mb-8">Let LAGISUnits handle your digitization projects. We'll handle the heavy lifting for you.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#001838] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link to="/gis-units" className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all backdrop-blur-sm">
                View All Units <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GISUnitDetail;
