
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Отслеживание скролла для изменения стиля хедера
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Логотип */}
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <div className="text-primary-dark font-heading font-bold text-2xl">БЗР</div>
            <div className="w-2 h-2 rounded-full bg-primary-light mx-1 animate-pulse-light"></div>
            <div className="text-primary font-heading font-semibold text-lg">БАНК</div>
          </div>
          <div className="hidden md:block text-xs text-gray-500 border-l-2 border-gray-200 pl-2 ml-2">
            Банк защиты и развития
          </div>
        </div>

        {/* Десктопное меню */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground bg-transparent hover:bg-transparent hover:text-primary">
                  Услуги
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                    <MenuLink title="Гособоронзаказ" icon="Shield" href="#services" />
                    <MenuLink title="Бизнесу" icon="Briefcase" href="#services" />
                    <MenuLink title="Частным лицам" icon="User" href="#services" />
                    <MenuLink title="Инвестиции" icon="TrendingUp" href="#services" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-foreground transition-colors hover:text-primary"
                  href="#about"
                >
                  О банке
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-foreground transition-colors hover:text-primary"
                  href="#testimonials"
                >
                  Отзывы
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-foreground transition-colors hover:text-primary"
                  href="#contacts"
                >
                  Контакты
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button className="bg-primary hover:bg-primary-dark text-white px-6 rounded-full">
            <Icon name="PhoneCall" className="w-4 h-4 mr-2" />
            Связаться с нами
          </Button>
        </div>

        {/* Мобильное меню */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="mt-6 flex flex-col space-y-4">
                <div className="flex flex-col space-y-3 mb-6">
                  <div className="text-lg font-semibold text-primary">Услуги</div>
                  <MobileMenuLink title="Гособоронзаказ" icon="Shield" href="#services" />
                  <MobileMenuLink title="Бизнесу" icon="Briefcase" href="#services" />
                  <MobileMenuLink title="Частным лицам" icon="User" href="#services" />
                  <MobileMenuLink title="Инвестиции" icon="TrendingUp" href="#services" />
                </div>
                <MobileMenuLink title="О банке" icon="Building" href="#about" />
                <MobileMenuLink title="Отзывы" icon="Star" href="#testimonials" />
                <MobileMenuLink title="Контакты" icon="MapPin" href="#contacts" />
                <Button className="bg-primary hover:bg-primary-dark text-white w-full mt-4">
                  <Icon name="PhoneCall" className="w-4 h-4 mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

// Компонент ссылки для десктопного меню
const MenuLink = ({ title, icon, href }: { title: string, icon: string, href: string }) => (
  <a
    href={href}
    className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-light/20 mr-3">
      <Icon name={icon} className="h-6 w-6 text-primary" />
    </div>
    <div>
      <div className="text-sm font-medium">{title}</div>
    </div>
  </a>
);

// Компонент ссылки для мобильного меню
const MobileMenuLink = ({ title, icon, href }: { title: string, icon: string, href: string }) => (
  <a
    href={href}
    className="flex items-center space-x-3 rounded-lg hover:bg-muted p-2 transition-colors"
  >
    <Icon name={icon} className="h-5 w-5 text-primary" />
    <span>{title}</span>
  </a>
);

export default Header;
