import { XSquare } from "lucide-react";

function HistoryCard() {
    return (
      <div className="border-gray-2 text-gray-6 flex flex-row items-center gap-3 rounded-lg border p-2.5">
        <XSquare size={15} />
        <span>تهران به استانبول</span>
      </div>
    );
}

export default HistoryCard
