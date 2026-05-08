import ContactFAQ from "@/components/contact/contact-faq";
import ContactForm from "@/components/contact/contact-form";
import ContactHero from "@/components/contact/contact-hero";
import ContactMethods from "@/components/contact/contact-methods";
import GoogleMapSection from "@/components/contact/google-map";
import SellProductCTA from "@/components/contact/sell-product-cta";
import WorkingHours from "@/components/contact/working-hours";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactMethods/>
      <ContactForm/>
      <SellProductCTA/>
      <GoogleMapSection/>
      <WorkingHours/>
      <ContactFAQ/>
    </main>
  );
}