import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, subtitle, breadcrumbs, bgImage, tall = false }) => {
  return (
    <section className={`relative overflow-hidden ${tall ? 'min-h-[500px]' : 'min-h-[300px] py-20'} px-4 md:px-8 flex items-center justify-center`}>
      {bgImage ? (
        <>
          <img 
            src={bgImage} 
            alt="Hero background" 
            loading="lazy" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001838]/80 to-[#001838]/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-[#001838] to-blue-950">
          <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none" />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center w-full">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 text-sm text-[#bfe0f2] mb-8"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="w-4 h-4 text-gray-500" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-epilogue font-bold text-white mb-6"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#bfe0f2] max-w-3xl font-inter mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
