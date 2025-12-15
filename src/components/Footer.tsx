import { Globe, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-uni-secondary text-white pt-12 pb-6 text-sm">
      {/* Изменили grid-cols-3 на grid-cols-2 */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-8">
        
        {/* Колонка 1: Логотип и описание */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-uni-accent" />
            <h3 className="font-serif font-bold text-lg leading-none">INTERGLOBAL</h3>
          </div>
          <p className="text-gray-400 max-w-xs">
            Центр интернационализации и академической мобильности. Открываем мир знаний.
          </p>
        </div>

        {/* Колонка 2: Контакты (выровнены вправо на десктопе для баланса) */}
        <div className="md:flex md:flex-col md:items-end">
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-uni-accent">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-uni-primary flex-shrink-0" />
                <span className="text-gray-400">г. Павлодар, ул. Олжабай Батыра 60</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-uni-primary flex-shrink-0" />
                <span className="text-gray-400">+7 (7182) 67-36-85</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-uni-primary flex-shrink-0" />
                <span className="text-gray-400">international@margulan.edu.kz</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
      
      <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} InterGlobal Center. All rights reserved.
      </div>
    </footer>
  );
}