import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out LogoGenie",
      features: [
        "3 logo designs per month",
        "Basic customization",
        "Standard quality export",
        "Community support",
      ],
    },
    {
      name: "Pro",
      price: "$19",
      description: "Best for professionals and small businesses",
      features: [
        "Unlimited logo designs",
        "Advanced customization",
        "High quality export",
        "Priority support",
        "Commercial usage rights",
        "Logo variations",
      ],
    },
    {
      name: "Enterprise",
      price: "$49",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "API access",
        "Custom branding",
        "Team collaboration",
        "Dedicated support",
        "Brand guidelines export",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple Pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-8 bg-background rounded-lg border"
            >
              <div className="space-y-2">
                <h3 className="font-bold text-2xl">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={index === 1 ? "default" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
