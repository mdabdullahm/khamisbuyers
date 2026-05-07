"use client";

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const t = useTranslations('Portfolio');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { id: 1, category: 'furniture', 
        title: t('projects.p1'), 
        img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600", location: "Khamis Mushait" },
    { id: 2, category: 'ac', 
        title: t('projects.p2'), 
        img: "https://i.ibb.co.com/qF2Y65J6/ac-installations-img.jpg", location: "Abha City" },
    { id: 3, category: 'furniture', 
        title: t('projects.p3'), 
        img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600", location: "Wadi Bin Hashbal" },
    { id: 4, category: 'appliances', 
        title: t('projects.p4'), 
        img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600", location: "Khamis Mushait" },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
              {t('subtitle')}
            </p>
            <h2 className="text-4xl lg:text-6xl font-black italic">
              {t('title')}
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {['all', 'furniture', 'ac', 'appliances'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === filter 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {t(`filter${filter.charAt(0).toUpperCase() + filter.slice(1)}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-slate-800"
              >
                {/* Background Image */}
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-10">
                  <div className="flex items-center gap-2 text-blue-400 mb-3 font-bold text-sm">
                    <MapPin size={16} />
                    {project.location}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Hover reveal button */}
                  <div className="overflow-hidden">
                    <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                      {t('viewDetails')}
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={`absolute top-8 ${isRTL ? 'left-8' : 'right-8'} bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-1 rounded-full text-xs font-bold text-blue-400`}>
                  {t('projects.status')}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;