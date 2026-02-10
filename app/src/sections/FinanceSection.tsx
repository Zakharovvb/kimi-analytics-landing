import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Wallet, TrendingDown, TrendingUp, AlertCircle } from 'lucide-react';

const FinanceSection = () => {
  const budgetData = [
    { name: 'Госзадание', value: 68856857, percentage: 78, color: '#d4a853' },
    { name: 'Коммерческий стационар', value: 14204493, percentage: 16, color: '#8b7355' },
    { name: 'КТУ', value: 5505881, percentage: 6, color: '#5a5a5a' }
  ];

  const formatByFormatData = [
    { name: 'Стационар коммерческий', revenue: 132000, profitability: 13, concerts: 15 },
    { name: 'Пушкинская карта', revenue: 50000, profitability: 30, concerts: 8 },
    { name: 'Выездные концерты', revenue: 19000, profitability: -5, concerts: 26 },
    { name: 'Гастроли', revenue: 140000, profitability: 35, concerts: 23 }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)] rounded-lg p-3 shadow-xl">
          <p className="text-white font-medium">{data.name}</p>
          <p className="text-[hsl(45,90%,55%)]">
            {data.value ? `${(data.value / 1000000).toFixed(1)} млн ₽` : 
             data.revenue ? `${data.revenue.toLocaleString()} ₽/концерт` : ''}
          </p>
          {data.percentage && <p className="text-gray-400 text-sm">{data.percentage}% от бюджета</p>}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="finance" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[hsl(45,90%,55%)]/10">
              <Wallet className="w-6 h-6 text-[hsl(45,90%,55%)]" />
            </div>
            <span className="text-sm font-medium text-[hsl(45,90%,55%)] uppercase tracking-wider">Финансовая архитектура</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Структура доходов и рентабельность
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Годовой бюджет 88.6 млн рублей формируется преимущественно за счёт государственного задания, 
            что создаёт критические риски устойчивости.
          </p>
        </div>

        {/* Budget Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pie Chart */}
          <div className="p-8 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)]">
            <h3 className="text-xl font-semibold text-white mb-6">Структура бюджета 2026</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend */}
            <div className="space-y-3 mt-4">
              {budgetData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-300">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-medium">{(item.value / 1000000).toFixed(1)} млн ₽</span>
                    <span className="text-gray-500 ml-2">({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-500/10">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Критическая уязвимость</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    78% доходов зависят от одного канала финансирования. 
                    Любое изменение в программе «Пушкинская карта» приведёт к 
                    <span className="text-red-400 font-medium"> потере 50-60% доходов</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[hsl(45,90%,55%)]/10">
                  <TrendingUp className="w-6 h-6 text-[hsl(45,90%,55%)]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Гастрольный потенциал</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Ансамбль «Дальний Восток» — лидер по гастрольной выручке: 
                    <span className="text-[hsl(45,90%,55%)] font-medium"> 2.07 млн ₽ в месяц</span>, 
                    что в 2.3 раза превышает стационарную выручку.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-orange-500/10">
                  <TrendingDown className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Парадокс перегрузки</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Коллективы проводят 36% концертов в низкомаржинальном формате (выездные), 
                    в то время как высокомаржинальный стационар составляет лишь 21%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Format Analysis */}
        <div className="p-8 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)]">
          <h3 className="text-xl font-semibold text-white mb-6">Сравнительная рентабельность форматов</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={formatByFormatData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,20%)" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(220,10%,60%)" 
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis 
                  stroke="hsl(220,10%,60%)" 
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(220,20%,12%)', 
                    border: '1px solid hsl(220,15%,20%)',
                    borderRadius: '8px'
                  }}
                  labelStyle={{ color: 'white' }}
                />
                <Bar dataKey="profitability" fill="hsl(45,90%,55%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {formatByFormatData.map((item, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-[hsl(220,15%,18%)]">
                <p className="text-2xl font-bold text-white">{item.profitability}%</p>
                <p className="text-xs text-gray-400 mt-1">{item.name}</p>
                <p className="text-xs text-[hsl(45,90%,55%)]">{item.revenue.toLocaleString()} ₽/концерт</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
