import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Target, AlertTriangle } from 'lucide-react';

const ForecastSection = () => {
  const forecastData = [
    { year: '2026', statusQuo: 5, partial: 5, comprehensive: 5, revenue: 88.6 },
    { year: '2027', statusQuo: 5.3, partial: 11, comprehensive: 13, revenue: 105 },
    { year: '2028', statusQuo: 5.5, partial: 16, comprehensive: 20.5, revenue: 125 }
  ];

  const scenarios = [
    {
      name: 'Статус-кво',
      icon: AlertTriangle,
      color: 'red',
      profitability: '6% → 5.5%',
      revenue: '88.6 млн → 90 млн ₽',
      risk: 'Высокий',
      description: 'Сохранение текущей модели без изменений. Стагнация рентабельности, рост зависимости от госфинансирования до 80%.'
    },
    {
      name: 'Частичная оптимизация',
      icon: TrendingUp,
      color: 'yellow',
      profitability: '6% → 10-12%',
      revenue: '88.6 млн → 105-110 млн ₽',
      risk: 'Средний',
      description: 'Реструктуризация баланса, замена сторонних артистов, внедрение абонементов. Инвестиции 3-5 млн ₽, окупаемость 10-14 мес.'
    },
    {
      name: 'Комплексная трансформация',
      icon: Target,
      color: 'green',
      profitability: '6% → 15-18%',
      revenue: '88.6 млн → 120-130 млн ₽',
      risk: 'Низкий',
      description: 'Полная реализация всех рекомендаций. Диверсификация доходов, масштабирование гастролей, CRM-система. NPV +25-35 млн ₽ за 3 года.'
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)] rounded-lg p-4 shadow-xl">
          <p className="text-white font-medium mb-2">{label} год</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value} млн ₽
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="forecast" className="py-24 relative bg-[hsl(220,20%,10%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[hsl(45,90%,55%)]/10">
              <TrendingUp className="w-6 h-6 text-[hsl(45,90%,55%)]" />
            </div>
            <span className="text-sm font-medium text-[hsl(45,90%,55%)] uppercase tracking-wider">Прогноз</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Финансовые сценарии 2026-2028
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Три сценария развития филармонии в зависимости от степени реализации стратегических рекомендаций.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {scenarios.map((scenario, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                scenario.color === 'red' ? 'bg-red-500/5 border-red-500/20' :
                scenario.color === 'yellow' ? 'bg-[hsl(45,90%,55%)]/5 border-[hsl(45,90%,55%)]/20' :
                'bg-green-500/5 border-green-500/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  scenario.color === 'red' ? 'bg-red-500/10' :
                  scenario.color === 'yellow' ? 'bg-[hsl(45,90%,55%)]/10' :
                  'bg-green-500/10'
                }`}>
                  <scenario.icon className={`w-5 h-5 ${
                    scenario.color === 'red' ? 'text-red-400' :
                    scenario.color === 'yellow' ? 'text-[hsl(45,90%,55%)]' :
                    'text-green-400'
                  }`} />
                </div>
                <h3 className="text-lg font-bold text-white">{scenario.name}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Рентабельность</p>
                  <p className={`text-xl font-bold ${
                    scenario.color === 'red' ? 'text-red-400' :
                    scenario.color === 'yellow' ? 'text-[hsl(45,90%,55%)]' :
                    'text-green-400'
                  }`}>{scenario.profitability}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Выручка</p>
                  <p className="text-white font-medium">{scenario.revenue}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Риск</p>
                  <p className={`font-medium ${
                    scenario.color === 'red' ? 'text-red-400' :
                    scenario.color === 'yellow' ? 'text-[hsl(45,90%,55%)]' :
                    'text-green-400'
                  }`}>{scenario.risk}</p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{scenario.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Profit Chart */}
        <div className="p-8 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)] mb-8">
          <h3 className="text-xl font-semibold text-white mb-6">Динамика прибыли по сценариям</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorStatusQuo" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPartial" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d4a853" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#d4a853" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorComprehensive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,20%)" />
                <XAxis dataKey="year" stroke="hsl(220,10%,60%)" fontSize={12} tickLine={false} />
                <YAxis stroke="hsl(220,10%,60%)" fontSize={12} tickLine={false} tickFormatter={(v) => `${v} млн`} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="statusQuo" name="Статус-кво" stroke="#ef4444" fillOpacity={1} fill="url(#colorStatusQuo)" strokeWidth={2} />
                <Area type="monotone" dataKey="partial" name="Частичная оптимизация" stroke="#d4a853" fillOpacity={1} fill="url(#colorPartial)" strokeWidth={2} />
                <Area type="monotone" dataKey="comprehensive" name="Комплексная трансформация" stroke="#22c55e" fillOpacity={1} fill="url(#colorComprehensive)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)] text-center">
            <p className="text-3xl font-bold text-white">18-24</p>
            <p className="text-sm text-gray-400">мес. окупаемость</p>
          </div>
          <div className="p-6 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)] text-center">
            <p className="text-3xl font-bold text-[hsl(45,90%,55%)]">25-35</p>
            <p className="text-sm text-gray-400">млн ₽ NPV (3 года)</p>
          </div>
          <div className="p-6 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)] text-center">
            <p className="text-3xl font-bold text-green-400">45-60%</p>
            <p className="text-sm text-gray-400">IRR</p>
          </div>
          <div className="p-6 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)] text-center">
            <p className="text-3xl font-bold text-white">50%</p>
            <p className="text-sm text-gray-400">доля госфинансирования к 2028</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForecastSection;
