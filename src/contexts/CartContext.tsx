import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    // 從 localStorage 恢復購物車狀態
    const savedItems = localStorage.getItem('cart-items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // 當購物車內容改變時，保存到 localStorage
  const saveItems = (newItems: CartItem[]) => {
    setItems(newItems);
    localStorage.setItem('cart-items', JSON.stringify(newItems));
  };

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    const newItems = [...items];
    const existingItemIndex = newItems.findIndex(item => item.id === newItem.id);

    if (existingItemIndex >= 0) {
      newItems[existingItemIndex].quantity += 1;
    } else {
      newItems.push({ ...newItem, quantity: 1 });
    }

    saveItems(newItems);
  };

  const removeItem = (id: string) => {
    const newItems = items.filter(item => item.id !== id);
    saveItems(newItems);
  };

  const clearCart = () => {
    saveItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
