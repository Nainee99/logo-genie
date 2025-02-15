import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out LogoGenie",
    price: "Free",
    features: [
      "Generate unlimited logos for free",
      "Longer wait times",
      "Wait time: 30 seconds to 3 minutes",
      "Limited Design Options and Quality",
    ],
    buttonText: "Generate Free",
    buttonVariant: "outline",
  },
  {
    name: "Premium",
    description: "Faster generation with premium features",
    price: "$2.99",
    interval: "per month",
    features: [
      "Generate unlimited logos",
      "Shorter wait times",
      "Wait time: Less than 10 seconds",
      "Full Design Options and Quality",
    ],
    buttonText: "Choose Premium",
    buttonVariant: "default",
  },
];

export default function PricingPlan({ value, onChange, onBack }) {
  const handleSubmit = (plan) => {
    onChange(plan);
    // Clear stored data after completing the form
    localStorage.removeItem("logogenie_form_data");
    // Handle subscription or free generation
    console.log("Selected plan:", plan);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Choose Your Plan
        </h1>
        <p className="text-muted-foreground">
          Select a plan that suits your needs and start generating amazing logos
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative overflow-hidden ${
              plan.name === "Premium" && "border-primary bg-primary/5"
            }`}
          >
            {plan.name === "Premium" && (
              <div className="absolute right-4 top-4 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">
                {plan.price}
                {plan.interval && (
                  <span className="text-sm font-normal text-muted-foreground">
                    /{plan.interval}
                  </span>
                )}
              </div>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={plan.buttonVariant}
                className="relative w-full"
                onClick={() => handleSubmit(plan.name.toLowerCase())}
              >
                {plan.name === "Premium" && (
                  <Zap className="mr-2 h-4 w-4 text-primary-foreground" />
                )}
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
    </div>
  );
}
