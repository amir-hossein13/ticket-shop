"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Search } from "lucide-react";

export default function FlightSearch() {
  const [tripType, setTripType] = useState("roundtrip");

  return (
    <div dir="rtl" className="mt-10 flex justify-center ">
      <div className="w-full max-w-6xl">
        <Card className="w-full rounded-xl border-0">
          <CardContent className="space-y-4 p-5 md:p-6">
            <div className="flex flex-col gap-4 pb-3 md:flex-row md:items-center md:justify-between">
              <Tabs defaultValue="international">
                <TabsList className="flex gap-4 bg-transparent">
                  <TabsTrigger
                    value="international"
                    className="data-[state=active]:text-primary text-gray-3 text-xl data-[state=active]:font-semibold"
                  >
                    پرواز خارجی <Plane />
                  </TabsTrigger>
                  <TabsTrigger
                    value="domestic"
                    className="data-[state=active]:text-primary text-gray-3 text-xl data-[state=active]:font-semibold"
                  >
                    پرواز داخلی
                    <Plane />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="flex flex-wrap justify-start gap-2">
              <Button
                variant={tripType === "oneway" ? "default" : "outline"}
                onClick={() => setTripType("oneway")}
                className="border-primary text-white rounded-xl border text-lg"
              >
                رفت
              </Button>
              <Button
                variant={tripType === "roundtrip" ? "default" : "outline"}
                onClick={() => setTripType("roundtrip")}
                className="border-primary text-primary rounded-xl border text-lg"
              >
                رفت و برگشت
              </Button>
              <Button
                variant={tripType === "multi" ? "default" : "outline"}
                onClick={() => setTripType("multi")}
                className="border-primary text-primary rounded-xl border text-lg"
              >
                چند مسیر
              </Button>
            </div>
            <div className="grid grid-cols-2 items-center gap-3 md:grid-cols-6">
              <Input
                placeholder="مبدا"
                className="h-11 rounded-lg border-gray-300 text-sm"
              />
              <Input
                placeholder="مقصد"
                className="h-11 rounded-lg border-gray-300 text-sm"
              />
              <Input
                placeholder="تاریخ رفت و برگشت"
                className="h-11 rounded-lg border-gray-300 text-sm"
              />
              <Input
                placeholder="تعداد مسافر"
                className="h-11 rounded-lg border-gray-300 text-sm"
              />
              <Input
                placeholder="کلاس پرواز"
                className="h-11 rounded-lg border-gray-300 text-sm"
              />

              <Button className="h-11 rounded-lg bg-primary text-white hover:bg-primary-tint-4">
                جستجو <Search />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
