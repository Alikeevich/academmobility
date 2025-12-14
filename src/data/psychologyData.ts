import { Language } from '../types/language';

// Тип для переводимых строк
type LocalizedString = Record<Language, string>;

// --- 1. ТЕСТ МОТИВАЦИИ (РЕАН) ---
export const MOTIVATION_TEST = {
  id: 'motivation',
  title: {
    ru: 'Мотивация профессиональной деятельности',
    kk: 'Кәсіби қызмет мотивациясы',
    en: 'Professional Activity Motivation'
  },
  description: {
    ru: 'Определите, что движет вами: интерес или заработок.',
    kk: 'Сізді не итермелейтінін анықтаңыз: қызығушылық па әлде табыс па.',
    en: 'Determine what drives you: interest or earnings.'
  },
  instruction: {
    ru: 'Оцените значимость мотивов по 5-балльной шкале.',
    kk: 'Мотивтердің маңыздылығын 5 балдық жүйемен бағалаңыз.',
    en: 'Rate the importance of motives on a 5-point scale.'
  },
  questions: [
    { 
      id: 1, 
      text: { 
        ru: 'Денежный заработок', 
        kk: 'Ақшалай табыс', 
        en: 'Financial earnings' 
      } 
    },
    { 
      id: 2, 
      text: { 
        ru: 'Стремление к продвижению по работе', 
        kk: 'Жұмыста жоғарылауға ұмтылу', 
        en: 'Desire for career advancement' 
      } 
    },
    { 
      id: 3, 
      text: { 
        ru: 'Стремление избежать критики руководителя/коллег', 
        kk: 'Басшының немесе әріптестердің сынынан қашу', 
        en: 'Desire to avoid criticism from boss/colleagues' 
      } 
    },
    { 
      id: 4, 
      text: { 
        ru: 'Стремление избежать наказаний или неприятностей', 
        kk: 'Жазадан немесе келеңсіздіктерден қашу', 
        en: 'Desire to avoid punishment or trouble' 
      } 
    },
    { 
      id: 5, 
      text: { 
        ru: 'Потребность в социальном престиже и уважении', 
        kk: 'Әлеуметтік бедел мен құрметке деген қажеттілік', 
        en: 'Need for social prestige and respect' 
      } 
    },
    { 
      id: 6, 
      text: { 
        ru: 'Удовлетворение от процесса и результата работы', 
        kk: 'Жұмыс процесі мен нәтижесінен қанағаттану', 
        en: 'Satisfaction from the work process and result' 
      } 
    },
    { 
      id: 7, 
      text: { 
        ru: 'Возможность самореализации', 
        kk: 'Өзін-өзі жүзеге асыру мүмкіндігі', 
        en: 'Possibility of self-realization' 
      } 
    }
  ]
};

// --- 2. ТЕСТ САМООЦЕНКИ ---
export const SELF_ESTEEM_TEST = {
  title: {
    ru: 'Самооценка личности',
    kk: 'Тұлғаның өзін-өзі бағалауы',
    en: 'Self-Esteem Assessment'
  },
  description: {
    ru: 'Сравнение "Идеала" и "Я".',
    kk: '"Идеал" мен "Мен" салыстыру.',
    en: 'Comparing "Ideal" and "Real Self".'
  },
  qualities: [
    { ru: 'Уступчивость', kk: 'Көнгіштік', en: 'Compliance' },
    { ru: 'Смелость', kk: 'Батылдық', en: 'Courage' },
    { ru: 'Вспыльчивость', kk: 'Қызбалық', en: 'Irascibility' },
    { ru: 'Настойчивость', kk: 'Тбандылық', en: 'Persistence' },
    { ru: 'Нервозность', kk: 'Күйгелектік', en: 'Nervousness' },
    { ru: 'Терпеливость', kk: 'Шыдамдылық', en: 'Patience' },
    { ru: 'Увлекаемость', kk: 'Қызыққыштық', en: 'Enthusiasm' },
    { ru: 'Пассивность', kk: 'Енжарлық', en: 'Passivity' },
    { ru: 'Холодность', kk: 'Салқынқандылық', en: 'Coldness' },
    { ru: 'Энтузиазм', kk: 'Ынта', en: 'Eagerness' },
    { ru: 'Осторожность', kk: 'Сақтық', en: 'Caution' },
    { ru: 'Капризность', kk: 'Еркелік', en: 'Capriciousness' },
    { ru: 'Медлительность', kk: 'Баяулық', en: 'Slowness' },
    { ru: 'Нерешительность', kk: 'Екіұштылық', en: 'Indecisiveness' },
    { ru: 'Энергичность', kk: 'Жігерлілік', en: 'Energy' },
    { ru: 'Жизнерадостность', kk: 'Өмірсүйгіштік', en: 'Cheerfulness' },
    { ru: 'Мнительность', kk: 'Күдікшілдік', en: 'Suspiciousness' },
    { ru: 'Упрямство', kk: 'Қырсықтық', en: 'Stubbornness' },
    { ru: 'Беспечность', kk: 'Қамсыздық', en: 'Carelessness' },
    { ru: 'Застенчивость', kk: 'Ұялшақтық', en: 'Shyness' }
  ]
};