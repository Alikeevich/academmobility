import { Phone, Mail } from 'lucide-react';
import { Language } from '../types/language';
import LanguageSwitcher from './LanguageSwitcher';
import logoUni from '../assets/images/logo.png'; // Импорт логотипа

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Header({ currentLanguage, onLanguageChange }: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Верхняя полоска контактов */}
      <div className="bg-uni-secondary text-white py-2 px-6 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +7 (7182) 67-36-85</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> international@margulan.edu.kz</span>
          </div>
          <div className="opacity-80 hover:opacity-100 transition cursor-pointer">
            Student Portal
          </div>
        </div>
      </div>

      {/* Основное меню */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logoUni} alt="Margulan University" className="h-12 w-auto object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-serif font-bold text-gray-900 leading-none">MARGULAN</h1>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">University</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700">
            <a href="#about" className="hover:text-uni-primary transition uppercase tracking-wide">О центре</a>
            <a href="#programs" className="hover:text-uni-primary transition uppercase tracking-wide">Программы</a>
            <a href="#tests" className="hover:text-uni-primary transition uppercase tracking-wide">Тесты</a>
            <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
          </nav>
        </div>
      </header>
    </div>
  );
}