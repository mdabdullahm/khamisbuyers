"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

const WorkspacePhotos = () => {
  const t = useTranslations('Workspace');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const photos = [
    { id: 1, title: t('photo1'), img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800", className: "lg:col-span-2 lg:row-span-2" },
    { id: 2, title: t('photo2'), img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800", className: "lg:col-span-1 lg:row-span-1" },
    { id: 3, title: t('photo3'), img: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800", className: "lg:col-span-1 lg:row-span-1" },
    { id: 4, title: t('photo4'), img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800", className: "lg:col-span-1 lg:row-span-1" },
    { id: 5, title: t('photo5'), img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800", className: "lg:col-span-1 lg:row-span-1" },
    { id: 6, title: t('photo5'), img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800", className: "lg:col-span-1 lg:row-span-1" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="max-w-3xl mb-16">
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
            className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            {t('title')}
          </motion.h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${photo.className}`}
            >
              {/* Image */}
              <img 
                src={photo.img} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content on Hover */}
              <div className={`absolute bottom-0 w-full p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 flex justify-between items-end ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
                <div>
                  <p className="text-white font-bold text-xl">{photo.title}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkspacePhotos;