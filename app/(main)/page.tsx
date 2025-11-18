import FAQSection from "@/components/pages/home/F&QSection";
import HeroSection from "@/components/pages/home/HeroSection";
import ImageGallery from "@/components/pages/home/ImageGallory";
import SearchHistory from "@/components/pages/home/SearchHistory";
import Container from "@/components/ui/Container";
import Features from "@/components/pages/home/Features";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container>
        <SearchHistory />
        <ImageGallery />
        <FAQSection />
      </Container>
      <Features />
    </>
  );
}
