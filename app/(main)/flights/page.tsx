import HeroSection from "@/components/pages/home/HeroSection";
import PriceCalender from "@/components/template/priceCalender/PriceCalender";
import Container from "@/components/ui/Container";
import FlightFilters from "@/components/ui/FlightFilter";

function FlightsPage() {
  return (
    <>
      <HeroSection />
      <Container>
        <div className="mt-30 flex flex-row justify-between">
          <div>
            <FlightFilters />
          </div>
          <div>
            <PriceCalender />
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
}

export default FlightsPage;
