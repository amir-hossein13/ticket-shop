import { Pencil, Globe, Headphones, Monitor } from "lucide-react";

function Features() {
  const items = [
    {
      icon: <Pencil className="h-8 w-8 text-sky-600" />,
      title: "کمترین نرخ خرید بلیط",
    },
    {
      icon: <Globe className="h-8 w-8 text-sky-600" />,
      title: "خدمات آنلاین",
    },
    {
      icon: <Headphones className="h-8 w-8 text-sky-600" />,
      title: "پاسخگویی 24 ساعته",
    },
    {
      icon: <Monitor className="h-8 w-8 text-sky-600" />,
      title: "دسترسی آسان و راحت",
    },
  ];

  return (
    <div className="bg-primary-tint-1 mt-15 mb-0 w-full py-6">
      <div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6 text-center md:grid-cols-4"
        dir="rtl"
      >
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-sky-600 shadow-sm">
              {item.icon}
            </div>
            <p className="text-sm font-medium text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Features;
