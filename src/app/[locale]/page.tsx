import AboutBrand from "@/components/home/about-brand";
import BestSelling from "@/components/home/best-selling";
import Categories from "@/components/home/categories";
import Contact from "@/components/home/contact";
import CtaBanner from "@/components/home/cta-banner";
import FAQ from "@/components/home/faq";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Portfolio from "@/components/home/portfolio";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Features/>
      <Categories/>
      <AboutBrand/>
      <WhyChooseUs/>
      <BestSelling/>
      <Portfolio/>
      <Testimonials/>
      <FAQ/>
      <CtaBanner/>
      <Contact/>
    </div>
  );
}
