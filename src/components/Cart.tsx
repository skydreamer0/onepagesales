import { ShoppingCart, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { FC } from 'react';
import { useCart } from '../contexts/CartContext';
import { useState, useEffect } from "react";
import styled from 'styled-components';

interface CartPanelProps {
  $isOpen: boolean;
}

const CartPanel = styled.div<CartPanelProps>`
  transform: translateX(${(props: CartPanelProps) => props.$isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  max-width: 24rem;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CustomScrollbar = styled.div`
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Cart: FC = () => {
  const { items, removeItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 點擊外部關閉購物車
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.cart-panel')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleCheckout = () => {
    const button = document.querySelector('.checkout-button') as HTMLButtonElement;
    if (button) {
      button.innerHTML = '<span class="flex items-center justify-center"><span class="mr-2">處理中</span><span class="animate-spin">⚬</span></span>';
      button.disabled = true;
    }
    
    // 添加過渡動畫後跳轉
    setTimeout(() => {
      window.location.href = '/payment-simulation.html';
    }, 500);
  };

  return (
    <div className="relative cart-panel">
      {/* 購物車按鈕 */}
      <Button
        variant="outline"
        size="icon"
        className="relative hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ShoppingCart className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-12' : ''}`} />
        {totalItems > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 animate-scale-in"
          >
            {totalItems}
          </Badge>
        )}
      </Button>

      {/* 購物車面板 */}
      <CartPanel
        $isOpen={isOpen}
        className="absolute right-0 top-12 w-96 bg-white rounded-xl shadow-lg border p-6 z-50"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">購物車</h3>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-100 rounded-full h-8 w-8 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <CustomScrollbar className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">購物車是空的</p>
              <p className="text-sm text-gray-400 mt-1">快去選購喜歡的商品吧！</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg group hover:bg-gray-100 transition-all duration-200"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      數量: {item.quantity} x NT${item.price.toLocaleString()}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-100 hover:text-red-600"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">總計</span>
                  <span className="text-lg font-semibold">
                    NT${totalPrice.toLocaleString()}
                  </span>
                </div>
                <Button
                  className="w-full h-12 text-base font-medium checkout-button hover:scale-[1.02] transition-transform duration-200"
                  onClick={handleCheckout}
                >
                  <span className="flex items-center">
                    立即結帳
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </div>
            </>
          )}
        </CustomScrollbar>
      </CartPanel>
    </div>
  );
};
