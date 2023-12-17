import Image from "next/image";

import HeroSection from "@/components/hero-section";
export default function Home() {
  return (
    <main>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-start justify-center text-center">
      <HeroSection />
      </div>
    </main>
  );
}
