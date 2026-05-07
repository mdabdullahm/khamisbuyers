"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Categories = () => {
  const t = useTranslations('Categories');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const categories = [
    {
      id: 1,
      name: t('bedroom'),
      img: "https://i.ibb.co.com/n8wmtqR9/spacejoy-RUv-W1-KGD9a4-unsplash.jpg",
    },
    {
      id: 2,
      name: t('ac'),
      img: "https://i.ibb.co.com/pjpyPpyZ/alflucio-air-conditioner-6605973-1920.jpg",
    },
    {
      id: 3,
      name: t('living'),
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500",
    },
    {
      id: 4,
      name: t('appliances'),
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500",
    },
    {
      id: 5,
      name: t('office'),
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=500",
    },
    {
      id: 6,
      name: t('kitchen'),
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-slate-500 font-medium">
              {t('subtitle')}
            </p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:underline decoration-2 underline-offset-8">
            {t('viewAll')}
            <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[300px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

              {/* Content */}
              <div className={`absolute bottom-0 w-full p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {cat.name}
                </h3>
                <div className="h-1 w-12 bg-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>

              {/* Hover Icon */}
              <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <ArrowUpRight size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;