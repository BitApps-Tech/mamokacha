import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandEcosystem from "@/components/BrandEcosystem";
import StorySection from "@/components/StorySection";
import MenuPreview from "@/components/MenuPreview";
import EventsSection from "@/components/EventsSection";
import OriginMap from "@/components/OriginMap";
import RoastingSection from "@/components/RoastingSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* Stacks above fixed hero video so white sections scroll up and mask the video from the bottom */}
      <div className="relative z-10">
        <FeaturedProducts />
        <BrandEcosystem />
        <StorySection />
        <MenuPreview />
        <EventsSection />
        <OriginMap />
        <RoastingSection />
        <SubscriptionSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
