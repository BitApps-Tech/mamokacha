import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type CartKind = "shop" | "menu";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category?: string;
}

interface CartContextType {
  shopItems: CartItem[];
  menuItems: CartItem[];
  addShopItem: (item: Omit<CartItem, "quantity">) => void;
  addMenuItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string, cart: CartKind) => void;
  updateQuantity: (id: string, quantity: number, cart: CartKind) => void;
  clearShopCart: () => void;
  clearMenuCart: () => void;
  shopTotalItems: number;
  menuTotalItems: number;
  totalItems: number;
  shopTotalPrice: number;
  menuTotalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function addToList(
  prev: CartItem[],
  newItem: Omit<CartItem, "quantity">
): CartItem[] {
  const existing = prev.find((i) => i.id === newItem.id);
  if (existing) {
    return prev.map((i) =>
      i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }
  return [...prev, { ...newItem, quantity: 1 }];
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [shopItems, setShopItems] = useState<CartItem[]>([]);
  const [menuItems, setMenuItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addShopItem = useCallback((newItem: Omit<CartItem, "quantity">) => {
    setShopItems((prev) => addToList(prev, newItem));
    setIsOpen(true);
  }, []);

  const addMenuItem = useCallback((newItem: Omit<CartItem, "quantity">) => {
    setMenuItems((prev) => addToList(prev, newItem));
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string, cart: CartKind) => {
    if (cart === "shop") {
      setShopItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setMenuItems((prev) => prev.filter((i) => i.id !== id));
    }
  }, []);

  const updateQuantity = useCallback(
    (id: string, quantity: number, cart: CartKind) => {
      const setter = cart === "shop" ? setShopItems : setMenuItems;
      if (quantity <= 0) {
        setter((prev) => prev.filter((i) => i.id !== id));
      } else {
        setter((prev) =>
          prev.map((i) => (i.id === id ? { ...i, quantity } : i))
        );
      }
    },
    []
  );

  const clearShopCart = useCallback(() => setShopItems([]), []);
  const clearMenuCart = useCallback(() => setMenuItems([]), []);

  const shopTotalItems = shopItems.reduce((sum, i) => sum + i.quantity, 0);
  const menuTotalItems = menuItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalItems = shopTotalItems + menuTotalItems;

  const shopTotalPrice = shopItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  const menuTotalPrice = menuItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        shopItems,
        menuItems,
        addShopItem,
        addMenuItem,
        removeItem,
        updateQuantity,
        clearShopCart,
        clearMenuCart,
        shopTotalItems,
        menuTotalItems,
        totalItems,
        shopTotalPrice,
        menuTotalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
