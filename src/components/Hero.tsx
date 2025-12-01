import { motion } from 'framer-motion';
import { Language } from '../types/language';
import { translations } from '../data/translations';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg'; // Импорт фона

export default function Hero({ language }: { language: Language }) {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center bg-uni-secondary overflow-hidden mt-[70px] md:mt-[108px]"
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="University Campus" 
          className="w-full h-full object-cover"
        />
        {/* Темная подложка, чтобы текст читался */}
        <div className="absolute inset-0 bg-uni-secondary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-uni-secondary via-uni-secondary/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block border-l-4 border-uni-accent pl-4 mb-6">
            <span className="uppercase tracking-[0.2em] text-sm text-uni-accent">Academic Mobility</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            {translations.title[language]}
          </h1>
          <p className="text-xl text-gray-200 font-light mb-10 max-w-2xl leading-relaxed">
            {translations.subtitle[language]}
          </p>
          
          <button className="bg-uni-primary hover:bg-red-800 text-white px-8 py-4 rounded-sm font-medium transition flex items-center gap-2">
            Подать заявку <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}