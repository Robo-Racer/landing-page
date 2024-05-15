import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}
