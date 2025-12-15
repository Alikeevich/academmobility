import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, RefreshCw, AlertCircle } from 'lucide-react';
import { Language } from '../../types/language';

// --- ТИПЫ ---
type ScaleType = 'A' | 'I' | 'R' | 'P' | 'E';

interface Question {
  id: number;
  text: { ru: string; kk: string; en: string };
  scale: ScaleType;
  target: boolean; // true = ответ "Да" дает балл, false = ответ "Нет" дает балл
}

// --- ДАННЫЕ (99 Вопросов) ---
const QUESTIONS: Question[] = [
  // 1-10
  { id: 1, scale: 'I', target: true, text: { ru: 'Я отношусь к тем людям, которые выбирают не конкретную профессию, а уровень образования.', kk: 'Мен нақты мамандықты емес, білім деңгейін таңдайтын адамдарға жатамын.', en: 'I choose a level of education rather than a specific profession.' } },
  { id: 2, scale: 'R', target: true, text: { ru: 'Я не принимаю серьёзных решений мгновенно.', kk: 'Мен маңызды шешімдерді бірден қабылдамаймын.', en: 'I do not make serious decisions instantly.' } },
  { id: 3, scale: 'R', target: true, text: { ru: 'Когда мне нужно решиться на какое-то важное дело, я самым серьёзным образом оцениваю свои способности.', kk: 'Маңызды іске кірісер алдында мен өз қабілеттерімді мұқият бағалаймын.', en: 'When deciding on important matters, I seriously assess my abilities.' } },
  { id: 4, scale: 'I', target: true, text: { ru: 'Я знаю, в каких условиях я буду работать.', kk: 'Мен қандай жағдайда жұмыс істейтінімді білемін.', en: 'I know the conditions in which I will work.' } },
  { id: 5, scale: 'P', target: true, text: { ru: 'Я анализирую своё прошлое.', kk: 'Мен өткенімді талдаймын.', en: 'I analyze my past.' } },
  { id: 6, scale: 'E', target: false, text: { ru: 'Я тяжело переношу неудачи в жизни.', kk: 'Өмірдегі сәтсіздіктерді ауыр қабылдаймын.', en: 'I take failures in life hard.' } },
  { id: 7, scale: 'I', target: true, text: { ru: 'Я знаю обязанности, которые я буду выполнять на работе.', kk: 'Жұмыста атқаратын міндеттерімді білемін.', en: 'I know the duties I will perform at work.' } },
  { id: 8, scale: 'A', target: true, text: { ru: 'Меня обязательно будут уважать за мои знания и опыт.', kk: 'Білімім мен тәжірибем үшін мені міндетті түрде сыйлайтын болады.', en: 'I will definitely be respected for my knowledge and experience.' } },
  { id: 9, scale: 'P', target: true, text: { ru: 'Я ищу в прошлом истоки того, что со мной происходит в настоящем.', kk: 'Қазіргі болып жатқан жағдайлардың себебін өткеннен іздеймін.', en: 'I look for the origins of present events in my past.' } },
  { id: 10, scale: 'E', target: false, text: { ru: 'Мне не нравится, что поиск дела по душе требует больших усилий.', kk: 'Жанға жайлы істі іздеу көп күш жұмсауды талап ететіні маған ұнамайды.', en: 'I dislike that finding a suitable job requires great effort.' } },

  // 11-20
  { id: 11, scale: 'R', target: true, text: { ru: 'Все мои действия подчинены определённым целям.', kk: 'Менің барлық іс-әрекеттерім белгілі бір мақсаттарға бағытталған.', en: 'All my actions are subordinate to specific goals.' } },
  { id: 12, scale: 'P', target: true, text: { ru: 'У меня вошло в привычку думать о том, что со мной происходило раньше.', kk: 'Бұрын болған жағдайларды ойлау менің әдетіме айналды.', en: 'It has become a habit to think about what happened to me before.' } },
  { id: 13, scale: 'I', target: false, text: { ru: 'По моему мнению, знание будущей работы до мельчайших подробностей не гарантирует от разочарований.', kk: 'Меніңше, болашақ жұмысты егжей-тегжейлі білу көңіл қалудан сақтамайды.', en: 'In my opinion, knowing future work details does not guarantee against disappointment.' } },
  { id: 14, scale: 'A', target: true, text: { ru: 'Я приложу все усилия, чтобы иметь высокие знания и навыки хотя бы в одной области.', kk: 'Мен кем дегенде бір салада жоғары білім мен дағдыларға ие болуға бар күшімді саламын.', en: 'I will make every effort to have high knowledge and skills in at least one area.' } },
  { id: 15, scale: 'P', target: true, text: { ru: 'У меня стало привычкой анализировать важные события моей жизни.', kk: 'Өмірімдегі маңызды оқиғаларды талдау менің әдетіме айналды.', en: 'It has become a habit to analyze important events in my life.' } },
  { id: 16, scale: 'R', target: true, text: { ru: 'Я ничего не делаю без причины.', kk: 'Мен себепсіз ешнәрсе жасамаймын.', en: 'I do nothing without a reason.' } },
  { id: 17, scale: 'E', target: false, text: { ru: 'Меня вполне устраивает моя пассивность.', kk: 'Менің енжарлығым маған толықтай жарайды.', en: 'I am quite satisfied with my passivity.' } },
  { id: 18, scale: 'P', target: true, text: { ru: 'Я задумываюсь о том, что меня ждёт в будущем.', kk: 'Болашақта мені не күтіп тұрғаны туралы ойланамын.', en: 'I think about what awaits me in the future.' } },
  { id: 19, scale: 'A', target: false, text: { ru: 'Я предпочитаю спокойную, малоответственную работу.', kk: 'Мен тыныш, жауапкершілігі аз жұмысты қалаймын.', en: 'I prefer quiet work with little responsibility.' } },
  { id: 20, scale: 'R', target: false, text: { ru: 'Я отношусь к тем людям, которые поступают необдуманно.', kk: 'Мен ойланбай әрекет ететін адамдарға жатамын.', en: 'I am one of those people who act thoughtlessly.' } },

  // 21-30
  { id: 21, scale: 'I', target: true, text: { ru: 'Я буду менять места работы до тех пор, пока не найду то, что мне нужно.', kk: 'Керегімді тапқанша жұмыс орнымды ауыстыра беремін.', en: 'I will change jobs until I find what I need.' } },
  { id: 22, scale: 'E', target: false, text: { ru: 'Первая же крупная неудача может «выбить меня из седла».', kk: 'Алғашқы сәтсіздік менің сағымды сындыруы мүмкін.', en: 'The first major failure can knock me out of the saddle.' } },
  { id: 23, scale: 'P', target: false, text: { ru: 'Я не задумываюсь о своём будущем.', kk: 'Мен болашағым туралы ойланбаймын.', en: 'I do not think about my future.' } },
  { id: 24, scale: 'A', target: false, text: { ru: 'Я не выберу работу, требующую большой отдачи.', kk: 'Мен көп күш жұмсауды талап ететін жұмысты таңдамаймын.', en: 'I will not choose a job that requires great dedication.' } },
  { id: 25, scale: 'R', target: true, text: { ru: 'Я знаю самого себя.', kk: 'Мен өзімді білемін.', en: 'I know myself.' } },
  { id: 26, scale: 'E', target: true, text: { ru: 'Я буду добиваться своего, даже если это вызовет недовольство родных.', kk: 'Туыстарым наразы болса да, мен дегеніме жетемін.', en: 'I will achieve my goal, even if it causes dissatisfaction among relatives.' } },
  { id: 27, scale: 'I', target: true, text: { ru: 'Чем больше профессий я знаю, тем легче мне будет выбирать.', kk: 'Көп мамандықты білген сайын, таңдау маған оңайырақ болады.', en: 'The more professions I know, the easier it will be to choose.' } },
  { id: 28, scale: 'E', target: false, text: { ru: 'Мне не нравится быть самостоятельным.', kk: 'Маған өз бетімше болу ұнамайды.', en: 'I do not like being independent.' } },
  { id: 29, scale: 'P', target: false, text: { ru: 'Я не собираюсь заранее планировать уровень образования.', kk: 'Білім деңгейін алдын ала жоспарлағым келмейді.', en: 'I am not going to plan my education level in advance.' } },
  { id: 30, scale: 'A', target: false, text: { ru: 'Меня страшат ситуации, где я должен сам принимать решения.', kk: 'Өзім шешім қабылдауым керек жағдайлар мені қорқытады.', en: 'Situations where I have to make decisions myself scare me.' } },

  // 31-40
  { id: 31, scale: 'R', target: true, text: { ru: 'Я не жалею времени на обдумывание сложных задач.', kk: 'Күрделі тапсырмаларды ойлануға уақыт аямаймын.', en: 'I spare no time thinking about complex tasks.' } },
  { id: 32, scale: 'E', target: false, text: { ru: 'Когда меня постигают неудачи, я думаю, что ни на что не способен.', kk: 'Сәтсіздікке ұшырағанда, мен ештеңеге қабілетсізбін деп ойлаймын.', en: 'When failures overtake me, I think I am capable of nothing.' } },
  { id: 33, scale: 'E', target: false, text: { ru: 'Я не представляю себя работником, решающим проблемы.', kk: 'Өзімді проблемаларды шешетін қызметкер ретінде елестете алмаймын.', en: 'I do not see myself as a worker solving problems.' } },
  { id: 34, scale: 'A', target: false, text: { ru: 'Я вряд ли смог бы выполнить задания без помощи руководителя.', kk: 'Басшының көмегінсіз тапсырмаларды орындай алмас едім.', en: 'I could hardly complete tasks without the help of a supervisor.' } },
  { id: 35, scale: 'I', target: false, text: { ru: 'Мне трудно узнать о перспективах той или иной профессии.', kk: 'Мамандықтың келешегі туралы білу маған қиын.', en: 'It is difficult for me to learn about the prospects of a profession.' } },
  { id: 36, scale: 'R', target: true, text: { ru: 'Я считаю, что интуиция основана на знании.', kk: 'Мен интуиция білімге негізделген деп санаймын.', en: 'I believe that intuition is based on knowledge.' } },
  { id: 37, scale: 'I', target: false, text: { ru: 'Чтение справочников о профессиях ничего мне не даёт.', kk: 'Мамандықтар туралы анықтамалықтарды оқу маған ештеңе бермейді.', en: 'Reading reference books about professions gives me nothing.' } },
  { id: 38, scale: 'P', target: false, text: { ru: 'У меня нет устойчивых взглядов на профессиональное будущее.', kk: 'Кәсіби болашағыма қатысты тұрақты көзқарасым жоқ.', en: 'I have no stable views on my professional future.' } },
  { id: 39, scale: 'E', target: false, text: { ru: 'В моей жизни мало успехов.', kk: 'Менің өмірімде жетістіктер аз.', en: 'There is little success in my life.' } },
  { id: 40, scale: 'I', target: true, text: { ru: 'Я целенаправленно узнаю о профессиях и учебных заведениях.', kk: 'Мен мамандықтар мен оқу орындары туралы мақсатты түрде білемін.', en: 'I purposefully learn about professions and educational institutions.' } },

  // 41-50
  { id: 41, scale: 'E', target: false, text: { ru: 'Я беспокоюсь, смогу ли справиться с трудностями в работе.', kk: 'Жұмыстағы қиындықтарды жеңе аламын ба деп алаңдаймын.', en: 'I worry if I can cope with difficulties in my professional life.' } },
  { id: 42, scale: 'R', target: true, text: { ru: 'Я признаю только обдуманный риск.', kk: 'Мен тек ойластырылған тәуекелді мойындаймын.', en: 'I recognize only calculated risk.' } },
  { id: 43, scale: 'E', target: false, text: { ru: 'Мои планы срываются из-за неуверенности в себе.', kk: 'Өзіме сенімсіздіктен жоспарларым бұзылады.', en: 'My plans fail because of my self-doubt.' } },
  { id: 44, scale: 'P', target: false, text: { ru: 'Я живу настоящим.', kk: 'Мен бүгінгі күнмен өмір сүремін.', en: 'I live in the present.' } },
  { id: 45, scale: 'A', target: true, text: { ru: 'Я с детства привык доводить начатое до конца.', kk: 'Бастаған істі аяғына дейін жеткізуге дағдыланғанмын.', en: 'I am used to finishing what I started since childhood.' } },
  { id: 46, scale: 'E', target: false, text: { ru: 'Я боюсь делать важные шаги в своей жизни.', kk: 'Өмірімде маңызды қадамдар жасаудан қорқамын.', en: 'I am afraid to take important steps in my life.' } },
  { id: 47, scale: 'R', target: true, text: { ru: 'Я знаю, что мне интересно.', kk: 'Маған не қызық екенін білемін.', en: 'I know what interests me.' } },
  { id: 48, scale: 'I', target: true, text: { ru: 'Я строил образ «идеальной профессии» без конкретного названия.', kk: 'Нақты атаусыз «мінсіз мамандық» бейнесін құрдым.', en: 'I built an image of an "ideal profession" without a specific name.' } },
  { id: 49, scale: 'E', target: false, text: { ru: 'Когда я иду на компромисс, у меня портится настроение.', kk: 'Мәмілеге келгенде көңіл-күйім бұзылады.', en: 'When I compromise, my mood spoils.' } },
  { id: 50, scale: 'A', target: true, text: { ru: 'Я готов приложить усилия, чтобы добиться нужного.', kk: 'Керегіме қол жеткізу үшін күш салуға дайынмын.', en: 'I am ready to make efforts to achieve what I need.' } },

  // 51-60
  { id: 51, scale: 'R', target: true, text: { ru: 'Я знаю, чего я добьюсь в жизни.', kk: 'Өмірде неге қол жеткізетінімді білемін.', en: 'I know what I will achieve in life.' } },
  { id: 52, scale: 'P', target: true, text: { ru: 'Я могу назвать профессии, которые интересовали меня в детстве.', kk: 'Балалық шағымда қызықтырған мамандықтарды атай аламын.', en: 'I can name the professions that interested me in childhood.' } },
  { id: 53, scale: 'A', target: false, text: { ru: 'Я мало задумываюсь о своей жизни.', kk: 'Өмірім туралы аз ойланамын.', en: 'I think little about my life.' } },
  { id: 54, scale: 'E', target: false, text: { ru: 'Не могу определить отношение к необходимости принимать решения.', kk: 'Шешім қабылдау қажеттілігіне көзқарасымды анықтай алмаймын.', en: 'I cannot determine my attitude towards the need to make decisions.' } },
  { id: 55, scale: 'E', target: false, text: { ru: 'В оценке профессий эмоции играют большую роль.', kk: 'Мамандықты бағалауда эмоциялар үлкен рөл атқарады.', en: 'Emotions play a big role in assessing professions.' } },
  { id: 56, scale: 'R', target: true, text: { ru: 'Если я захочу, я преодолею любые препятствия.', kk: 'Егер қаласам, кез келген кедергіні жеңемін.', en: 'If I want, I will overcome any obstacles.' } },
  { id: 57, scale: 'A', target: false, text: { ru: 'У меня нет определённых требований к будущему.', kk: 'Болашаққа деген нақты талаптарым жоқ.', en: 'I have no specific requirements for the future.' } },
  { id: 58, scale: 'R', target: false, text: { ru: 'При принятии решений я полагаюсь на интуицию.', kk: 'Шешім қабылдағанда түйсікке сүйенемін.', en: 'I rely on intuition when making decisions.' } },
  { id: 59, scale: 'E', target: false, text: { ru: 'Мне не нравится, когда от меня требуют инициативы.', kk: 'Менен бастамашылдықты талап еткені ұнамайды.', en: 'I do not like it when initiative is required of me.' } },
  { id: 60, scale: 'P', target: true, text: { ru: 'У меня есть черты характера, необходимые для моей профессии.', kk: 'Мамандығыма қажетті мінез ерекшеліктерім бар.', en: 'I have character traits necessary for my profession.' } },

  // 61-70
  { id: 61, scale: 'A', target: false, text: { ru: 'Я – соломинка, влекомая течением жизни.', kk: 'Мен – өмір ағысымен жүзіп бара жатқан адаммын.', en: 'I am a straw drawn by the current of life.' } },
  { id: 62, scale: 'E', target: false, text: { ru: 'Мысли о выборе профессии портят мне настроение.', kk: 'Мамандық таңдау туралы ойлар көңіл-күйімді бұзады.', en: 'Thoughts about choosing a profession spoil my mood.' } },
  { id: 63, scale: 'R', target: false, text: { ru: 'При выборе я полагаюсь на внешнюю привлекательность.', kk: 'Таңдау кезінде сыртқы тартымдылыққа сүйенемін.', en: 'When choosing, I rely on external attractiveness.' } },
  { id: 64, scale: 'P', target: true, text: { ru: 'В настоящем я строю фундамент для будущего.', kk: 'Қазіргі уақытта болашақтың іргетасын қалап жатырмын.', en: 'In the present, I am building a foundation for the future.' } },
  { id: 65, scale: 'A', target: false, text: { ru: 'Если что-то помешает, я легко поменяю профессию.', kk: 'Кедергі болса, мамандықты оңай ауыстырамын.', en: 'If something interferes, I will easily change my profession.' } },
  { id: 66, scale: 'I', target: false, text: { ru: 'Я не задумываюсь, как устроен мир профессий.', kk: 'Мамандықтар әлемі қалай құрылғаны туралы ойланбаймын.', en: 'I do not think about how the world of professions works.' } },
  { id: 67, scale: 'R', target: true, text: { ru: 'Успешные люди знали, почему поступали так, а не иначе.', kk: 'Табысты адамдар неліктен олай жасағанын білген.', en: 'Successful people knew why they acted that way.' } },
  { id: 68, scale: 'I', target: true, text: { ru: 'Практическая работа помогла мне в понимании профессий.', kk: 'Практикалық жұмыс мамандықтарды түсінуге көмектесті.', en: 'Practical work helped me understand professions.' } },
  { id: 69, scale: 'E', target: false, text: { ru: 'Я с трудом уживаюсь с другими людьми.', kk: 'Басқа адамдармен тіл табысуым қиын.', en: 'I hardly get along with other people.' } },
  { id: 70, scale: 'P', target: true, text: { ru: 'Я сознательно стремлюсь к достижению целей.', kk: 'Мен мақсатқа жетуге саналы түрде ұмтыламын.', en: 'I consciously strive to achieve goals.' } },

  // 71-80
  { id: 71, scale: 'A', target: false, text: { ru: 'Любой совет может поколебать мой выбор профессии.', kk: 'Кез келген кеңес мамандық таңдауыма әсер етуі мүмкін.', en: 'Any advice can shake my choice of profession.' } },
  { id: 72, scale: 'R', target: true, text: { ru: 'Я знаю, что для меня в жизни важно.', kk: 'Өмірде мен үшін не маңызды екенін білемін.', en: 'I know what is important to me in life.' } },
  { id: 73, scale: 'I', target: false, text: { ru: 'Я не доверяю книгам о профессиях.', kk: 'Мамандықтар туралы кітаптарға сенбеймін.', en: 'I do not trust books about professions.' } },
  { id: 74, scale: 'P', target: true, text: { ru: 'Я планирую свою жизнь хотя бы на неделю вперёд.', kk: 'Өмірімді кем дегенде бір аптаға жоспарлаймын.', en: 'I plan my life at least a week ahead.' } },
  { id: 75, scale: 'A', target: false, text: { ru: 'Я знаю, почему я выбрал именно эту профессию.', kk: 'Бұл мамандықты неге таңдағанымды білемін.', en: 'I know why I chose this particular profession.' } }, // В ключе "-"
  { id: 76, scale: 'I', target: false, text: { ru: 'Лучший способ узнать профессию – поговорить с работником.', kk: 'Мамандықты білудің ең жақсы жолы – қызметкермен сөйлесу.', en: 'The best way to know a profession is to talk to a worker.' } }, // В ключе "-"
  { id: 77, scale: 'E', target: false, text: { ru: 'Мне не нравится, когда много думают о будущем.', kk: 'Болашақ туралы көп ойлаған ұнамайды.', en: 'I do not like it when people think too much about the future.' } },
  { id: 78, scale: 'A', target: false, text: { ru: 'В вузе я получу знания и больше учиться не буду.', kk: 'ЖОО-да білім алып, ары қарай оқымаймын.', en: 'I will get knowledge at the university and will not study anymore.' } },
  { id: 79, scale: 'R', target: true, text: { ru: 'Я знаю область, где добьюсь больших успехов.', kk: 'Үлкен жетістікке жететін саламды білемін.', en: 'I know the area where I will achieve great success.' } },
  { id: 80, scale: 'I', target: false, text: { ru: 'Способов изучения мира профессий не существует.', kk: 'Мамандықтар әлемін зерттеу тәсілдері жоқ.', en: 'There are no ways to study the world of professions.' } },

  // 81-90
  { id: 81, scale: 'E', target: false, text: { ru: 'Мне не нравится, когда рассуждают о том, кем быть.', kk: 'Кім болу керектігі туралы талқылағанды ұнатпаймын.', en: 'I do not like discussing who to become.' } },
  { id: 82, scale: 'P', target: false, text: { ru: 'Мне трудно спланировать жизнь даже на неделю.', kk: 'Өмірімді бір аптаға жоспарлау қиын.', en: 'It is difficult for me to plan my life even for a week.' } },
  { id: 83, scale: 'A', target: false, text: { ru: 'Я считаю, что в обществе все равны по положению.', kk: 'Қоғамда бәрінің жағдайы тең деп санаймын.', en: 'I believe everyone is equal in society.' } },
  { id: 84, scale: 'I', target: false, text: { ru: 'Сведения о профессиях я воспринимаю как ненужные.', kk: 'Мамандықтар туралы мәліметтерді қажетсіз деп санаймын.', en: 'I perceive information about professions as unnecessary.' } },
  { id: 85, scale: 'P', target: false, text: { ru: 'Я выбрал вуз, не думая, где буду работать.', kk: 'Қайда жұмыс істейтінімді ойламай оқу орнын таңдадым.', en: 'I chose a university without thinking where I would work.' } },
  { id: 86, scale: 'A', target: false, text: { ru: 'Мне всё равно, будут ли уважать меня как профессионала.', kk: 'Кәсіби маман ретінде сыйлай ма, бәрібір.', en: 'I do not care if I am respected as a professional.' } },
  { id: 87, scale: 'R', target: true, text: { ru: 'Я всегда опираюсь на проверенные сведения.', kk: 'Мен әрқашан тексерілген мәліметтерге сүйенемін.', en: 'I always rely on verified information.' } },
  { id: 88, scale: 'P', target: false, text: { ru: 'Всё, что со мной происходит, - дело случая.', kk: 'Менімен болып жатқанның бәрі – кездейсоқтық.', en: 'Everything that happens to me is a matter of chance.' } },
  { id: 89, scale: 'E', target: false, text: { ru: 'Не хочу брать ответственность за выбор профессии.', kk: 'Мамандық таңдау жауапкершілігін алғым келмейді.', en: 'I do not want to take responsibility for choosing a profession.' } },
  { id: 90, scale: 'R', target: true, text: { ru: 'В важных решениях я не иду на компромиссы.', kk: 'Маңызды шешімдерде ымыраға келмеймін.', en: 'I do not compromise on important decisions.' } },

  // 91-99
  { id: 91, scale: 'I', target: false, text: { ru: 'Я не доверяю рекламе профессий.', kk: 'Мамандықтар жарнамасына сенбеймін.', en: 'I do not trust job advertisements.' } },
  { id: 92, scale: 'A', target: false, text: { ru: 'Я не понимаю причин многих моих поступков.', kk: 'Көптеген әрекеттерімнің себебін түсінбеймін.', en: 'I do not understand the reasons for many of my actions.' } },
  { id: 93, scale: 'R', target: true, text: { ru: 'Мои самооценки совпадают с оценками друзей.', kk: 'Менің өзін-өзі бағалауым достарымның бағасымен сәйкес келеді.', en: 'My self-assessments coincide with those of my friends.' } },
  { id: 94, scale: 'A', target: false, text: { ru: 'Я не понимаю самого себя.', kk: 'Мен өзімді түсінбеймін.', en: 'I do not understand myself.' } },
  { id: 95, scale: 'E', target: false, text: { ru: 'Я нервничаю, когда задумываюсь о будущем.', kk: 'Болашақты ойласам, қобалжимын.', en: 'I get nervous when I think about the future.' } },
  { id: 96, scale: 'A', target: false, text: { ru: 'От анализа мыслей и переживаний пользы мало.', kk: 'Ойлар мен сезімдерді талдаудан пайда аз.', en: 'There is little use in analyzing thoughts and feelings.' } },
  { id: 97, scale: 'P', target: false, text: { ru: 'Я не знаю, как осуществить профессиональный выбор.', kk: 'Кәсіби таңдауды қалай жасауды білмеймін.', en: 'I do not know how to make a professional choice.' } },
  { id: 98, scale: 'P', target: true, text: { ru: 'Я могу отказаться от многого ради целей.', kk: 'Мақсат үшін көп нәрседен бас тарта аламын.', en: 'I can give up much for the sake of goals.' } },
  { id: 99, scale: 'P', target: true, text: { ru: 'Я представляю, каким я буду через 10 лет.', kk: '10 жылдан кейін қандай болатынымды елестетемін.', en: 'I imagine what I will be like in 10 years.' } },
];

const SCALES_INFO = {
  A: {
    title: { ru: 'Автономность (А)', kk: 'Автономдылық (А)', en: 'Autonomy (A)' },
    desc: { 
      ru: 'Способность к самоопределению, независимость от родителей, инициатива, ответственность за свои поступки и стремление к успеху.',
      kk: 'Өзін-өзі анықтау қабілеті, ата-анадан тәуелсіздік, бастамашылық, өз іс-әрекеті үшін жауапкершілік және табысқа ұмтылу.',
      en: 'Ability to self-determine, independence from parents, initiative, responsibility for one\'s actions, and striving for success.'
    }
  },
  I: {
    title: { ru: 'Информированность (И)', kk: 'Ақпараттану (И)', en: 'Informedness (I)' },
    desc: { 
      ru: 'Знание о мире профессий, условиях труда, требованиях к образованию и умение соотносить эту информацию со своими возможностями.',
      kk: 'Мамандықтар әлемі, еңбек шарттары, білім талаптары туралы білім және осы ақпаратты өз мүмкіндіктерімен сәйкестендіру қабілеті.',
      en: 'Knowledge about the world of professions, working conditions, education requirements, and the ability to relate this information to one\'s capabilities.'
    }
  },
  R: {
    title: { ru: 'Принятие решений (Р)', kk: 'Шешім қабылдау (Р)', en: 'Decision Making (R)' },
    desc: { 
      ru: 'Умение собирать информацию, оценивать альтернативы, просчитывать риски и брать ответственность за последствия своего выбора.',
      kk: 'Ақпарат жинау, баламаларды бағалау, тәуекелдерді есептеу және өз таңдауының салдары үшін жауапкершілікті алу қабілеті.',
      en: 'Ability to collect information, evaluate alternatives, calculate risks, and take responsibility for the consequences of one\'s choice.'
    }
  },
  P: {
    title: { ru: 'Планирование (П)', kk: 'Жоспарлау (П)', en: 'Planning (P)' },
    desc: { 
      ru: 'Способность видеть перспективу, ставить цели, моделировать свое будущее и разрабатывать стратегии достижения успеха.',
      kk: 'Болашақты көре білу, мақсат қою, өз болашағын жоспарлау және жетістікке жету стратегияларын әзірлеу қабілеті.',
      en: 'Ability to see perspective, set goals, model one\'s future, and develop strategies for achieving success.'
    }
  },
  E: {
    title: { ru: 'Эмоциональное отношение (Э)', kk: 'Эмоционалды қатысу (Э)', en: 'Emotional Attitude (E)' },
    desc: { 
      ru: 'Эмоциональная включенность, оптимизм, устойчивость к неудачам. Низкий балл может говорить о страхе перед ответственностью.',
      kk: 'Эмоционалды қатысу, оптимизм, сәтсіздіктерге төзімділік. Төмен балл жауапкершіліктен қорқуды білдіруі мүмкін.',
      en: 'Emotional involvement, optimism, resilience to failure. A low score may indicate fear of responsibility.'
    }
  }
};

export default function ReadinessTest({ language }: { language: Language }) {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(QUESTIONS.length / itemsPerPage);
  const progress = (Object.keys(answers).length / QUESTIONS.length) * 100;

  const ui = {
    title: { ru: 'Методика «Профессиональная готовность»', kk: '«Кәсіби дайындық» әдістемесі', en: 'Methodology "Professional Readiness"' },
    instr: { 
      ru: 'Прочитайте утверждения. Согласны ли вы с ними? Ответьте на все 99 вопросов для получения точного результата.',
      kk: 'Тұжырымдарды оқыңыз. Сіз олармен келісесіз бе? Нақты нәтиже алу үшін барлық 99 сұраққа жауап беріңіз.',
      en: 'Read the statements. Do you agree with them? Answer all 99 questions to get an exact result.'
    },
    progress: { ru: 'Прогресс', kk: 'Прогресс', en: 'Progress' },
    yes: { ru: 'Да (+)', kk: 'Иә (+)', en: 'Yes (+)' },
    no: { ru: 'Нет (-)', kk: 'Жоқ (-)', en: 'No (-)' },
    next: { ru: 'Далее', kk: 'Келесі', en: 'Next' },
    prev: { ru: 'Назад', kk: 'Артқа', en: 'Back' },
    finish: { ru: 'Завершить', kk: 'Аяқтау', en: 'Finish' },
    restart: { ru: 'Пройти заново', kk: 'Қайта өту', en: 'Restart' },
    resultTitle: { ru: 'Результаты диагностики', kk: 'Диагностика нәтижелері', en: 'Diagnostic Results' },
    resultSubtitle: { ru: 'Ваш профиль готовности', kk: 'Сіздің дайындық профиліңіз', en: 'Your readiness profile' },
    alert: { ru: 'Ответьте на все вопросы', kk: 'Барлық сұрақтарға жауап беріңіз', en: 'Answer all questions' }
  };

  const handleAnswer = (id: number, value: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const calculateResults = () => {
    const scores = { A: 0, I: 0, R: 0, P: 0, E: 0 };
    QUESTIONS.forEach(q => {
      // Если пользователь ответил так же, как в ключе (target), то +1 балл
      if (answers[q.id] === q.target) {
        scores[q.scale]++;
      }
    });
    return scores;
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      document.getElementById('readiness-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      setShowResult(true);
      document.getElementById('psychology')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  const resetTest = () => {
    setAnswers({});
    setCurrentPage(0);
    setShowResult(false);
  };

  // --- RENDERING RESULTS ---
  if (showResult) {
    const scores = calculateResults();
    // Максимальные баллы по шкалам
    const maxScores = { A: 20, I: 17, R: 20, P: 20, E: 22 }; 

    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{ui.resultTitle[language]}</h3>
          <p className="text-gray-500">{ui.resultSubtitle[language]}</p>
        </div>

        <div className="space-y-6">
          {(Object.keys(scores) as ScaleType[]).map((scaleKey) => {
            const score = scores[scaleKey];
            const max = maxScores[scaleKey as keyof typeof maxScores] || 20;
            const percent = Math.min(100, Math.round((score / max) * 100));
            
            // Цвет бара
            let colorClass = "bg-yellow-500";
            if (percent > 70) colorClass = "bg-green-500";
            if (percent < 40) colorClass = "bg-red-400";

            return (
              <div key={scaleKey} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <div className="flex justify-between items-end mb-2">
                  <h4 className="font-bold text-lg text-gray-800">{SCALES_INFO[scaleKey].title[language]}</h4>
                  <span className="font-mono font-bold text-uni-primary">{score} / {max}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 1 }}
                    className={`h-full ${colorClass}`}
                  />
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">{SCALES_INFO[scaleKey].desc[language]}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={resetTest}
            className="flex items-center gap-2 text-uni-secondary hover:text-uni-primary font-bold transition"
          >
            <RefreshCw className="w-4 h-4" /> {ui.restart[language]}
          </button>
        </div>
      </div>
    );
  }

  // --- RENDERING QUESTIONS ---
  const currentQuestions = QUESTIONS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const isPageComplete = currentQuestions.every(q => answers[q.id] !== undefined);

  return (
    <div id="readiness-card" className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200 mt-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-uni-primary mb-2">{ui.title[language]}</h3>
        <p className="text-sm text-gray-500 mb-4">{ui.instr[language]}</p>
        
        {/* Global Progress */}
        <div className="flex items-center gap-3 text-xs font-bold text-gray-400 mb-1">
          <span>{ui.progress[language]}: {Math.round(progress)}%</span>
          <span className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
             <div className="h-full bg-uni-primary transition-all duration-300" style={{ width: `${progress}%` }} />
          </span>
          <span>{Object.keys(answers).length} / {QUESTIONS.length}</span>
        </div>
      </div>

      <div className="space-y-4 min-h-[400px]">
        {currentQuestions.map((q) => (
          <motion.div 
            key={q.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-4 rounded-lg border transition-colors ${answers[q.id] !== undefined ? 'bg-blue-50/50 border-blue-100' : 'bg-white border-gray-100'}`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-gray-800 text-sm md:text-base flex-1">
                <span className="font-bold text-gray-400 mr-2">{q.id}.</span>
                {q.text[language]}
              </p>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => handleAnswer(q.id, true)}
                  className={`px-6 py-2 rounded font-bold text-sm transition-all ${
                    answers[q.id] === true 
                      ? 'bg-green-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {ui.yes[language]}
                </button>
                <button
                  onClick={() => handleAnswer(q.id, false)}
                  className={`px-6 py-2 rounded font-bold text-sm transition-all ${
                    answers[q.id] === false 
                      ? 'bg-red-500 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {ui.no[language]}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center border-t border-gray-100 pt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-uni-primary disabled:opacity-30 disabled:cursor-not-allowed font-medium"
        >
          <ChevronLeft className="w-5 h-5" /> {ui.prev[language]}
        </button>

        <span className="text-sm font-bold text-gray-400">
          Page {currentPage + 1} / {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={!isPageComplete}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all shadow-md ${
            !isPageComplete 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-uni-secondary hover:bg-uni-primary'
          }`}
        >
          {currentPage === totalPages - 1 ? (
            <>{ui.finish[language]} <Check className="w-5 h-5" /></>
          ) : (
            <>{ui.next[language]} <ChevronRight className="w-5 h-5" /></>
          )}
        </button>
      </div>
      
      {!isPageComplete && (
        <div className="text-center mt-2 text-xs text-red-400 flex items-center justify-center gap-1">
          <AlertCircle className="w-3 h-3" /> {ui.alert[language]}
        </div>
      )}
    </div>
  );
}