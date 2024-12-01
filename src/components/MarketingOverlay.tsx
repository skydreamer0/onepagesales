import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Users, ShoppingCart } from "lucide-react";

export function MarketingOverlay() {
  const [stockLeft, setStockLeft] = useState(127);
  const [recentBuyers, setRecentBuyers] = useState(34);
  const [isStockHighlighted, setIsStockHighlighted] = useState(false);
  const [isBuyersHighlighted, setIsBuyersHighlighted] = useState(false);

  // 隨機更新庫存和購買人數
  useEffect(() => {
    const interval = setInterval(() => {
      // 隨機減少庫存
      setStockLeft((prev) => {
        const newStock = Math.max(0, prev - Math.floor(Math.random() * 2));
        if (newStock !== prev) {
          setIsStockHighlighted(true);
          setTimeout(() => setIsStockHighlighted(false), 1000);
        }
        return newStock;
      });

      // 隨機增加購買人數
      setRecentBuyers((prev) => {
        const newBuyers = prev + Math.floor(Math.random() * 2);
        if (newBuyers !== prev) {
          setIsBuyersHighlighted(true);
          setTimeout(() => setIsBuyersHighlighted(false), 1000);
        }
        return newBuyers;
      });
    }, 10000); // 每10秒更新一次

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-2">
      <Badge
        variant="secondary"
        className={`flex items-center gap-2 py-1.5 px-3 transition-all duration-300 ${
          isStockHighlighted ? "scale-110 bg-red-100" : ""
        }`}
      >
        <ShoppingCart className="w-4 h-4 text-red-500" />
        <span>
          僅剩 <span className="font-bold text-red-500">{stockLeft}</span> 件庫存
        </span>
      </Badge>

      <Badge
        variant="secondary"
        className={`flex items-center gap-2 py-1.5 px-3 transition-all duration-300 ${
          isBuyersHighlighted ? "scale-110 bg-primary/10" : ""
        }`}
      >
        <Users className="w-4 h-4 text-primary" />
        <span>
          最近 <span className="font-bold text-primary">{recentBuyers}</span> 人已購買
        </span>
      </Badge>
    </div>
  );
}
