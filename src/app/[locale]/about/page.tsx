import AboutHero from "@/components/about/about-hero";
import Achievements from "@/components/about/achievements";
import BrandStory from "@/components/about/brand-story";
import MissionVision from "@/components/about/mission-vision";
import WhatWeSell from "@/components/about/what-we-sell";
import WorkspacePhotos from "@/components/about/workspace-photos";
import CtaBanner from "@/components/home/cta-banner";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <BrandStory/>
      <MissionVision/>
      <WhatWeSell/>
      <WhyChooseUs/>
      <WorkspacePhotos/>
      <Achievements/>
      <CtaBanner/>
    </main>
  );
}