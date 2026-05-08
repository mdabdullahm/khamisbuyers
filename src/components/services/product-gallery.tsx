"use client";

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

const ProductGallery = () => {
  const t = useTranslations('Gallery');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'furniture', img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500" },
    { id: 2, category: 'ac', img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=500" },
    { id: 3, category: 'appliances', img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500" },
    { id: 4, category: 'furniture', img: "https://images.unsplash.com/photo-1505693415957-283099138e5c?q=80&w=500" },
    { id: 5, category: 'ac', img: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=500" },
    { id: 6, category: 'appliances', img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=500" },
  ];

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            {t('subtitle')}
          </motion.span>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
            {t('title')}
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'furniture', 'ac', 'appliances'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' 
                : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              {t(cat)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-72 rounded-[2.5rem] overflow-hidden bg-slate-100 cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt="Product" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="bg-white p-4 rounded-full text-blue-600 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Search size={24} />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductGallery;