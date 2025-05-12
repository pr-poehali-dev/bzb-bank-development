
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Carousel,
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';

// Данные отзывов
const testimonials = [
  {
    id: 1,
    name: 'Алексей Смирнов',
    position: 'Генеральный директор ООО "ОборонТех"',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    content: 'БЗР Банк предоставил нам оптимальное решение для работы с гособоронзаказом. Профессиональная команда, учитывающая все нюансы законодательства и специфику нашей деятельности. Особенно ценим оперативность принятия решений и качество обслуживания.',
    rating: 5
  },
  {
    id: 2,
    name: 'Елена Петрова',
    position: 'Финансовый директор АО "Концерн Радиоэлектроника"',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    content: 'Сотрудничаем с БЗР Банком более 5 лет. За это время банк зарекомендовал себя как надежный партнер в финансовой сфере. Нам особенно нравится индивидуальный подход к клиентам и понимание специфики работы предприятий оборонно-промышленного комплекса.',
    rating: 5
  },
  {
    id: 3,
    name: 'Игорь Васильев',
    position: 'Индивидуальный предприниматель',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    content: 'Изначально привлекли выгодные условия кредитования для малого бизнеса. После года работы могу с уверенностью сказать, что БЗР Банк предлагает действительно конкурентные условия и отличный сервис. Отдельная благодарность за оперативное решение всех вопросов.',
    rating: 4
  },
  {
    id: 4,
    name: 'Мария Соколова',
    position: 'Руководитель отдела закупок НПО "ТехноСистемы"',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    content: 'БЗР Банк предоставляет максимально комфортные условия для работы с гособоронзаказом. Отличная команда специалистов, которые помогают в решении даже самых сложных вопросов. Рекомендую данный банк всем предприятиям, работающим по ГОЗ.',
    rating: 5
  },
  {
    id: 5,
    name: 'Павел Козлов',
    position: 'Частный клиент',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    content: 'Пользуюсь услугами БЗР Банка для личных финансов уже больше 3 лет. Очень доволен условиями по вкладам и дебетовой карте. Отдельно хочу отметить удобное мобильное приложение и отзывчивую службу поддержки, которая всегда оперативно решает все вопросы.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мнение клиентов — главный показатель качества нашей работы. Мы гордимся доверием, которое нам оказывают предприятия оборонно-промышленного комплекса и частные клиенты.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <motion.div 
                    className="h-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                          <p className="text-xs text-gray-500 mt-1">{testimonial.position}</p>
                        </div>
                      </div>
                      <div className="text-primary">
                        <Icon name="Quote" className="h-6 w-6" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-5">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill={i < testimonial.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:flex mt-8 justify-center gap-2">
              <CarouselPrevious className="static translate-y-0 rounded-full" />
              <CarouselNext className="static translate-y-0 rounded-full" />
            </div>
          </Carousel>
        </div>
        
        {/* Статистика */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '97%', label: 'Довольных клиентов', icon: 'Heart' },
            { number: '15+', label: 'Лет опыта работы', icon: 'History' },
            { number: '250+', label: 'Корпоративных клиентов', icon: 'Building2' },
            { number: '24/7', label: 'Поддержка клиентов', icon: 'HeadsetMic' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-4 rounded-full bg-primary-light/20 mb-4">
                <Icon name={stat.icon} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary-dark mb-1">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
