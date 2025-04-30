
import React from "react";
import Header from "@/components/Header";
import StepsSection from "@/components/StepsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesList from "@/components/FeaturesList";
import DemoSection from "@/components/DemoSection";
import BotImage from "@/components/BotImage";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-darker text-foreground">
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.05),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <BotImage />
        {/* CentralVisual component removed */}
        <FeaturesList />
        <StepsSection />
        <DemoSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
