import { Wand2, Palette, Zap, Clock, Cloud, Lock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Wand2 className="h-10 w-10 text-primary" />,
      title: "AI-Powered Generation",
      description:
        "Advanced AI algorithms create unique and professional logos tailored to your brand.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Customizable Designs",
      description:
        "Fine-tune colors, fonts, and layouts to match your brand's identity perfectly.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Instant Results",
      description:
        "Generate multiple logo options in seconds, not hours or days.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "24/7 Availability",
      description: "Create logos whenever inspiration strikes, day or night.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud Storage",
      description:
        "Access your logos anywhere, with secure cloud storage and backup.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Commercial Rights",
      description:
        "Full ownership and commercial usage rights for all generated logos.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Everything you need to create the perfect logo for your brand
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 space-y-4 bg-background rounded-lg border"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
