import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Users, Flame } from "lucide-react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 4,
    minutes: 59,
    seconds: 59,
  });

  const [stockLeft, setStockLeft] = useState(127);
  const [recentBuyers, setRecentBuyers] = useState(34);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }
        const newHours = prev.hours - 1;
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    // 隨機更新庫存和最近購買人數
    const stockTimer = setInterval(() => {
      setStockLeft((prev) => Math.max(0, prev - Math.floor(Math.random() * 2)));
      setRecentBuyers((prev) => prev + Math.floor(Math.random() * 2));
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(stockTimer);
    };
  }, []);

  return (
    <div className="bg-muted/50 py-6 border-y">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* 倒計時 */}
          <Card className="flex items-center gap-4 p-4 bg-background/50">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium">限時優惠倒計時</span>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <span>:</span>
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span>:</span>
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
          </Card>

          {/* 庫存信息 */}
          <Card className="flex items-center gap-4 p-4 bg-background/50">
            <Flame className="w-5 h-5 text-red-500" />
            <div className="text-sm">
              <span className="font-medium">僅剩 </span>
              <span className="text-red-500 font-bold">{stockLeft}</span>
              <span className="font-medium"> 件庫存</span>
            </div>
          </Card>

          {/* 購買人數 */}
          <Card className="flex items-center gap-4 p-4 bg-background/50">
            <Users className="w-5 h-5 text-primary" />
            <div className="text-sm">
              <span className="font-medium">最近 </span>
              <span className="text-primary font-bold">{recentBuyers}</span>
              <span className="font-medium"> 人已購買</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}