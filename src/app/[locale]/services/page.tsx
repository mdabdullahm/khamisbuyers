import FeaturedService from "@/components/services/featured-service";
import MainServicesGrid from "@/components/services/main-services-grid";
import ServicesHero from "@/components/services/services-hero";
import WorkProcess from "@/components/services/work-process";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <MainServicesGrid/>
      <FeaturedService/>
      <WorkProcess/>
    </main>
  );
}