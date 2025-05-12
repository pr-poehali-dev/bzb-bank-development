
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Колонка с информацией о банке */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-white font-heading font-bold text-2xl">БЗР</div>
              <div className="w-2 h-2 rounded-full bg-primary-light mx-1"></div>
              <div className="text-primary-light font-heading font-semibold text-lg">БАНК</div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Банк защиты и развития — надежный финансовый партнер для предприятий оборонно-промышленного комплекса и частных клиентов.
            </p>
            <div className="flex space-x-3 mb-6">
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
            </div>
            <Badge variant="outline" className="text-primary-light border-primary-light px-3 py-1">
              Лицензия ЦБ РФ №2345
            </Badge>
          </div>
          
          {/* Колонка с ссылками на услуги */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Услуги</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-light transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" className="h-4 w-4 mr-2" />
                  Гособоронзаказ
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-light transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" className="h-4 w-4 mr-2" />
                  Бизнесу
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-light transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" className="h-4 w-4 mr-2" />
                  Частным лицам
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-light transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" className="h-4 w-4 mr-2" />
                  Инвестиции
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-light transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" className="h-4 w-4 mr-2" />
                  Банковские гарантии
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-light transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" className="h-4 w-4 mr-2" />
                  Кредитование
                </a>
              </li>
            </ul>
          </div>
          
          {/* Колонка с контактами */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 text-primary-light mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123456, г. Москва, ул. Ленина, д. 123, стр. 1
                </span>
              </li>
              <li className="flex items-start">
                <Icon name="Phone" className="h-5 w-5 text-primary-light mr-3 mt-0.5" />
                <div>
                  <div className="text-white">8 (800) 123-45-67</div>
                  <div className="text-gray-400 text-sm">Круглосуточно, без выходных</div>
                </div>
              </li>
              <li className="flex items-start">
                <Icon name="Mail" className="h-5 w-5 text-primary-light mr-3 mt-0.5" />
                <span className="text-gray-400">
                  info@bzr-bank.ru
                </span>
              </li>
              <li className="flex items-start">
                <Icon name="Clock" className="h-5 w-5 text-primary-light mr-3 mt-0.5" />
                <div>
                  <div className="text-white">График работы офисов:</div>
                  <div className="text-gray-400 text-sm">Пн-Пт: 9:00 - 20:00</div>
                  <div className="text-gray-400 text-sm">Сб: 10:00 - 17:00</div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Колонка с подпиской */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Будьте в курсе новостей</h4>
            <p className="text-gray-400 text-sm mb-4">
              Подпишитесь на нашу рассылку, чтобы получать важные новости и специальные предложения.
            </p>
            <div className="flex space-x-2 mb-6">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-gray-800 border-gray-700 rounded-full focus:border-primary-light"
              />
              <Button className="bg-primary hover:bg-primary-dark rounded-full">
                <Icon name="Send" className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Icon name="Shield" className="h-4 w-4 text-primary-light" />
              <span>Ваши данные надежно защищены</span>
            </div>
          </div>
        </div>
        
        {/* Нижняя часть футера */}
        <div className="pt-8 border-t border-gray-800 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 БЗР Банк (АО). Все права защищены.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-light transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary-light transition-colors">Условия использования</a>
              <a href="#" className="hover:text-primary-light transition-colors">Карта сайта</a>
              <a href="#" className="hover:text-primary-light transition-colors">Раскрытие информации</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
