
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import QrCodeSection from '@/components/QrCodeSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Добавление анимации при прокрутке страницы
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.8) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверка при первой загрузке
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <QrCodeSection />
      </main>
      
      <Footer />
      
      {/* Кнопка "Наверх" */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-all hover:shadow-xl z-50"
        aria-label="Вернуться наверх"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </a>
    </div>
  );
};

export default Index;
