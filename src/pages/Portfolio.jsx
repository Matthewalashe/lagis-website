import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { images, unitImages, unitQRCodes } from '@/data/images';
import { gisUnits } from '@/data/siteData';

const units = [
  { id: 'mist', shortName: 'MIST GIS Unit', description: 'Ministry of Science & Technology - Drone services, aerial mapping & GIS analytics', category: 'Technology' },
  { id: 'ntda', shortName: 'NTDA GIS Unit', description: 'New Towns Development Authority - Land allocation & LUAC applications', category: 'Land Allocation' },
  { id: 'lasbca', shortName: 'LASBCA', description: 'Building Control Agency - Building approvals, inspections & certification', category: 'Building Regulation' },
  { id: 'tourism', shortName: 'Tourism GIS Unit', description: 'Ministry of Tourism - Tourism asset mapping & visitor experience', category: 'Tourism' },
  { id: 'lamata', shortName: 'LAMATA GIS Unit', description: 'Transport Authority - Transport network mapping & mobility planning', category: 'Transport' },
  { id: 'lasiec', shortName: 'LASIEC GIS Unit', description: 'Electoral Commission - Electoral boundary mapping & polling unit verification', category: 'Electoral' },
  { id: 'lasrera', shortName: 'LASRERA GIS Unit', description: 'Real Estate Regulatory Authority - Property mapping & verification', category: 'Real Estate' },
  { id: 'lands-bureau', shortName: 'Lands Bureau GIS Unit', description: 'Lagos State Lands Bureau - Digital land mapping & records digitization', category: 'Lands' },
  { id: 'lasvo', shortName: 'LASVO', description: 'Lagos State Valuation Office - Property valuation & land use charge', category: 'Valuation' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Portfolio = () => {
  // Use gisUnits if available, otherwise fallback to local units
  const data = gisUnits && gisUnits.length > 0 ? gisUnits : units;

  return (
    <div className="min-h-screen bg-[#f5f7fa] font-inter text-[#28333d]">
      {/* Hero Section */}
      <PageHero 
        title="Lagos State Geospatial Information Units"
        subtitle="Explore our GIS-enabled agencies and their services across Lagos State"
        bgImage={images.gis.satellite}
        tall={false}
      />

      {/* GIS Units Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.map((unit) => (
              <motion.div 
                key={unit.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group relative"
              >
                <Link to={`/gis-units/${unit.id}`} className="flex flex-col h-full relative z-10">
                  <div className="h-52 w-full relative overflow-hidden">
                    <img 
                      src={unitImages[unit.id] || images.tech.data} 
                      alt={unit.shortName || unit.name} 
                      className="w-full h-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-0 left-0">
                      <span className="inline-block px-4 py-2 bg-[#59a9f0] text-white text-xs font-semibold rounded-br-lg shadow-sm">
                        {unit.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col relative bg-white">
                    <div className="mb-2">
                      <h3 className="font-epilogue text-xl font-bold text-[#001838] group-hover:text-[#59a9f0] transition-colors">{unit.shortName || unit.name}</h3>
                    </div>
                    <p className="text-[#28333d]/80 text-sm mb-6 flex-grow line-clamp-2 pr-12">
                      {unit.description}
                    </p>
                    <div className="flex items-center text-[#59a9f0] font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                    </div>
                  </div>
                </Link>
                {/* QR Code in bottom-right of the card */}
                {unitQRCodes[unit.id] && (
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-md shadow-sm overflow-hidden p-1 z-20 pointer-events-none">
                    <img src={unitQRCodes[unit.id]} alt="QR Code" className="w-full h-full object-contain" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-epilogue text-3xl md:text-4xl font-bold text-[#001838] mb-4">Let LAGIS Units Handle Your Digitization Projects</h2>
          <p className="text-lg text-[#28333d]/80 mb-8">We will handle the heavy lifting for you</p>
          <Link to="/contact" className="inline-block bg-[#59a9f0] text-white font-medium px-8 py-3 rounded-md hover:bg-blue-400 transition-colors shadow-sm hover:shadow-md">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
