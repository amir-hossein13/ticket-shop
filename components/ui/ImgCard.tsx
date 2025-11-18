import Image from "next/image";
import { Button } from "./button";
interface CardProps {
  title: string;
  subtitle: string;
  imgSrc: string;
}
function ImgCard({ title, subtitle, imgSrc }: CardProps) {
  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-xl shadow-lg sm:w-[300px]">
      <Image src={imgSrc} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <Button className="mt-2 rounded-lg bg-white p-1 text-sm text-black">
          {subtitle}
        </Button>
      </div>
    </div>
  );
}

export default ImgCard;
