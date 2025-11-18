import FlightSearch from "@/components/template/flightSearch/FlightSearch";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/img/home-page.png"
          alt="صفحه اصلی"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-12 md:pb-16">
          <Link
            href="/flights"
            className="w-full translate-y-[30%] px-4 sm:translate-y-[40%] sm:px-6 md:translate-y-[50%] lg:px-8"
          >
            <FlightSearch />
          </Link>
        </div>
      </div>
    </section>
  );
}
