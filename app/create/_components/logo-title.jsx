import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LogoTitle({ value, onChange, onNext }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Logo Title</h1>
        <p className="text-muted-foreground">
          Add Your Business, App, or Website Name for a Custom Logo
        </p>
      </div>
      <div className="mx-auto max-w-lg space-y-4">
        <Input
          placeholder="Logo Title"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button className="w-full" onClick={onNext} disabled={!value.trim()}>
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
