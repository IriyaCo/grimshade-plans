import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonVariant?: "default" | "secondary" | "premium" | "outline" | "ghost" | "link" | "destructive";
}

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <Card className={`relative p-8 transition-all duration-300 hover:scale-105 ${
      plan.popular 
        ? "border-primary shadow-glow bg-gradient-to-br from-card via-card to-primary/5" 
        : "border-border hover:border-primary/50"
    }`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
            Популярный
          </span>
        </div>
      )}
      
      <div className="text-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
          <p className="text-muted-foreground">{plan.description}</p>
        </div>
        
        <div className="py-4">
          <span className="text-4xl font-bold text-primary">{plan.price}</span>
          <span className="text-muted-foreground ml-2">/месяц</span>
        </div>
        
        <ul className="space-y-3 text-left">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant={plan.buttonVariant || "default"}
          className="w-full"
          size="lg"
        >
          Выбрать план
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;