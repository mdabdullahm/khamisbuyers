"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const GoogleMapSection = () => {
  const t = useTranslations('GoogleMap');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // গুগল ম্যাপের এমবেড ইউআরএল (Khamis Mushait এলাকা)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119330.347573177!2d42.7126135!3d18.303273!2m3!1f0!2f0!3f0!3m2!1i1024!2i728!4f13.1!3m3!1m2!1s0x15e967d7d0a7905d%3A0x6431e21b8f645167!2sKhamis%20Mushait%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1715000000000";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between mb-16">
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
        </div>

        {/* Map Container */}
        <div className="relative group">
          {/* Map Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700"
          >
            <iframe 
              src={mapUrl} 
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Floating Info Card (ম্যাপের ওপরে ভাসমান কার্ড) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`absolute bottom-10 ${isRTL ? 'left-10' : 'right-10'} bg-white p-8 rounded-3xl shadow-2xl max-w-sm hidden lg:block border border-slate-100`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{t('addressTitle')}</h4>
            </div>
            
            <p className="text-slate-500 mb-8 leading-relaxed font-medium">
              {t('addressDetail')}
            </p>

            <a 
              href="https://maps.app.goo.gl/YourMapLink" 
              target="_blank"
              className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300"
            >
              <Navigation size={18} />
              {t('btn')}
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default GoogleMapSection;