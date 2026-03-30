import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export type MenuItemData = {
  name: string;
  description: string;
  /** Extra copy shown only in the detail modal (ingredients, notes, etc.) */
  detail?: string;
  price: string;
  image: string;
};

type MenuItemDetailModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: string | null;
  item: MenuItemData | null;
  onAddToCart: (item: MenuItemData, category: string) => void;
};

const MenuItemDetailModal = ({
  open,
  onOpenChange,
  category,
  item,
  onAddToCart,
}: MenuItemDetailModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {item && category ? (
        <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto border-border bg-background p-0 sm:max-w-xl sm:rounded-lg">
          <div className="aspect-[16/10] w-full overflow-hidden bg-card sm:rounded-t-lg">
            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-4 p-6 sm:p-8">
            <DialogHeader className="space-y-3 text-left">
              <p className="text-xs font-sans uppercase tracking-widest text-accent">{category}</p>
              <DialogTitle className="font-serif text-2xl leading-tight text-foreground md:text-3xl">{item.name}</DialogTitle>
              <p className="font-sans text-lg font-medium text-accent">{item.price}</p>
              <DialogDescription asChild>
                <div className="space-y-4 pt-1">
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  {item.detail ? (
                    <p className="border-l-2 border-accent/40 pl-4 font-sans text-sm leading-relaxed text-foreground/90">{item.detail}</p>
                  ) : (
                    <p className="font-sans text-xs italic leading-relaxed text-muted-foreground">
                      Prepared to order. Ask our team about allergens, dairy alternatives, and strength preferences.
                    </p>
                  )}
                </div>
              </DialogDescription>
            </DialogHeader>
            <Button
              type="button"
              variant="gold"
              size="lg"
              className="w-full text-[10px] uppercase tracking-widest sm:w-auto"
              onClick={() => onAddToCart(item, category)}
            >
              <ShoppingBag size={16} className="mr-2" />
              Add to Cart
            </Button>
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
};

export default MenuItemDetailModal;
