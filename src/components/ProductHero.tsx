import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Truck,
  Clock,
  CreditCard,
  CheckCircle,
  Award,
} from "lucide-react";

export function ProductHero() {
  const originalPrice = 12999;
  const discountPrice = 9999;
  const savingAmount = originalPrice - discountPrice;
  const savingPercentage = Math.round((savingAmount / originalPrice) * 100);

  const { addItem } = useCart();

  const handlePurchase = () => {
    addItem({
      id: "smart-watch-basic",
      name: "智能手錶 基礎版",
      price: 3999
    });
    toast.success("已加入購物車！", {
      description: "商品已成功加入您的購物車",
    });
  };

  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 產品圖片 */}
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-br from-primary/10 to-primary/30">
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="SmartWatch Pro"
                  className="w-full h-full object-cover animate-float"
                  style={{
                    transform: "scale(1.2)",
                  }}
                />
              </div>
              {/* 圓形漸變背景效果 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 mix-blend-overlay" />
            </div>
            {/* 促銷標籤 */}
            <Badge
              className="absolute top-4 right-4 py-2 px-4 text-lg font-bold bg-red-500 text-white animate-pulse"
            >
              限時優惠 {savingPercentage}% OFF
            </Badge>
          </div>

          {/* 產品信息 */}
          <div>
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  革命性智能手錶
                  <Badge variant="secondary" className="ml-4">
                    2024新款
                  </Badge>
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    (4.9 / 5 · 2,384 評價)
                  </span>
                </div>
              </div>

              {/* 價格區 */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl font-bold text-primary">
                    NT$ {discountPrice.toLocaleString()}
                  </span>
                  <span className="text-xl text-muted-foreground line-through">
                    NT$ {originalPrice.toLocaleString()}
                  </span>
                  <Badge variant="destructive" className="ml-2">
                    省下 NT$ {savingAmount.toLocaleString()}
                  </Badge>
                </div>

                <div className="flex flex-col gap-4">
                  <Button size="lg" className="text-lg" onClick={handlePurchase}>
                    立即購買
                  </Button>
                  <div className="text-sm text-muted-foreground text-center">
                    * 可分期付款，每月只要 NT$ {Math.round(discountPrice / 12).toLocaleString()} 起
                  </div>
                </div>
              </Card>

              {/* 促銷特點 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">一年保固</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm">免費配送</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">24小時到貨</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span className="text-sm">分期付款</span>
                </div>
              </div>

              {/* 產品特點 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>進階心率監測，24小時健康追蹤</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>IP68防水防塵，運動游泳皆可使用</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>超長續航，單次充電可用7天</span>
                </div>
              </div>

              {/* 信任標誌 */}
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  <div className="text-sm">
                    <div className="font-medium">年度最佳智能手錶</div>
                    <div className="text-muted-foreground">科技新報評選</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <div className="text-sm">
                    <div className="font-medium">安全認證</div>
                    <div className="text-muted-foreground">國際品質保證</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}