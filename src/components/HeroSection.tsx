
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-light/5 to-white overflow-hidden pt-20">
      <div className="container mx-auto px-4 pt-10 pb-20 lg:min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className="order-2 lg:order-1 z-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-primary-dark leading-tight">
              Доверие и партнерство —<br />
              <span className="text-primary">ключ к успеху</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              БЗР Банк специализируется на работе с организациями, выполняющими государственные оборонные заказы, предлагая надежные финансовые решения и выгодные условия для всех клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center justify-center" size="lg">
                <Icon name="FileText" className="mr-2 h-5 w-5" />
                Узнать больше
              </Button>
              <Button variant="outline" className="btn-outline" size="lg">
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Запись на консультацию
              </Button>
            </div>
            
            {/* Преимущества */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-primary-light/20 p-2 rounded-lg">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Защита и безопасность</h3>
                  <p className="text-xs text-gray-500">Государственная гарантия надежности</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-primary-light/20 p-2 rounded-lg">
                  <Icon name="BadgePercent" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Выгодные ставки</h3>
                  <p className="text-xs text-gray-500">Специальные условия для всех клиентов</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-primary-light/20 p-2 rounded-lg">
                  <Icon name="BarChart" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Государственные контракты</h3>
                  <p className="text-xs text-gray-500">Специализация на гособоронзаказе</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-primary-light/20 p-2 rounded-lg">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Быстрое обслуживание</h3>
                  <p className="text-xs text-gray-500">Оперативное решение финансовых вопросов</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Правая колонка с изображением и анимацией */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="relative z-10 w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  className="rounded-xl shadow-xl relative z-10 w-full" 
                  alt="БЗР Банк - надежный финансовый партнер"
                />
              </motion.div>
              
              {/* Декоративные элементы */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl -z-10"></div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-primary p-4 rounded-lg shadow-lg text-white flex items-center space-x-3 z-20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Icon name="ShieldCheck" className="h-8 w-8" />
                <div>
                  <p className="text-xs font-semibold">Государственная защита</p>
                  <p className="text-xs opacity-80">100% гарантия надежности</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3 z-20"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Icon name="TrendingUp" className="h-6 w-6 text-green-500" />
                <div>
                  <p className="text-xs font-semibold">Рост показателей</p>
                  <p className="text-xs text-gray-500">На 27% в 2024 году</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Волнистый разделитель */}
      <div className="wave-divider absolute bottom-0 left-0 w-full"></div>
    </section>
  );
};

export default HeroSection;
