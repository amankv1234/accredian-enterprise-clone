import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import CourseSection from "@/components/sections/course-section";
import Stats from "@/components/sections/stats";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq-section";
import CTA from "@/components/sections/cta";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { BackToTop } from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <CourseSection />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <CTA />
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </main>
  );
}
