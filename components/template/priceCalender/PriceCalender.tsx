import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Example data
const days = [
  {
    day: "شنبه",
    dateFa: "۵/۲۷",
    dateEn: "22 Aug",
    price: null,
    full: true,
  },
  {
    day: "یکشنبه",
    dateFa: "۵/۲۸",
    dateEn: "22 Aug",
    price: null,
    full: true,
  },
  {
    day: "دوشنبه",
    dateFa: "۵/۲۹",
    dateEn: "22 Aug",
    price: 1300000,
    full: false,
    active: true,
  },
  {
    day: "سه شنبه",
    dateFa: "۵/۳۰",
    dateEn: "22 Aug",
    price: 2300000,
    full: false,
    high: true,
  },
  {
    day: "چهارشنبه",
    dateFa: "۵/۳۱",
    dateEn: "22 Aug",
    price: 1300000,
    full: false,
  },
  {
    day: "پنجشنبه",
    dateFa: "۶/۱",
    dateEn: "22 Aug",
    price: null,
    notAvailable: true,
  },
  {
    day: "جمعه",
    dateFa: "۶/۲",
    dateEn: "22 Aug",
    price: 1300000,
  },
];

export default function PriceCalendar() {
  return (
    <Card className="rtl w-full rounded-xl border bg-white shadow-sm">
      <CardContent className="p-0">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <ChevronLeft className="h-5 w-5 cursor-pointer" />
          <p className="text-primary font-semibold">تقویم قیمتی</p>
          <ChevronRight className="h-5 w-5 cursor-pointer" />
        </div>

        {/* Days List */}
        <div className="no-scrollbar flex divide-x overflow-x-auto">
          {days.map((d, i) => (
            <div
              key={i}
              className={cn(
                "relative flex min-w-[120px] flex-col items-center px-2 py-4 text-sm",
                d.active && "border-primary border-b-4",
              )}
            >
              <p className="font-medium text-gray-800">{d.day}</p>
              <p className="text-xs text-gray-500">{d.dateEn}</p>
              <p className="text-xs text-gray-700">{d.dateFa}</p>

              {/* Price or status */}
              {d.price && !d.full && !d.notAvailable && (
                <p
                  className={cn(
                    "mt-2 font-semibold",
                    d.high ? "text-red-500" : "text-gray-800",
                  )}
                >
                  {d.price.toLocaleString()} تومان
                </p>
              )}

              {d.full && (
                <p className="mt-2 text-xs text-gray-400">ظرفیت تکمیل</p>
              )}

              {d.notAvailable && (
                <p className="mt-2 text-xs text-gray-400">ناموجود</p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
