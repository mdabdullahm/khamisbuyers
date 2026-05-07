"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Sofa, Bed, Refrigerator, Fan, Tv, Utensils, MessageSquare } from 'lucide-react';

const WhatWeSell = () => {
  const t = useTranslations('WhatWeSell');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const categories = [
    { id: 1, title: t('cat1'), desc: t('cat1Desc'), icon: <Sofa size={32} /> },
    { id: 2, title: t('cat2'), desc: t('cat2Desc'), icon: <Bed size={32} /> },
    { id: 3, title: t('cat3'), desc: t('cat3Desc'), icon: <Refrigerator size={32} /> },
    { id: 4, title: t('cat4'), desc: t('cat4Desc'), icon: <Fan size={32} /> },
    { id: 5, title: t('cat5'), desc: t('cat5Desc'), icon: <Tv size={32} /> },
    { id: 6, title: t('cat6'), desc: t('cat6Desc'), icon: <Utensils size={32} /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs block mb-4"
            >
              {t('subtitle')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight mb-6"
            >
              {t('title')}
            </motion.h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              {t('description')}
            </p>
          </div>
          <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl">
            <MessageSquare size={20} />
            {t('btn')}
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 lg:p-12 bg-slate-50 rounded-[3rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-slate-900 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h3>
              <p className="text-slate-500 leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeSell;