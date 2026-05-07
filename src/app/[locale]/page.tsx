import AboutBrand from "@/components/home/about-brand";
import BestSelling from "@/components/home/best-selling";
import Categories from "@/components/home/categories";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
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
    </div>
  );
}
