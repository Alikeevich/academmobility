import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Users, BookOpen, Briefcase, Monitor, Book } from 'lucide-react';
import { useEffect } from 'react';

interface Props {
  onBack: () => void;
}

export default function InternationalizationPage({ onBack }: Props) {
  // Скролл вверх при открытии страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 1,
      title: "1. Академическая мобильность",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-50",
      content: `
        Академическая мобильность — это перемещение студентов, преподавателей и исследователей в другое образовательное или научное учреждение (внутри страны или за рубежом) на определенный период времени для обучения, преподавания или проведения исследований.
        
        Ключевые аспекты:
        • Обмен студентами (семестровое обучение).
        • Стажировки за границей (профессиональная практика).
        • Приглашение зарубежных профессоров (Visiting Professors).
        • Двойные дипломы (получение степени в двух вузах одновременно).
        
        Цель мобильности — интеграция в мировое образовательное пространство и повышение конкурентоспособности выпускников.
      `
    },
    {
      id: 2,
      title: "2. Межкультурная коммуникация",
      icon: Users,
      color: "text-green-600",
      bg: "bg-green-50",
      content: `
        В условиях глобализации недостаточно просто знать язык. Межкультурная коммуникация — это сложный процесс взаимодействия между представителями различных культур, включающий понимание ценностей, норм поведения и менталитета собеседника.
        
        Важные навыки:
        • Эмпатия и толерантность к культурным различиям.
        • Умение преодолевать стереотипы.
        • Навыки ведения переговоров в мультикультурной среде.
        • Понимание невербальных сигналов (жесты, дистанция), принятых в других странах.
        
        Университет создает среду, где студенты учатся эффективно взаимодействовать с представителями других наций.
      `
    },
    {
      id: 3,
      title: "3. Обучение на иностранных языках",
      icon: Book,
      color: "text-red-600",
      bg: "bg-red-50",
      content: `
        Внедрение полиязычного образования — фундамент интернационализации. Это не только курсы английского языка, но и преподавание профильных дисциплин (физика, экономика, медицина) на иностранном языке (EMI — English Medium Instruction).
        
        Направления развития:
        • Увеличение доли дисциплин на английском языке.
        • Изучение второго иностранного языка (немецкий, французский, китайский).
        • Подготовка преподавателей к ведению лекций на иностранном языке.
        • Создание языковой среды кампуса.
      `
    },
    {
      id: 4,
      title: "4. Совместные международные проекты",
      icon: Briefcase,
      color: "text-purple-600",
      bg: "bg-purple-50",
      content: `
        Наука не имеет границ. Совместные проекты позволяют объединять ресурсы, знания и опыт ученых из разных стран для решения глобальных проблем.
        
        Форматы сотрудничества:
        • Международные консорциумы (например, в рамках Erasmus+).
        • Совместные научные публикации в рейтинговых журналах (Scopus, Web of Science).
        • Организация международных конференций и симпозиумов.
        • Грантовые программы и международное финансирование исследований.
      `
    },
    {
      id: 5,
      title: "5. Цифровая интернационализация",
      icon: Monitor,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      content: `
        Современный этап развития, ускорившийся после пандемии. Это использование цифровых технологий для обеспечения международного измерения образования без физического перемещения.
        
        Инструменты:
        • COIL (Collaborative Online International Learning) — виртуальные обмены.
        • MOOCs (Массовые открытые онлайн-курсы) от ведущих мировых вузов.
        • Международные онлайн-платформы для совместной проектной работы.
        • Виртуальные лаборатории и цифровые библиотеки.
      `
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center gap-4 z-10 shadow-sm">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-uni-primary" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">Теоретические основы</h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-16 text-center">
          <div className="w-20 h-20 bg-uni-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-uni-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Интернационализация образования
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Интернационализация — это процесс интеграции международного, межкультурного и глобального измерения в цели, функции и доставку высшего образования. Это ключевой тренд современного академического мира.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${section.bg}`}>
                    <section.icon className={`w-8 h-8 ${section.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="prose prose-lg text-gray-700 max-w-none">
                  {section.content.split('\n').map((line, i) => (
                    line.trim() && <p key={i} className="mb-4 leading-relaxed">{line.trim()}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer of the page */}
        <div className="mt-20 p-8 bg-uni-gray rounded-2xl text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Готовы стать частью глобального мира?</h3>
          <p className="text-gray-600 mb-8">Изучите программы мобильности и начните свой путь.</p>
          <button 
            onClick={onBack}
            className="bg-uni-primary text-white px-8 py-3 rounded font-bold hover:bg-red-800 transition"
          >
            Вернуться к выбору программ
          </button>
        </div>
      </div>
    </motion.div>
  );
}