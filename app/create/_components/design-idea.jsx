import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const designIdeas = [
  {
    id: "pilot-bear",
    name: "Pilot bear with a compass",
    description: "A cute bear character dressed as a pilot holding a compass",
  },
  {
    id: "chef-cat",
    name: "Chef cat holding a spoon",
    description: "A charming cat character in chef attire with a wooden spoon",
  },
  {
    id: "astronaut-dog",
    name: "Astronaut dog with a star",
    description: "An adventurous dog in a space suit with a glowing star",
  },
  {
    id: "gardener-rabbit",
    name: "Gardener rabbit holding a flower",
    description: "A gentle rabbit character with gardening tools and a flower",
  },
  {
    id: "magician-owl",
    name: "Magician owl with a wand",
    description: "A wise owl character in magician's attire with a magic wand",
  },
  {
    id: "ai-select",
    name: "Let AI select the best idea",
    description: "Our AI will analyze your brand and choose the perfect design",
  },
];

export default function DesignIdea({ value, onChange, onNext, onBack }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Select Your Design Idea
        </h1>
        <p className="text-muted-foreground">
          Choose a design style that aligns with your vision, or skip to receive
          a random suggestion.
        </p>
      </div>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-4">
        {designIdeas.map((idea) => (
          <div key={idea.id}>
            <RadioGroupItem
              value={idea.id}
              id={idea.id}
              className="peer hidden"
            />
            <Label
              htmlFor={idea.id}
              className="flex cursor-pointer items-start space-x-4 rounded-lg border p-4 hover:bg-accent peer-data-[state=checked]:border-primary"
            >
              {idea.id === "ai-select" ? (
                <Sparkles className="h-5 w-5 text-primary" />
              ) : (
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-primary">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                </div>
              )}
              <div className="space-y-1">
                <p className="font-medium leading-none">{idea.name}</p>
                <p className="text-sm text-muted-foreground">
                  {idea.description}
                </p>
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
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
