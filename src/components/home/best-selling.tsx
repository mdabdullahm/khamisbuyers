"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';

const BestSelling = () => {
  const t = useTranslations('BestSelling');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const products = [
    {
      id: 1,
      name: t('items.ac'),
      condition: t('new'),
      img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=500",
      price: "1500 - 2500 SAR"
    },
    {
      id: 2,
      name: t('items.bedroom'),
      condition: t('used'),
      img: "https://i.ibb.co.com/zTPcXR8s/istockphoto-2208103079-612x612.jpg",
      price: "3000 - 5000 SAR"
    },
    {
      id: 3,
      name: t('items.sofa'),
      condition: t('new'),
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500",
      price: "1200 - 2000 SAR"
    },
    {
      id: 4,
      name: t('items.fridge'),
      condition: t('used'),
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500",
      price: "800 - 1500 SAR"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3 uppercase tracking-tight">
            {t('title')}
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm">
            {t('subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Area - Height Reduced from h-64 to h-48 */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 shadow-sm uppercase`}>
                  {product.condition}
                </div>
              </div>

              {/* Content Area - Padding Reduced from p-8 to p-5 */}
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight h-12 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-slate-400 text-xs font-bold mb-4">
                   {product.price}
                </p>

                {/* WhatsApp Action - Button Slightly Smaller */}
                <a 
                  href={`https://wa.me/966500000000?text=I am interested in ${product.name}`}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full bg-slate-50 text-slate-900 py-3 rounded-xl font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  {t('inquiry')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSelling;