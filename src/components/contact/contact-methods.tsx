"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle, PhoneCall, MapPin, ArrowUpRight } from 'lucide-react';

const ContactMethods = () => {
  const t = useTranslations('ContactMethods');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const methods = [
    {
      id: 1,
      title: t('whatsapp'),
      desc: t('whatsappDesc'),
      icon: <MessageCircle size={32} />,
      btn: t('btnChat'),
      link: "https://wa.me/9660539685761",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      hover: "hover:bg-emerald-600"
    },
    {
      id: 2,
      title: t('call'),
      desc: t('callDesc'),
      icon: <PhoneCall size={32} />,
      btn: t('btnCall'),
      link: "tel:+966 0539685761",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      hover: "hover:bg-blue-600"
    },
    {
      id: 3,
      title: t('address'),
      desc: t('addressDesc'),
      icon: <MapPin size={32} />,
      btn: t('btnMap'),
      link: "https://maps.google.com",
      color: "bg-slate-50 text-slate-900 border-slate-100",
      hover: "hover:bg-slate-900"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            {t('subtitle')}
          </motion.span>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900">
            {t('title')}
          </h2>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group p-10 rounded-[3rem] border-2 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl ${method.color} hover:border-transparent`}
            >
              <div className="mb-8 p-6 bg-white rounded-[2rem] shadow-sm group-hover:scale-110 transition-transform duration-500">
                {method.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 transition-colors group-hover:text-white">
                {method.title}
              </h3>
              
              <p className="text-slate-500 mb-10 leading-relaxed font-medium group-hover:text-white/80 transition-colors">
                {method.desc}
              </p>

              <a 
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto flex items-center gap-2 px-8 py-4 bg-white rounded-2xl font-bold shadow-sm transition-all group-hover:shadow-xl group-hover:translate-y-[-4px] ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {method.btn}
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactMethods;