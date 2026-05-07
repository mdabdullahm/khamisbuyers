"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const t = useTranslations('Contact');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
            {t('subtitle')}
          </motion.span>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mt-4">
            {t('title')}
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-8">{t('infoTitle')}</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-1">{t('phone')}</p>
                    <p className="text-xl font-bold">+966 50 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-1">{t('location')}</p>
                    <p className="text-lg font-medium">{t('address')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-blue-400">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-1">{t('Avail')}</p>
                    <p className="text-lg font-medium">{t('hours')}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-30"></div>
            </div>

            {/* Google Map Embed (Khamis Mushait Area) */}
            <div className="h-64 rounded-[2.5rem] overflow-hidden grayscale border-4 border-white shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119330.347573177!2d42.7126135!3d18.303273!2m3!1f0!2f0!3f0!3m2!1i1024!2i728!4f13.1!3m3!1m2!1s0x15e967d7d0a7905d%3A0x6431e21b8f645167!2sKhamis%20Mushait%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1715000000000" 
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="lg:col-span-7">
            <form className="space-y-6 bg-slate-50 p-8 lg:p-12 rounded-[2.5rem] border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-2">{t('name')}</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-transparent bg-white focus:border-blue-600 outline-none transition-all shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-2">{t('phone')}</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-2xl border-2 border-transparent bg-white focus:border-blue-600 outline-none transition-all shadow-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">{t('service')}</label>
                <select className="w-full px-6 py-4 rounded-2xl border-2 border-transparent bg-white focus:border-blue-600 outline-none transition-all shadow-sm appearance-none">
                  <option>Used Furniture</option>
                  <option>Air Conditioners</option>
                  <option>Kitchen Appliances</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">{t('message')}</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl border-2 border-transparent bg-white focus:border-blue-600 outline-none transition-all shadow-sm resize-none"></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-blue-100">
                {t('send')}
                <Send size={20} className={isRTL ? 'rotate-180' : ''} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;