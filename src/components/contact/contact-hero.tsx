"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, MapPin } from 'lucide-react';

const ContactHero = () => {
  const t = useTranslations('ContactHero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative pt-10 pb-20 bg-white overflow-hidden">
      {/* Background Pattern (Subtle Business Grid) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="lg:w-2/3 text-center lg:text-start">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-8 border border-blue-100"
            >
              <MessageSquare size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">{t('badge')}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-7xl font-black text-slate-900 leading-tight mb-8"
            >
              {t('title')} <br />
              <span className="text-blue-600 italic">{t('highlight')}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed"
            >
              {t('description')}
            </motion.p>
          </div>

          {/* Quick Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:w-1/3 w-full flex flex-col gap-6"
          >
            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
               <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-2xl">
                     <Clock size={24} />
                  </div>
                  <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs">{t('response')}</h3>
               </div>
               <p className="text-3xl font-black">{t('responseTime')}</p>
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Clock size={100} />
               </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
               <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                     <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-blue-100 uppercase tracking-widest text-xs">{t('coverage')}</h3>
               </div>
               <p className="text-3xl font-black">{t('coverageArea')}</p>
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MapPin size={100} />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;