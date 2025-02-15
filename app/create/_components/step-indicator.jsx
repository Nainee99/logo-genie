export default function StepIndicator({ steps, currentStep }) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>
      <div className="relative z-10 flex justify-between">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold
              ${
                step.id <= currentStep
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted bg-background text-muted-foreground"
              }`}
          >
            {step.id}
          </div>
        ))}
      </div>
    </div>
  );
}
