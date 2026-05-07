"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const MissionVision = () => {
  const t = useTranslations('MissionVision');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white p-10 lg:p-16 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">{t('missionTitle')}</h3>
              <p className="text-xl text-slate-500 leading-relaxed font-medium italic">
                {t('missionDesc')}
              </p>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <Target size={150} />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-slate-900 p-10 lg:p-16 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-white"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-black mb-6">{t('visionTitle')}</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic">
                {t('visionDesc')}
              </p>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
              <Eye size={150} />
            </div>
          </motion.div>

        </div>

        {/* Bottom Commitment Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white border border-slate-100 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-center gap-6 shadow-sm"
        >
          <div className="flex items-center gap-3 text-blue-600">
            <ShieldCheck size={28} />
            <span className="text-lg font-black uppercase tracking-widest">{t('commitment')}</span>
          </div>
          <div className="h-px w-12 bg-slate-200 hidden md:block"></div>
          <p className="text-xl font-bold text-slate-700">{t('commitmentDesc')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;