import { motion } from 'framer-motion';
import { ExternalLink, MousePointerClick, FileText } from 'lucide-react';
import { Language } from '../types/language';

export default function QuickAccess({ language }: { language: Language }) {
  
  const texts = {
    title: {
      ru: 'Подача заявок и Документы',
      kk: 'Өтінім беру және Құжаттар',
      en: 'Applications & Documents'
    },
    portalBtn: {
      title: { ru: 'Портал Global PPU', kk: 'Global PPU Порталы', en: 'Global PPU Portal' },
      desc: { ru: 'Онлайн регистрация на мобильность', kk: 'Мобильділікке онлайн тіркелу', en: 'Online registration for mobility' }
    },
    infoBtn: {
      title: { ru: 'Правила и Нормативы', kk: 'Ережелер мен Нормативтер', en: 'Rules & Regulations' },
      desc: { ru: 'Информация на сайте TOU', kk: 'TOU сайтындағы ақпарат', en: 'Info on TOU website' }
    }
  };

  return (
    <div className="relative z-30 -mt-16 mb-12 max-w-5xl mx-auto px-6">
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
        <div className="grid md:grid-cols-2 gap-2">
          
          {/* Ссылка 1: Global PPU */}
          <motion.a
            href="https://global.ppu.edu.kz/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 p-6 rounded-lg bg-uni-primary text-white hover:bg-uni-primary/90 transition-colors group cursor-pointer"
          >
            <div className="bg-white/20 p-3 rounded-full group-hover:rotate-12 transition-transform">
              <MousePointerClick className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">{texts.portalBtn.title[language]}</h3>
              <p className="text-white/80 text-sm">{texts.portalBtn.desc[language]}</p>
            </div>
            <ExternalLink className="w-5 h-5 ml-auto opacity-50 group-hover:opacity-100" />
          </motion.a>

          {/* Ссылка 2: TOU Info */}
          <motion.a
            href="https://tou.edu.kz/ru/2011-09-15-10-55-55"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 p-6 rounded-lg bg-uni-secondary text-white hover:bg-uni-secondary/90 transition-colors group cursor-pointer"
          >
            <div className="bg-white/20 p-3 rounded-full group-hover:rotate-12 transition-transform">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">{texts.infoBtn.title[language]}</h3>
              <p className="text-white/80 text-sm">{texts.infoBtn.desc[language]}</p>
            </div>
            <ExternalLink className="w-5 h-5 ml-auto opacity-50 group-hover:opacity-100" />
          </motion.a>

        </div>
      </div>
    </div>
  );
}