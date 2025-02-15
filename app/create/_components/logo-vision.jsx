import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function LogoVision({ value, onChange, onNext, onBack }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Describe Your Logo Vision
        </h1>
        <p className="text-muted-foreground">
          Share your ideas, themes, or inspirations to create a logo that
          perfectly represents your brand or project.
        </p>
      </div>
      <div className="mx-auto max-w-lg space-y-4">
        <Textarea
          placeholder="Logo Description"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={6}
        />
        <div className="flex gap-4">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button className="flex-1" onClick={onNext} disabled={!value.trim()}>
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
