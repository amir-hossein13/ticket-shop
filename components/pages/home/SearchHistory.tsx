import { Timer } from "lucide-react";
import HistoryCard from "@/components/ui/HistoryCard";

export default function SearchHistory() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="flex items-center gap-2 text-xl font-medium text-gray-700 sm:text-2xl">
          <Timer size={28} />
          تاریخچه جستجو
        </h2>
        <button className="text-primary text-lg hover:underline sm:text-xl">
          پاک کردن همه
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </section>
  );
}
