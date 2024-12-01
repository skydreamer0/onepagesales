import { Check, Users, Clock, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export function Pricing() {
  const { addItem } = useCart();

  const handlePurchase = (plan: string, price: number) => {
    addItem({
      id: `smart-watch-${plan.toLowerCase()}`,
      name: `智能手錶 ${plan}`,
      price
    });
    toast.success("已加入購物車！", {
      description: "商品已成功加入您的購物車",
    });
  };

  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-red-500" />
            <span className="text-red-500 font-semibold">限時優惠即將結束</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">超值優惠方案</h2>
          <p className="text-xl text-muted-foreground mb-4">
            限時特價，把握機會立即購入
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>已有 3,420+ 人購買</span>
            </div>
            <div className="flex items-center gap-2">
              <Percent className="w-4 h-4" />
              <span>優惠折扣高達 20%</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>基礎版</CardTitle>
                <Badge variant="secondary">熱銷商品</Badge>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold">NT$3,999</span>
                <span className="text-muted-foreground ml-2 line-through">NT$4,999</span>
                <div className="text-sm text-red-500 mt-1">限時優惠，僅剩 24 小時</div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {["基礎健康監測", "20種運動模式", "來電通知", "5天續航"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handlePurchase("基礎版", 3999)}>
                <span>立即購買</span>
                <span className="text-sm ml-2">(免運費)</span>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary flex flex-col h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>進階版</CardTitle>
                <Badge variant="secondary">熱銷商品</Badge>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold">NT$4,999</span>
                <span className="text-muted-foreground ml-2 line-through">NT$6,999</span>
                <div className="text-sm text-red-500 mt-1">限時優惠，僅剩 24 小時</div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {[
                  "進階健康監測",
                  "50種運動模式",
                  "智能通知",
                  "7天續航",
                  "睡眠分析",
                  "壓力監測",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handlePurchase("進階版", 4999)}>
                <span>立即購買</span>
                <span className="text-sm ml-2">(免運費)</span>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>尊爵版</CardTitle>
                <Badge variant="secondary">熱銷商品</Badge>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold">NT$5,999</span>
                <span className="text-muted-foreground ml-2 line-through">NT$8,999</span>
                <div className="text-sm text-red-500 mt-1">限時優惠，僅剩 24 小時</div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {[
                  "全方位健康監測",
                  "100種運動模式",
                  "全功能通知",
                  "14天續航",
                  "進階睡眠分析",
                  "心率異常警告",
                  "GPS定位",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handlePurchase("尊爵版", 5999)}>
                <span>立即購買</span>
                <span className="text-sm ml-2">(免運費)</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * 所有方案均享有 30 天無條件退款保證
          </p>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-4">
              <svg className="h-8" viewBox="0 0 48 48" fill="none">
                <path d="M44 11H4V37H44V11Z" fill="#1976D2"/>
                <path d="M44 11H4V18H44V11Z" fill="#1E88E5"/>
                <path d="M19 28H13V30H19V28Z" fill="white"/>
                <path d="M35 28H25V30H35V28Z" fill="white"/>
              </svg>
              <svg className="h-8" viewBox="0 0 48 48" fill="none">
                <path d="M32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24Z" fill="#FF9800"/>
                <path d="M24 36C31.732 36 38 29.732 38 22C38 14.268 31.732 8 24 8C16.268 8 10 14.268 10 22C10 29.732 16.268 36 24 36Z" stroke="#FF9800" strokeWidth="2"/>
              </svg>
              <svg className="h-8" viewBox="0 0 48 48" fill="none">
                <path d="M44 11H4V37H44V11Z" fill="#4CAF50"/>
                <path d="M44 11H4V18H44V11Z" fill="#388E3C"/>
                <path d="M19 28H13V30H19V28Z" fill="white"/>
                <path d="M35 28H25V30H35V28Z" fill="white"/>
              </svg>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>安全支付保證</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}