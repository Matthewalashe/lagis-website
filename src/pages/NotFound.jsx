import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-light-gray flex flex-col items-center justify-center px-4 font-inter">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 10,
          delay: 0.1
        }}
        className="text-center"
      >
        <h1 className="font-epilogue text-9xl font-bold text-primary mb-4 drop-shadow-sm">404</h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center max-w-md mx-auto"
      >
        <h2 className="font-epilogue text-3xl font-bold text-navy mb-4">Page Not Found</h2>
        <p className="text-dark-gray/80 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm hover:shadow"
          >
            Go Home
          </Link>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto px-8 py-3 bg-white text-navy font-medium border border-gray-200 rounded-md hover:bg-gray-50 transition-colors shadow-sm hover:shadow"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
