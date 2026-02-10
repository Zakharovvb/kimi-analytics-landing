import { Users, Calendar, MapPin, Plane } from 'lucide-react';

const WorkloadSection = () => {
  const collectives = [
    { name: 'ДВАСО', norm: 70, actual: 7, percentage: 121, type: 'Симфонический оркестр' },
    { name: '«Дальний Восток»', norm: 65, actual: 14, percentage: 259, type: 'Ансамбль песни и танца' },
    { name: 'ОРНИ', norm: 66, actual: 13, percentage: 236, type: 'Оркестр русских народных инструментов' },
    { name: '«Солисты»', norm: 164, actual: 15, percentage: 109, type: 'Камерный ансамбль' },
    { name: '«Геликон»', norm: 81, actual: 11, percentage: 162, type: 'Ансамбль баянов и аккордеонов' },
    { name: '«Глория»', norm: 98, actual: 10, percentage: 122, type: 'Камерный хор' }
  ];

  const concertStructure = [
    { format: 'Стационар коммерческий', count: 15, percentage: 21, avgRevenue: 132000, icon: Calendar },
    { format: 'Пушкинская карта', count: 8, percentage: 11, avgRevenue: 50000, icon: Users },
    { format: 'Выездные концерты', count: 26, percentage: 36, avgRevenue: 19000, icon: MapPin },
    { format: 'Гастроли', count: 23, percentage: 32, avgRevenue: 140000, icon: Plane }
  ];

  return (
    <section id="workload" className="py-24 relative bg-[hsl(220,20%,10%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[hsl(45,90%,55%)]/10">
              <Users className="w-6 h-6 text-[hsl(45,90%,55%)]" />
            </div>
            <span className="text-sm font-medium text-[hsl(45,90%,55%)] uppercase tracking-wider">Анализ нагрузки</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Реальная нагрузка штатных коллективов
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Штатные коллективы не недоиспользуются, а перегружены. 
            Первоначальная оценка «2-4 концерта/месяц» учитывала только коммерческий стационар, 
            игнорируя 82% деятельности.
          </p>
        </div>

        {/* Collectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {collectives.map((collective, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)] 
                         hover:border-[hsl(45,90%,55%)]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{collective.name}</h3>
                  <p className="text-sm text-gray-500">{collective.type}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                  collective.percentage >= 150 ? 'bg-orange-500/20 text-orange-400' :
                  collective.percentage >= 120 ? 'bg-[hsl(45,90%,55%)]/20 text-[hsl(45,90%,55%)]' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {collective.percentage}%
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Годовая норма</span>
                  <span className="text-white">{collective.norm} концертов</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Факт (март)</span>
                  <span className="text-white font-medium">{collective.actual} концертов</span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-2 bg-[hsl(220,15%,20%)] rounded-full overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
                      collective.percentage >= 150 ? 'bg-orange-500' :
                      collective.percentage >= 120 ? 'bg-[hsl(45,90%,55%)]' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${Math.min(collective.percentage, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Concert Structure */}
        <div className="p-8 rounded-2xl bg-[hsl(220,20%,12%)] border border-[hsl(220,15%,20%)]">
          <h3 className="text-xl font-semibold text-white mb-8">Структура концертов (март 2026)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {concertStructure.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[hsl(45,90%,55%)]/10">
                    <item.icon className="w-5 h-5 text-[hsl(45,90%,55%)]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{item.count}</p>
                    <p className="text-xs text-gray-500">концертов</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-300">{item.format}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-[hsl(220,15%,20%)] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[hsl(45,90%,55%)] rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-[hsl(45,90%,55%)] font-medium">{item.percentage}%</span>
                  </div>
                  <p className="text-xs text-gray-500">{item.avgRevenue.toLocaleString()} ₽/концерт</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[hsl(220,15%,20%)]">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">72</p>
              <p className="text-sm text-gray-400">Всего концертов в месяц</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[hsl(45,90%,55%)]">113 тыс ₽</p>
              <p className="text-sm text-gray-400">Средняя выручка/концерт</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">36%</p>
              <p className="text-sm text-gray-400">Низкомаржинальных выездов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkloadSection;
