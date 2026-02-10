import { TrendingUp, AlertTriangle, BarChart3, Target } from 'lucide-react';

const HeroSection = () => {
  const keyFindings = [
    {
      icon: BarChart3,
      title: '88.6 млн ₽',
      subtitle: 'Годовой бюджет',
      description: 'Госзадание 78% · Коммерция 16% · КТУ 6%'
    },
    {
      icon: AlertTriangle,
      title: '78%',
      subtitle: 'Зависимость от госфинансирования',
      description: 'Критический риск при изменении бюджетной политики'
    },
    {
      icon: TrendingUp,
      title: '109-259%',
      subtitle: 'Выполнение норм коллективами',
      description: 'Штатные коллективы перегружены, а не недоиспользованы'
    },
    {
      icon: Target,
      title: '6%',
      subtitle: 'Общая рентабельность',
      description: 'Целевой показатель к 2028: 15-18%'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,8%)] via-[hsl(220,20%,10%)] to-[hsl(220,25%,6%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(45,90%,55%)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(45,90%,55%)]/3 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(45,90%,55%)]/10 border border-[hsl(45,90%,55%)]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(45,90%,55%)] animate-pulse" />
            <span className="text-sm text-[hsl(45,90%,55%)] font-medium">Экспертный анализ · Январь 2026</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Хабаровская краевая
            <span className="block text-gradient">филармония</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Полный операционный и финансовый анализ деятельности. 
            Выявление стратегических уязвимостей и рекомендации по трансформации 
            от «бюджетной организации» к «культурному бизнесу»
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFindings.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)] 
                         hover:border-[hsl(45,90%,55%)]/30 transition-all duration-300 card-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-[hsl(45,90%,55%)]/10">
                  <item.icon className="w-6 h-6 text-[hsl(45,90%,55%)]" />
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                <p className="text-sm font-medium text-[hsl(45,90%,55%)]">{item.subtitle}</p>
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Summary */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[hsl(45,90%,55%)]/10 to-transparent border border-[hsl(45,90%,55%)]/20">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[hsl(45,90%,55%)] rounded-full" />
            Исполнительное резюме
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Расширенный анализ опровергает первоначальный вывод о недоиспользовании штатных коллективов. 
            Истинная проблема — <span className="text-[hsl(45,90%,55%)] font-medium">структурная диспропорция бизнес-модели</span>: 
            78% доходов зависят от госфинансирования, в то время как коммерческий стационар демонстрирует 
            низкую рентабельность. Филармония функционирует как социально-просветительская организация 
            на госфинансировании с номинальным коммерческим компонентом.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
