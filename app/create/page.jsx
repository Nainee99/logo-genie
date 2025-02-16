"use client";

import { useEffect } from "react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import LogoTitle from "./_components/logo-title";
import LogoVision from "./_components/logo-vision";
import ColorPalette from "./_components/color-palette";
import DesignIdea from "./_components/design-idea";
import LogoStyle from "./_components/logo-style";
import StepIndicator from "./_components/step-indicator";
import PricingPlan from "./_components/pricing-plan";

const steps = [
  { id: 1, name: "Logo Title" },
  { id: 2, name: "Logo Vision" },
  { id: 3, name: "Color Palette" },
  { id: 4, name: "Design Idea" },
  { id: 5, name: "Logo Style" },
  { id: 6, name: "Pricing" },
];

const STORAGE_KEY = "logogenie_form_data";

export default function CreatePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    vision: "",
    colorPalette: "",
    designIdea: "",
    logoStyle: "",
    plan: "",
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);

        // ✅ Only set step after data is properly loaded
        const lastStep =
          Object.values(parsedData).findIndex((value) => !value) + 1;
        setCurrentStep(lastStep || 1);

        console.log("Restored data:", parsedData);
      }
    }
  }, []);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const updateFormData = (field, value) => {
    const newFormData = {
      ...formData,
      [field]: value,
    };
    setFormData(newFormData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFormData));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <LogoTitle
            value={formData.title}
            onChange={(value) => updateFormData("title", value)}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <LogoVision
            value={formData.vision}
            onChange={(value) => updateFormData("vision", value)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <ColorPalette
            value={formData.colorPalette}
            onChange={(value) => updateFormData("colorPalette", value)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <DesignIdea
            value={formData.designIdea}
            onChange={(value) => updateFormData("designIdea", value)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 5:
        return (
          <LogoStyle
            value={formData.logoStyle}
            onChange={(value) => updateFormData("logoStyle", value)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 6:
        return (
          <PricingPlan
            value={formData.plan}
            onChange={(value) => updateFormData("plan", value)}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container max-w-4xl">
        <StepIndicator steps={steps} currentStep={currentStep} />
        <Card className="mt-8 p-8">{renderStep()}</Card>
      </div>
    </div>
  );
}
