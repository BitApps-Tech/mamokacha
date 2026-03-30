import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import type { CartItem, CartKind } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

function CartLine({
  item,
  cart,
}: {
  item: CartItem;
  cart: CartKind;
}) {
  const { removeItem, updateQuantity } = useCart();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 30 }}
      className="flex gap-4"
    >
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden bg-card">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-serif text-sm text-foreground">{item.name}</h3>
        {item.category && (
          <p className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">{item.category}</p>
        )}
        <p className="mt-1 font-sans text-sm font-medium text-accent">{item.price.toLocaleString()} ETB</p>
        <div className="mt-2 flex items-center gap-3">
          <button
            type="button"
            onClick={() => updateQuantity(item.id, item.quantity - 1, cart)}
            className="flex h-7 w-7 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground active:scale-95"
          >
            <Minus size={12} />
          </button>
          <span className="w-5 text-center font-sans text-sm tabular-nums">{item.quantity}</span>
          <button
            type="button"
            onClick={() => updateQuantity(item.id, item.quantity + 1, cart)}
            className="flex h-7 w-7 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground active:scale-95"
          >
            <Plus size={12} />
          </button>
          <button
            type="button"
            onClick={() => removeItem(item.id, cart)}
            className="ml-auto p-1 text-muted-foreground transition-colors hover:text-destructive active:scale-95"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const CartDrawer = () => {
  const {
    shopItems,
    menuItems,
    isOpen,
    setIsOpen,
    shopTotalPrice,
    menuTotalPrice,
    clearShopCart,
    clearMenuCart,
  } = useCart();

  const hasShop = shopItems.length > 0;
  const hasMenu = menuItems.length > 0;
  const hasAny = hasShop || hasMenu;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 right-0 top-0 z-[70] flex w-full max-w-md flex-col bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-primary" />
                <h2 className="font-serif text-lg text-foreground">Your carts</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {!hasAny ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <ShoppingBag size={48} className="text-muted-foreground/30" />
                  <p className="font-sans text-sm text-muted-foreground">Your carts are empty</p>
                  <Button variant="gold" size="sm" onClick={() => setIsOpen(false)}>
                    Continue browsing
                  </Button>
                </div>
              ) : (
                <div className="space-y-10">
                  {hasMenu && (
                    <div>
                      <div className="mb-4 flex items-start justify-between gap-2 border-b border-border pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <UtensilsCrossed size={16} className="text-accent" />
                            <h3 className="font-serif text-base text-foreground">Café menu order</h3>
                          </div>
                          <p className="mt-1 font-sans text-xs text-muted-foreground">Prepared for you at the café</p>
                        </div>
                        {menuItems.length > 0 && (
                          <button
                            type="button"
                            onClick={clearMenuCart}
                            className="shrink-0 font-sans text-[10px] uppercase tracking-widest text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                      <div className="space-y-6">
                        {menuItems.map((item) => (
                          <CartLine key={item.id} item={item} cart="menu" />
                        ))}
                      </div>
                      <div className="mt-4 flex justify-between border-t border-border pt-3 font-sans text-sm">
                        <span className="text-muted-foreground">Café subtotal</span>
                        <span className="font-medium text-foreground">{menuTotalPrice.toLocaleString()} ETB</span>
                      </div>
                    </div>
                  )}

                  {hasShop && (
                    <div>
                      <div className="mb-4 flex items-start justify-between gap-2 border-b border-border pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <ShoppingBag size={16} className="text-accent" />
                            <h3 className="font-serif text-base text-foreground">Shop coffee</h3>
                          </div>
                          <p className="mt-1 font-sans text-xs text-muted-foreground">Beans & retail products</p>
                        </div>
                        {shopItems.length > 0 && (
                          <button
                            type="button"
                            onClick={clearShopCart}
                            className="shrink-0 font-sans text-[10px] uppercase tracking-widest text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                      <div className="space-y-6">
                        {shopItems.map((item) => (
                          <CartLine key={item.id} item={item} cart="shop" />
                        ))}
                      </div>
                      <div className="mt-4 flex justify-between border-t border-border pt-3 font-sans text-sm">
                        <span className="text-muted-foreground">Shop subtotal</span>
                        <span className="font-medium text-foreground">{shopTotalPrice.toLocaleString()} ETB</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {hasAny && (
              <div className="space-y-4 border-t border-border px-6 py-5">
                {hasMenu && hasShop && (
                  <div className="flex justify-between font-serif text-lg text-foreground">
                    <span className="font-sans text-sm text-muted-foreground">Combined total</span>
                    <span>{(menuTotalPrice + shopTotalPrice).toLocaleString()} ETB</span>
                  </div>
                )}
                {hasMenu && (
                  <Button variant="gold" className="w-full" size="lg" type="button">
                    Place café order
                  </Button>
                )}
                {hasShop && (
                  <Button variant={hasMenu ? "outline" : "gold"} className="w-full" size="lg" type="button">
                    Checkout shop
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
