import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

type PaymentMethod = "credit" | "atm" | "cvs";

export function Checkout() {
  const { items, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("credit");
  const [loading, setLoading] = useState(false);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: 整合綠界 API
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          paymentMethod,
          totalAmount: totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("付款建立失敗");
      }

      const data = await response.json();
      
      // 根據回應導向到綠界付款頁面
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
        clearCart();
      }
    } catch {
      toast.error("付款處理失敗", {
        description: "請稍後再試或聯繫客服",
      });
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container max-w-2xl py-24">
        <h2 className="text-2xl font-bold mb-4">購物車是空的</h2>
        <p>請添加商品到購物車後再進行結帳。</p>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-24">
      <Card>
        <CardHeader>
          <CardTitle>結帳</CardTitle>
          <CardDescription>
            請選擇付款方式並填寫相關資訊
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {/* 訂單摘要 */}
            <div className="space-y-4">
              <h3 className="font-medium">訂單摘要</h3>
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span>NT${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between font-medium pt-4 border-t">
                <span>總計</span>
                <span>NT${totalPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* 付款方式 */}
            <div className="space-y-2">
              <Label htmlFor="payment">付款方式</Label>
              <Select
                value={paymentMethod}
                onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}
              >
                <SelectTrigger id="payment">
                  <SelectValue placeholder="選擇付款方式" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit">信用卡付款</SelectItem>
                  <SelectItem value="atm">ATM 轉帳</SelectItem>
                  <SelectItem value="cvs">超商代碼</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 聯絡資訊 */}
            <div className="space-y-4">
              <h3 className="font-medium">聯絡資訊</h3>
              <div className="grid gap-2">
                <Label htmlFor="name">姓名</Label>
                <Input id="name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">手機號碼</Label>
                <Input id="phone" required />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={loading}>
              {loading ? "處理中..." : "確認付款"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
