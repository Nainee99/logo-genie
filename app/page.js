import Hero from "./_components/hero";
import Features from "./_components/features";
import Examples from "./_components/examples";
import Pricing from "./_components/pricing";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <Examples />
        <Pricing />
      </main>
    </div>
  );
}
