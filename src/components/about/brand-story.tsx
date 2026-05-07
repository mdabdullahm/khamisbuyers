"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { History, TrendingUp, Star } from 'lucide-react';

const BrandStory = () => {
  const  t = useTranslations('BrandStory');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const milestones = [
    { year: t('year1'), title: t('year1Title'), icon: <History className="text-blue-600" /> },
    { year: t('year2'), title: t('year2Title'), icon: <TrendingUp className="text-emerald-600" /> },
    { year: t('year3'), title: t('year3Title'), icon: <Star className="text-amber-500" /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'}`}
          >
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">
              {t('subtitle')}
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight max-w-2xl">
              {t('title')}
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Story Text Blocks */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative pl-0 lg:pl-12 border-l-0 lg:border-l border-slate-100"
            >
              <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                  {t('story1')}
                </p>
                <p className="bg-slate-50 p-8 rounded-3xl border-l-4 border-blue-600 italic">
                  {t('story2')}
                </p>
                <p>{t('story3')}</p>
              </div>
            </motion.div>

            {/* Visual Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
              {milestones.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">{item.year}</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Image Side */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="sticky top-32"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1000" 
                  alt="Business Growth" 
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              
              {/* Decorative Element */}
              <div className={`absolute -top-10 ${isRTL ? '-left-10' : '-right-10'} w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -z-10`}></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;