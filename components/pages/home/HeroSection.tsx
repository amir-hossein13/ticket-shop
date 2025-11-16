import FlightSearch from "@/components/template/flightSearch/FlightSearch";
import Image from "next/image";

export default function HeroSection() {
  return (
    /* 1. Full-width wrapper – escapes any parent container */
    <section>
      {/* 2. Height responsive */}
      <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Full-cover image */}
        <Image
          src="/img/home-page.png"
          alt="صفحه اصلی"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* 3. Search box – centered inside the full-width area */}
        <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-12 md:pb-16">
          <div className="w-full max-w-7xl translate-y-[30%] px-4 sm:translate-y-[40%] sm:px-6 md:translate-y-[50%] lg:px-8">
            <FlightSearch />
          </div>
        </div>
      </div>
    </section>
  );
}
