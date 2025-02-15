import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const colorPalettes = [
  {
    id: "vibrant",
    name: "Vibrant",
    colors: ["#FF4D4D", "#4DFF4D", "#4D4DFF", "#FF4DFF", "#FFFF4D"],
  },
  {
    id: "ocean",
    name: "Ocean",
    colors: ["#001F3F", "#003F7F", "#0059B3", "#0073E6", "#1A8CFF"],
  },
  {
    id: "sunset",
    name: "Sunset",
    colors: ["#FF6B6B", "#FF8E6B", "#FFB16B", "#FFD46B", "#FFF76B"],
  },
  {
    id: "forest",
    name: "Forest",
    colors: ["#2D5A27", "#367F31", "#3FA63B", "#48CC45", "#51F24E"],
  },
  {
    id: "earth",
    name: "Earth",
    colors: ["#8B4513", "#A0522D", "#B5734F", "#C99471", "#DEB597"],
  },
  {
    id: "royal",
    name: "Royal",
    colors: ["#4B0082", "#6600CC", "#8000FF", "#9933FF", "#B266FF"],
  },
];

export default function ColorPalette({ value, onChange, onNext, onBack }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Choose Your Color Palette
        </h1>
        <p className="text-muted-foreground">
          Pick the colors that reflect your brand&apos;s personality and create
          a lasting impression.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {colorPalettes.map((palette) => (
          <button
            key={palette.id}
            onClick={() => onChange(palette.id)}
            className={`group rounded-lg border p-4 transition-colors hover:bg-accent
              ${value === palette.id ? "border-primary" : "border-muted"}`}
          >
            <div className="mb-2 text-sm font-medium">{palette.name}</div>
            <div className="flex h-8 gap-1 rounded-md">
              {palette.colors.map((color, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
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
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
