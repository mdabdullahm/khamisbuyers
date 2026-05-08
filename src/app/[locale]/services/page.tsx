import CtaBanner from "@/components/home/cta-banner";
import FeaturedService from "@/components/services/featured-service";
import MainServicesGrid from "@/components/services/main-services-grid";
import ProductGallery from "@/components/services/product-gallery";
import ServicesFAQ from "@/components/services/services-faq";
import ServicesHero from "@/components/services/services-hero";
import ServicesWhyChoose from "@/components/services/services-why-choose";
import WorkProcess from "@/components/services/work-process";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <MainServicesGrid/>
      <FeaturedService/>
      <WorkProcess/>
      <ServicesWhyChoose/>
      <ProductGallery/>
      <ServicesFAQ/>
      <CtaBanner/>
    </main>
  );
}