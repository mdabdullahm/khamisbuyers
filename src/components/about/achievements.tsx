"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Briefcase, Users, Landmark, MapPin, Users2 } from 'lucide-react';

const Achievements = () => {
  const t = useTranslations('Achievements');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const stats = [
    { id: 1, num: t('stat1Num'), label: t('stat1'), icon: <Briefcase size={32} />, color: "bg-blue-50 text-blue-600" },
    { id: 2, num: t('stat2Num'), label: t('stat2'), icon: <Users size={32} />, color: "bg-emerald-50 text-emerald-600" },
    { id: 3, num: t('stat3Num'), label: t('stat3'), icon: <Landmark size={32} />, color: "bg-amber-50 text-amber-600" },
    { id: 4, num: t('stat4Num'), label: t('stat4'), icon: <MapPin size={32} />, color: "bg-indigo-50 text-indigo-600" },
    { id: 5, num: t('stat5Num'), label: t('stat5'), icon: <Users2 size={32} />, color: "bg-rose-50 text-rose-600" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Shape */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50/50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            {t('subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight"
          >
            {t('title')}
          </motion.h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                {stat.icon}
              </div>

              {/* Number */}
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2 leading-none">
                {stat.num}
              </h3>

              {/* Label */}
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>

              {/* Hover Effect Bar */}
              <div className="absolute bottom-6 h-1.5 w-10 bg-slate-100 rounded-full group-hover:w-20 group-hover:bg-blue-600 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;