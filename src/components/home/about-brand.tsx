"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, History } from 'lucide-react';

const AboutBrand = () => {
  const t = useTranslations('About');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const points = [t('point1'), t('point2'), t('point3'), t('point4')];

  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000" 
                alt="Our Professional Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
            
            {/* Experience Badge */}
            <div className={`absolute -bottom-10 ${isRTL ? '-left-6' : '-right-6'} bg-blue-600 text-white p-8 rounded-3xl shadow-xl`}>
              <div className="flex items-center gap-4">
                <History size={40} />
                <div>
                  <p className="text-3xl font-black">15+</p>
                  <p className="text-xs uppercase font-bold tracking-widest opacity-80">Years of Trust</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-6">
              <Award size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">{t('badge')}</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight mb-8">
              {t('title')}
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed italic">
              {t('description1')}
            </p>

            <p className="text-slate-500 mb-10 leading-relaxed">
              {t('description2')}
            </p>

            {/* Points List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-bold text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-100">
              {t('btn')}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutBrand;