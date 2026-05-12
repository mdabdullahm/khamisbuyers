"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  // ফোন নম্বর এবং হোয়াটসঅ্যাপ লিঙ্ক
  const phoneNumber = "+9660539685761";
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <div className="fixed bottom-8 left-8 z-[999] flex flex-col gap-4">
      
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors relative group"
      >
        <MessageCircle size={28} fill="currentColor" />
        {/* Tooltip */}
        <span className="absolute left-16 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </span>
        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20"></span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-colors relative group"
      >
        <Phone size={24} fill="currentColor" />
        {/* Tooltip */}
        <span className="absolute left-16 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Now
        </span>
      </motion.a>

    </div>
  );
};

export default FloatingContact;