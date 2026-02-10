import { Lightbulb, ArrowRight, CheckCircle2, TrendingUp, Users, Plane, Building2, Database } from 'lucide-react';

const RecommendationsSection = () => {
  const recommendations = [
    {
      id: '01',
      icon: TrendingUp,
      title: 'Реструктуризация баланса',
      subtitle: '«Стационар-выезды-гастроли»',
      description: 'Переход от низкомаржинальных выездов к высокомаржинальному стационару',
      current: 'Стационар: 32% · Выездные: 36% · Гастроли: 32%',
      target: 'Стационар: 55-60% · Выездные: 16-20% · Гастроли: 25-30%',
      effect: '+4-5 млн ₽/год · рентабельность 10-12%',
      details: [
        'Сокращение выездных «Солистов» с 13 до 7-8/месяц',
        'Увеличение повторяемости стационарных программ',
        'Делегирование школьных концертов региональным коллективам'
      ]
    },
    {
      id: '02',
      icon: Building2,
      title: 'Диверсификация доходов',
      subtitle: 'Программа «78 → 50»',
      description: 'Снижение доли госфинансирования с 78% до 50% к 2028 году',
      current: 'Госзадание: 78% · Коммерция: 16% · Прочее: 6%',
      target: 'Госзадание: 50% · Коммерция: 25% · Корпоративные: 10% · Гранты: 10%',
      effect: 'Финансовая устойчивость · независимость',
      details: [
        'Корпоративные абонементы: 10-12 млн ₽/год',
        'Грантовое финансирование: 6-15 млн ₽/год',
        'Спонсорство крупных программ: 6-15 млн ₽/год'
      ]
    },
    {
      id: '03',
      icon: Plane,
      title: 'Масштабирование гастролей',
      subtitle: 'Модель «Дальний Восток»',
      description: 'Тиражирование успешной гастрольной модели на ОРНИ и ДВАСО',
      current: '«Дальний Восток»: 2.07 млн ₽/мес · ОРНИ: 725 тыс ₽/мес',
      target: 'ОРНИ: +2.4-3.6 млн ₽/год · ДВАСО: +2-6 млн ₽/год',
      effect: 'Рентабельность 40-65% · статус бренда',
      details: [
        'ОРНИ: увеличение до 12-15 концертов/мес в пиковые периоды',
        'ДВАСО: 2-3 тура/год по ДВ и Сибири (5-7 концертов/тур)',
        'Международный тур в КНР: 12 концертов, 2.3 млн ₽'
      ]
    },
    {
      id: '04',
      icon: Users,
      title: 'Трансформация стационара',
      subtitle: 'От «дополнения» к «бизнесу»',
      description: 'Превращение коммерческого стационара в self-sustainable бизнес',
      current: 'Рентабельность 13% · доля 16% · нет абонементов',
      target: 'Рентабельность 20-25% · доля 25% · 800-1000 абонентов',
      effect: '+7.8 млн ₽ экономии · предсказуемая выручка',
      details: [
        'Замена 50% сторонних артистов на штатные коллективы',
        'Внедрение абонементной системы: 2.8-3 млн ₽/год',
        'Динамическое ценообразование: +15-20% выручки'
      ]
    },
    {
      id: '05',
      icon: Database,
      title: 'Центр развития аудитории',
      subtitle: 'CRM и аналитика',
      description: 'Создание системы управления взаимоотношениями со зрителями',
      current: 'Нет базы данных · нет метрик · нет сегментации',
      target: 'CRM-система · 3000-5000 профилей · персонализация',
      effect: '+25-30% повторных покупок · окупаемость 12-18 мес',
      details: [
        'Сбор данных о зрителях (профиль на каждую покупку)',
        'Email/SMS-маркетинг с индивидуальными предложениями',
        'Программы лояльности: накопительные бонусы, VIP-статусы'
      ]
    }
  ];

  return (
    <section id="recommendations" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[hsl(45,90%,55%)]/10">
              <Lightbulb className="w-6 h-6 text-[hsl(45,90%,55%)]" />
            </div>
            <span className="text-sm font-medium text-[hsl(45,90%,55%)] uppercase tracking-wider">Стратегия</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Стратегические рекомендации
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Комплекс мер по трансформации филармонии от «бюджетной организации с символическим 
            коммерческим дополнением» к «self-sustainable культурному бизнесу с социальной миссией»
          </p>
        </div>

        {/* Recommendations */}
        <div className="space-y-8">
          {recommendations.map((rec, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)] 
                         hover:border-[hsl(45,90%,55%)]/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Main Info */}
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[hsl(45,90%,55%)]/10">
                      <rec.icon className="w-6 h-6 text-[hsl(45,90%,55%)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[hsl(45,90%,55%)]">{rec.id}</span>
                        <span className="text-xs text-gray-500">|</span>
                        <span className="text-xs text-gray-500">Рекомендация</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{rec.title}</h3>
                      <p className="text-sm text-[hsl(45,90%,55%)]">{rec.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{rec.description}</p>
                </div>

                {/* Middle Column - Current → Target */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-[hsl(220,15%,18%)]">
                    <p className="text-xs text-gray-500 mb-1">Текущее состояние</p>
                    <p className="text-sm text-gray-300">{rec.current}</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-[hsl(45,90%,55%)]" />
                  </div>
                  <div className="p-4 rounded-xl bg-[hsl(45,90%,55%)]/10 border border-[hsl(45,90%,55%)]/20">
                    <p className="text-xs text-[hsl(45,90%,55%)] mb-1">Целевой показатель</p>
                    <p className="text-sm text-white">{rec.target}</p>
                  </div>
                </div>

                {/* Right Column - Effect & Details */}
                <div className="lg:col-span-3">
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-4">
                    <p className="text-xs text-green-400 mb-1">Ожидаемый эффект</p>
                    <p className="text-sm text-white font-medium">{rec.effect}</p>
                  </div>
                  <ul className="space-y-2">
                    {rec.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(45,90%,55%)] mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
