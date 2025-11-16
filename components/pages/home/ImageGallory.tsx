import Image from "next/image";

export default function ImageGallery() {
  return (
    <section className="mt-12">
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
        <div className="relative min-h-[400px] sm:min-h-[500px] lg:col-span-4">
          <Image
            src="/img/Home-pictures.png"
            alt="تصویر اول"
            fill
            className="rounded-2xl object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="relative min-h-[400px] sm:min-h-[500px] lg:col-span-4">
          <Image
            src="/img/Home-pictures.png"
            alt="تصویر دوم"
            fill
            className="rounded-2xl object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="grid grid-rows-2 gap-4 lg:col-span-4">
          <div className="relative min-h-60">
            <Image
              src="/img/Home-pictures.png"
              alt="تصویر سوم"
              fill
              className="rounded-2xl object-cover"
              sizes="33vw"
            />
          </div>
          <div className="relative min-h-60">
            <Image
              src="/img/Home-pictures.png"
              alt="تصویر چهارم"
              fill
              className="rounded-2xl object-cover"
              sizes="33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
