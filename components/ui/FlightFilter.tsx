import { Card, CardContent } from "./card";
import { Checkbox } from "./checkbox";
import { Slider } from "./slider";

function FlightFilters() {
  const airlines = [
    { name: "Pegasus", id: "pegasus" },
    { name: "gulf", id: "gulf" },
    { name: "emirates", id: "emirates" },
    { name: "oman", id: "oman" },
    { name: "Qatar Airways", id: "qatar" },
    { name: "Flydubai", id: "flydubai" },
  ];

  return (
    <div dir="rtl" className="w-full max-w-sm border-none p-4">
      <Card className="bg-gray-1 rounded-2xl border-0 shadow-none">
        <CardContent className="space-y-6 p-4">
          <p className="text-gray-8 font-medium">تعداد نتایج: 0</p>

          {/* Price */}
          <div className="space-y-3">
            <p className="text-gray-7 font-semibold">قیمت</p>
            <Slider defaultValue={[50]} max={100} step={1} className="mt-2" />
            <div className="text-gray-4 flex justify-between text-sm">
              <span>۶٬۰۰۰٬۰۰۰ از</span>
              <span>۶۰٬۰۰۰٬۰۰۰ تا</span>
            </div>
          </div>

          {/* Time */}
          <div className="space-y-3">
            <p className="text-gray-7 font-semibold">زمان حرکت</p>
            <Slider defaultValue={[24]} max={24} step={1} className="mt-2" />
            <div className="text-gray-4 flex justify-between text-sm">
              <span>۰۰:۰۰</span>
              <span>۲۴:۰۰</span>
            </div>
          </div>

          {/* Airlines */}
          <div className="space-y-3">
            <p className="text-gray-7 font-semibold">شرکت هواپیمایی</p>
            <div className="space-y-2">
              {airlines.map((item) => (
                <label
                  key={item.id}
                  className="text-gray-8 flex cursor-pointer items-center gap-2"
                >
                  <Checkbox id={item.id} className="text-gray-8" />
                  <span className="text-gray-8">{item.name}</span>
                </label>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default FlightFilters;
