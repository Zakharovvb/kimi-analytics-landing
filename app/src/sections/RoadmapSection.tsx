import { Calendar, CheckCircle2, Circle, Clock, Flag } from 'lucide-react';

const RoadmapSection = () => {
  const roadmapData = [
    {
      phase: 'Фаза 1',
      period: 'Q1 2026',
      title: 'Пилотные проекты',
      items: [
        { text: 'Внедрение абонементов (ДВАСО, «Глория»)', status: 'planned', kpi: '100-150 абонементов' },
        { text: 'Масштабирование гастролей ОРНИ', status: 'planned', kpi: '1.2-1.5 млн ₽ выручки' },
        { text: 'Пилот «замена сторонних на штатные»', status: 'planned', kpi: 'Экономия 250-400 тыс ₽' }
      ]
    },
    {
      phase: 'Фаза 2',
      period: 'Q2-Q3 2026',
      title: 'Масштабирование',
      items: [
        { text: 'Реструктуризация баланса (сокращение выездов)', status: 'planned', kpi: '+25-30% выручки стационара' },
        { text: 'Запуск CRM и программ лояльности', status: 'planned', kpi: '3000-5000 профилей' },
        { text: 'Развитие корпоративных программ', status: 'planned', kpi: '5-8 клиентов, 2-3 млн ₽' }
      ]
    },
    {
      phase: 'Фаза 3',
      period: 'Q4 2026',
      title: 'Итоги года',
      items: [
        { text: 'Международный тур «Дальнего Востока» в КНР', status: 'planned', kpi: '12 концертов, 2.3 млн ₽' },
        { text: 'Анализ пилотов и стратегическая сессия', status: 'planned', kpi: 'Утверждение плана 2027' },
        { text: 'Ожидаемые результаты 2026', status: 'milestone', kpi: '+10-15% выручки, рентабельность 8-9%' }
      ]
    },
    {
      phase: 'Фаза 4',
      period: '2027',
      title: 'Системная трансформация',
      items: [
        { text: 'Запуск гастрольной программы ДВАСО', status: 'planned', kpi: '2-3 тура/год' },
        { text: 'Расширение корпоративных программ', status: 'planned', kpi: '15-20 клиентов' },
        { text: 'Репозиционирование ДВАСО (премиализация)', status: 'planned', kpi: 'Рентабельность 10-12%' }
      ]
    },
    {
      phase: 'Фаза 5',
      period: '2028',
      title: 'Целевая модель',
      items: [
        { text: 'Доля госфинансирования 50%', status: 'milestone', kpi: 'Финансовая устойчивость' },
        { text: 'Рентабельность 15-18%', status: 'milestone', kpi: 'Self-sustainable бизнес' },
        { text: 'Выручка 120-130 млн ₽', status: 'milestone', kpi: 'Культурный хаб ДВ' }
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[hsl(45,90%,55%)]/10">
              <Calendar className="w-6 h-6 text-[hsl(45,90%,55%)]" />
            </div>
            <span className="text-sm font-medium text-[hsl(45,90%,55%)] uppercase tracking-wider">Дорожная карта</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            План реализации 2026-2028
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Пятэтапная дорожная карта трансформации филармонии от пилотных проектов 
            к достижению целевой финансовой модели.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[hsl(220,15%,20%)] md:-translate-x-px" />

          {/* Phases */}
          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 
                                flex items-center justify-center z-10 md:-translate-x-1/2
                                ${phase.phase === 'Фаза 5' ? 'bg-green-500 border-green-500' : 
                                  phase.phase === 'Фаза 1' ? 'bg-[hsl(45,90%,55%)] border-[hsl(45,90%,55%)]' :
                                  'bg-[hsl(220,20%,12%)] border-[hsl(220,15%,20%)]'}`}>
                  {phase.phase === 'Фаза 5' ? <Flag className="w-4 h-4 text-white" /> :
                   phase.phase === 'Фаза 1' ? <Clock className="w-4 h-4 text-[hsl(220,25%,8%)]" /> :
                   <Circle className="w-3 h-3 text-gray-500" />}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)]
                                  hover:border-[hsl(45,90%,55%)]/30 transition-all duration-300">
                    {/* Phase Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        phase.phase === 'Фаза 5' ? 'bg-green-500/20 text-green-400' :
                        phase.phase === 'Фаза 1' ? 'bg-[hsl(45,90%,55%)]/20 text-[hsl(45,90%,55%)]' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {phase.phase}
                      </span>
                      <span className="text-sm text-gray-500">{phase.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                    
                    {/* Items */}
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {item.status === 'completed' ? (
                            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          ) : item.status === 'milestone' ? (
                            <Flag className="w-5 h-5 text-[hsl(45,90%,55%)] mt-0.5 flex-shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                          )}
                          <div>
                            <p className="text-sm text-gray-300">{item.text}</p>
                            <p className="text-xs text-[hsl(45,90%,55%)] mt-0.5">{item.kpi}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Summary */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[hsl(45,90%,55%)]/10 to-transparent border border-[hsl(45,90%,55%)]/20">
          <h3 className="text-xl font-semibold text-white mb-6">Инвестиции и окупаемость</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Инвестиции 2026-2028</p>
              <p className="text-2xl font-bold text-white">12-18 млн ₽</p>
              <p className="text-xs text-gray-400 mt-1">Модернизация, CRM, маркетинг, обучение</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Срок окупаемости</p>
              <p className="text-2xl font-bold text-[hsl(45,90%,55%)]">18-24 месяца</p>
              <p className="text-xs text-gray-400 mt-1">С учётом всех этапов трансформации</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Чистая приведённая стоимость</p>
              <p className="text-2xl font-bold text-green-400">+25-35 млн ₽</p>
              <p className="text-xs text-gray-400 mt-1">NPV за 3 года (ставка дисконта 10%)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
