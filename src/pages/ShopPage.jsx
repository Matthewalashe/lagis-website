import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const FC = 'https://framerusercontent.com/images';
const merch = [
  { name: 'LAGIS Hoodie', price: 'N15,000', img: `${FC}/JmExOdelkVkXMou2DvpiOCmHHiw.jpg?width=1080&height=720` },
  { name: 'LAGIS T-Shirt', price: 'N8,000', img: `${FC}/Yjrn9f3303h7eBODI4RfAAgEwI.jpg?width=1080&height=720` },
  { name: 'LAGIS Cap', price: 'N5,000', img: `${FC}/YRxenlgZR0vicCSpaED4pf0Dbfc.jpg?width=1080&height=720` },
  { name: 'LAGIS Polo', price: 'N10,000', img: `${FC}/m7VnekZMb3moqAyKRwLi80HhE.jpg?width=800&height=600` },
  { name: 'LAGIS Jacket', price: 'N20,000', img: `${FC}/wXMLnnrdb2luqIwm84exbrs.jpg?width=800&height=600` },
];

const ShopPage = () => {
  return (
    <div className="w-full bg-light-gray min-h-screen py-24 px-4 font-inter">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-epilogue font-bold text-navy mb-4">LAGIS Official Merchandise</h1>
          <p className="text-xl text-dark-gray max-w-2xl mx-auto">Support the mapping of Lagos with our exclusive gear.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merch.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-primary"
            >
              <div className="h-64 overflow-hidden bg-gray-100">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold font-epilogue text-navy">{item.name}</h3>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-gray-500 mb-2">Select Size</label>
                  <div className="flex gap-2">
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <button key={size} className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-primary hover:text-primary transition-colors">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl flex justify-center items-center gap-2 hover:bg-navy transition-colors">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
