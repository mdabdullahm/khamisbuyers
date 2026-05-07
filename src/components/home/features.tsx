"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Fan, Sofa, Tv, Refrigerator, Wind, UtensilsCrossed } from 'lucide-react';

const Features = () => {
  const t = useTranslations('Features');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const items = [
    { id: 1, title: t('ac'), desc: t('acDesc'), icon: <Wind size={32} /> },
    { id: 2, title: t('furniture'), desc: t('furnitureDesc'), icon: <Sofa size={32} /> },
    { id: 3, title: t('fridge'), desc: t('fridgeDesc'), icon: <Refrigerator size={32} /> },
    { id: 4, title: t('washer'), desc: t('washerDesc'), icon: <Fan size={32} /> },
    { id: 5, title: t('electronics'), desc: t('electronicsDesc'), icon: <Tv size={32} /> },
    { id: 6, title: t('kitchen'), desc: t('kitchenDesc'), icon: <UtensilsCrossed size={32} /> },
  ];

  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3"
          >
            {t('subtitle')}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-slate-900"
          >
            {t('title')}
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon Box */}
              <div className={`w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300`}>
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Action Link */}
              <button className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                {t('btn')}
                <span className={isRTL ? 'rotate-180' : ''}>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;