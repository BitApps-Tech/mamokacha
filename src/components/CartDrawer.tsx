import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-background shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-primary" />
                <h2 className="font-serif text-lg text-foreground">Your Cart</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-muted-foreground/30" />
                  <p className="font-sans text-sm text-muted-foreground">Your cart is empty</p>
                  <Button variant="gold" size="sm" onClick={() => setIsOpen(false)}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      className="flex gap-4"
                    >
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden bg-card">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-sm text-foreground truncate">{item.name}</h3>
                        {item.category && (
                          <p className="text-[10px] tracking-widest uppercase text-muted-foreground mt-0.5">{item.category}</p>
                        )}
                        <p className="font-sans text-sm text-accent font-medium mt-1">
                          {item.price.toLocaleString()} ETB
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors active:scale-95"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-sans text-sm tabular-nums w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors active:scale-95"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto p-1 text-muted-foreground hover:text-destructive transition-colors active:scale-95"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-muted-foreground">Total</span>
                  <span className="font-serif text-xl text-foreground">{totalPrice.toLocaleString()} ETB</span>
                </div>
                <Button variant="gold" className="w-full" size="lg">
                  Checkout
                </Button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase font-sans"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
