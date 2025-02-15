import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Wand2 } from "lucide-react";
import Image from "next/image";

const logoStyles = [
  {
    id: "cartoon",
    name: "Cartoon Logo",
    description: "Playful and fun cartoon-style logos",
    image: "/design_1.png",
  },
  {
    id: "app",
    name: "App Logo",
    description: "Modern and minimal app-style logos",
    image: "/design_2.png",
  },
  {
    id: "mascot",
    name: "Modern Mascot Logos",
    description: "Character-based mascot logos",
    image: "/design_3.png",
  },
  {
    id: "black-white",
    name: "Black And White Logos",
    description: "Clean and versatile monochrome logos",
    image: "/design_4.png",
  },
  {
    id: "minimalist",
    name: "Minimalist And Elegant Logos",
    description: "Simple and sophisticated designs",
    image: "/design_5.png",
  },
  {
    id: "vintage",
    name: "Vintage Custom Logos",
    description: "Classic and retro-inspired logos",
    image: "/design_6.png",
  },
];

export default function LogoStyle({ value, onChange, onNext, onBack }) {
  const handleGenerate = () => {
    // Handle logo generation
    console.log("Generating logo with:", value);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Choose Your Logo Style
        </h1>
        <p className="text-muted-foreground">
          Select the type of logo design that best represents your brand&apos;s
          unique identity.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {logoStyles.map((style) => (
          <button
            key={style.id}
            onClick={() => onChange(style.id)}
            className={`group space-y-2 rounded-lg border p-4 text-left transition-colors hover:bg-accent
              ${value === style.id ? "border-primary" : "border-muted"}`}
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={style.image || "/placeholder.svg"}
                alt={style.name}
                width={200}
                height={200}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium">{style.name}</h3>
              <p className="text-sm text-muted-foreground">
                {style.description}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button className="flex-1" onClick={onNext} disabled={!value}>
          Continue to Pricing
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
