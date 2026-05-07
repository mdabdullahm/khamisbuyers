"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle, Star, ArrowRight, Building2 } from 'lucide-react';

const FeaturedService = () => {
  const t = useTranslations('FeaturedService');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const points = [t('point1'), t('point2'), t('point3'), t('point4')];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white mb-8 shadow-lg">
              <Star size={16} className="fill-white" />
              <span className="text-xs font-bold uppercase tracking-widest">{t('badge')}</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
              {t('title')}
            </h2>

            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              {t('description')}
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-12">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <CheckCircle size={18} className="text-blue-400" />
                  </div>
                  <span className="text-lg font-medium text-slate-200">{point}</span>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              {t('btn')}
              <ArrowRight size={20} className={`transition-transform group-hover:translate-x-2 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
            </button>
          </motion.div>

          {/* Image & Stats Side */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border-[10px] border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000" 
                alt="Elite Office Clearance" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className={`absolute bottom-10 ${isRTL ? '-left-10' : '-right-10'} bg-white p-8 rounded-3xl shadow-2xl text-slate-900 hidden sm:block border-t-4 border-blue-600`}>
              <div className="flex items-center gap-4 mb-2">
                <Building2 size={32} className="text-blue-600" />
                <p className="text-4xl font-black leading-none">{t('statValue')}</p>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('statTitle')}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedService;