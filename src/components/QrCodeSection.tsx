
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

const QrCodeSection = () => {
  // URL для QR-кода (позже можно будет заменить на реальный URL сайта)
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://bzr-bank.ru";
  
  return (
    <section className="bg-gradient-to-b from-secondary to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Левая часть с QR-кодом */}
            <div className="p-8 md:p-12 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src={qrCodeUrl} 
                  alt="QR-код БЗР Банка" 
                  className="w-48 h-48 md:w-64 md:h-64 mb-6 rounded-lg shadow-md"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="text-primary-dark font-heading font-bold text-xl">БЗР</div>
                  <div className="w-1 h-1 rounded-full bg-primary-light mx-1"></div>
                  <div className="text-primary font-heading font-semibold text-lg">БАНК</div>
                </div>
              </motion.div>
              
              <h3 className="text-xl font-semibold text-center mb-4">
                Отсканируйте QR-код
              </h3>
              <p className="text-gray-600 text-center text-sm mb-6">
                для быстрого доступа к нашему сайту и мобильному приложению
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="rounded-full border-gray-300">
                  <Icon name="Smartphone" className="h-4 w-4 mr-2" />
                  App Store
                </Button>
                <Button variant="outline" size="sm" className="rounded-full border-gray-300">
                  <Icon name="Smartphone" className="h-4 w-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
            
            {/* Правая часть с информацией */}
            <div className="bg-primary text-white p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Будьте всегда на связи с БЗР Банком
              </h2>
              <p className="opacity-90 mb-8">
                Скачайте наше мобильное приложение или отсканируйте QR-код для быстрого доступа ко всем услугам банка. Управляйте своими финансами в любое время и в любом месте.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Icon name="Smartphone" className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Мобильное приложение</h4>
                    <p className="text-sm opacity-80">Доступ к счетам и операциям 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Icon name="ShieldCheck" className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Безопасность</h4>
                    <p className="text-sm opacity-80">Защищенный доступ к личному кабинету</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Icon name="Bell" className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Уведомления</h4>
                    <p className="text-sm opacity-80">Мгновенные оповещения о транзакциях</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button className="bg-white text-primary hover:bg-gray-100 rounded-full">
                  <Icon name="Download" className="h-4 w-4 mr-2" />
                  Скачать приложение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QrCodeSection;
