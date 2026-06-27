import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ToolkitSection } from "@/components/home/ToolkitSection";
import { SelectedWork } from "@/components/home/SelectedWork";
import { TrajectorySection } from "@/components/home/TrajectorySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { JournalSection } from "@/components/home/JournalSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ToolkitSection />
        <SelectedWork />
        <TrajectorySection />
        <TestimonialsSection />
        <JournalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
