import { Language } from '../types/language';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const languages: { code: Language; label: string }[] = [
    { code: 'kk', label: 'ҚАЗ' },
    { code: 'ru', label: 'РУС' },
    { code: 'en', label: 'ENG' }
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currentLanguage === lang.code
              ? 'bg-red-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
