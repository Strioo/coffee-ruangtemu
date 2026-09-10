import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedMenuSection } from "@/components/sections/FeaturedMenuSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { WorkspaceSection } from "@/components/sections/WorkspaceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedMenuSection />
      <WorkspaceSection />
      <ExperienceSection />
      <GallerySection />
      <LocationSection />
      <FinalCtaSection />
    </>
  );
}
