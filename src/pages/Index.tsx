
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Target, ArrowRight } from "lucide-react";
import heroImage from "@/assets/gaming-hero.jpg";

const Index = () => {
  const pricingPlans = [
    {
      name: "Базовый",
      price: "₽299",
      description: "Для начинающих игроков",
      features: [
        "Базовые игровые утилиты",
        "Анализ статистики",
        "Поддержка 24/7",
        "1 профиль игрока",
        "Стандартные настройки"
      ],
      buttonVariant: "outline" as const
    },
    {
      name: "Про",
      price: "₽599",
      description: "Для опытных геймеров",
      popular: true,
      features: [
        "Все функции Базового",
        "Расширенная аналитика",
        "Автоматизация действий",
        "До 5 профилей",
        "Кастомные настройки",
        "Приоритетная поддержка",
        "Бета-доступ к новым функциям"
      ],
      buttonVariant: "premium" as const
    },
    {
      name: "Элит",
      price: "₽999",
      description: "Для профессиональных киберспортсменов",
      features: [
        "Все функции Про",
        "AI-анализ геймплея",
        "Персональный тренер",
        "Неограниченные профили",
        "Премиум виджеты",
        "Выделенная поддержка",
        "Эксклюзивные функции",
        "Интеграция со стримингом"
      ],
      buttonVariant: "secondary" as const
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Безопасность",
      description: "Надежная защита ваших игровых данных"
    },
    {
      icon: Zap,
      title: "Быстродействие", 
      description: "Молниеносная скорость работы утилит"
    },
    {
      icon: Target,
      title: "Точность",
      description: "Высокоточный анализ и оптимизация"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Gaming utilities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            GameTools Pro
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Профессиональные утилиты для геймеров. Анализируй, оптимизируй и доминируй в любой игре
          </p>
          <Button variant="premium" size="lg" className="text-lg px-8 py-4" asChild>
            <a href="#">
              Начать использовать
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center border-border hover:border-primary/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Выберите свой тариф
            </h2>
            <p className="text-xl text-muted-foreground">
              Подберите план, который подходит именно вам
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-to-br from-card via-card to-primary/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Готовы поднять свой геймплей на новый уровень?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Присоединяйтесь к тысячам игроков, которые уже используют наши инструменты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" asChild>
                <a href="#">Попробовать бесплатно</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#">Узнать больше</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
