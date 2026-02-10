import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="py-16 relative bg-[hsl(220,25%,6%)] border-t border-[hsl(220,15%,20%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Аналитика деятельности</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Экспертный анализ операционной и финансовой деятельности Хабаровской краевой филармонии. 
              Стратегические рекомендации по трансформации бизнес-модели.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-[hsl(45,90%,55%)]" />
              <span>Январь 2026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Разделы отчёта</h3>
            <ul className="space-y-2">
              {[
                { label: 'Финансовая архитектура', href: '#finance' },
                { label: 'Анализ нагрузки', href: '#workload' },
                { label: 'Стратегические рекомендации', href: '#recommendations' },
                { label: 'Финансовые прогнозы', href: '#forecast' },
                { label: 'Дорожная карта', href: '#roadmap' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[hsl(45,90%,55%)] transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[hsl(45,90%,55%)]" />
                <span>Хабаровск, ул. Шевчука, 18</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-[hsl(45,90%,55%)]" />
                <span>+7 (4212) 32-43-77</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-[hsl(45,90%,55%)]" />
                <span>filarmonia@khabkrai.ru</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[hsl(220,15%,20%)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Хабаровская краевая филармония. Все права защищены.
          </p>
          <p className="text-sm text-gray-500">
            Экспертно-аналитический центр
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
