import Icon from "@/components/ui/icon";
import { Button } from "./ui/button";

const services = [
  {
    id: "defense",
    title: "Гособоронзаказ",
    description:
      "Специализированные финансовые решения для предприятий, работающих в сфере гособоронзаказа с учетом всех требований законодательства и безопасности.",
    icon: "Shield",
    color: "text-primary-dark",
    items: [
      "Сопровождение контрактов ГОЗ",
      "Банковские гарантии",
      "Целевое финансирование",
      "Мониторинг и контроль целевых счетов",
    ],
  },
  {
    id: "business",
    title: "Бизнесу",
    description:
      "Комплексное банковское обслуживание для компаний любого масштаба с индивидуальным подходом и льготными условиями.",
    icon: "Briefcase",
    color: "text-blue-500",
    items: [
      "Расчетно-кассовое обслуживание",
      "Кредитование бизнеса",
      "Зарплатные проекты",
      "Валютный контроль",
    ],
  },
  {
    id: "personal",
    title: "Частным лицам",
    description:
      "Выгодные условия обслуживания для физических лиц с широким спектром банковских продуктов и сервисов.",
    icon: "User",
    color: "text-teal-500",
    items: [
      "Вклады с повышенной доходностью",
      "Потребительские кредиты",
      "Ипотечные программы",
      "Дебетовые и кредитные карты",
    ],
  },
  {
    id: "investments",
    title: "Инвестиции",
    description:
      "Инвестиционные возможности с различными инструментами для сохранения и преумножения капитала.",
    icon: "TrendingUp",
    color: "text-green-500",
    items: [
      "Инвестиционные счета",
      "Брокерское обслуживание",
      "Облигации и акции",
      "Структурные продукты",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-6">
            Комплексные финансовые решения
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            БЗР Банк предлагает полный спектр банковских услуг, специализируясь
            на обслуживании государственных оборонных заказов и обеспечивая
            выгодные условия для всех клиентов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div
                className={`inline-flex p-3 rounded-lg ${service.id === "defense" ? "bg-primary-light/20" : "bg-blue-100"} mb-5`}
              >
                <Icon
                  name={service.icon}
                  className={`h-8 w-8 ${service.color}`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5 text-sm">
                {service.description}
              </p>
              <ul className="space-y-2 mb-5">
                {service.items.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Icon
                      name="CheckCircle"
                      className="h-4 w-4 text-primary mr-2 mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className="text-primary hover:text-primary-dark hover:bg-primary-light/10 p-0 mt-2"
              >
                <span>Подробнее</span>
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Дополнительный информационный блок */}
        <div className="mt-20 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-primary p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Специальное предложение
              </h3>
              <p className="mb-6 opacity-90">
                Для предприятий оборонно-промышленного комплекса мы предлагаем
                особые условия обслуживания с учетом специфики работы с
                гособоронзаказом.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Получить консультацию
              </Button>
            </div>
            <div className="lg:col-span-2 p-8">
              <h4 className="text-xl font-semibold mb-4">Почему БЗР Банк?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Icon name="Shield" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Государственная защита</h5>
                    <p className="text-sm text-gray-600">
                      Гарантия сохранности средств и соблюдения государственных
                      интересов
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Icon name="Lock" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Безопасность данных</h5>
                    <p className="text-sm text-gray-600">
                      Современные технологии защиты и шифрования информации
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Icon name="Cpu" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Передовые технологии</h5>
                    <p className="text-sm text-gray-600">
                      Современные цифровые решения для эффективного управления
                      финансами
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Icon name="Users" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Персональный подход</h5>
                    <p className="text-sm text-gray-600">
                      Индивидуальное обслуживание и решения под ваши задачи
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
