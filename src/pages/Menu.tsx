import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuItemDetailModal, { type MenuItemData } from "@/components/MenuItemDetailModal";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import espressoImg from "@/assets/menu-espresso.jpg";
import macchiatoImg from "@/assets/menu-macchiato.jpg";
import cappuccinoImg from "@/assets/menu-cappuccino.jpg";
import latteImg from "@/assets/latte-art.jpg";
import pouroverImg from "@/assets/menu-pourover.jpg";
import icedImg from "@/assets/menu-iced.jpg";
import pastriesImg from "@/assets/menu-pastries.jpg";
import breakfastImg from "@/assets/menu-breakfast.jpg";
import juiceImg from "@/assets/menu-juice.jpg";

const categories = [
  "Hot Coffee",
  "Cold Drinks",
  "Food",
  "Fresh Juice",
  "Tea & Chocolate",
  "Desserts",
];

const menuData: Record<string, MenuItemData[]> = {
  "Hot Coffee": [
    {
      name: "Espresso",
      description: "Pure Ethiopian single shot, bold and aromatic",
      detail:
        "Pulled as a 25–30ml shot from our house blend or single-origin rotation. Best enjoyed immediately for crema and aroma.",
      price: "85 ETB",
      image: espressoImg,
    },
    {
      name: "Macchiato",
      description: "Traditional Ethiopian-style, layered to perfection",
      detail: "Espresso marked with a dollop of foam—served in the classic Ethiopian style, slightly sweet upon request.",
      price: "90 ETB",
      image: macchiatoImg,
    },
    { name: "Cappuccino", description: "Velvety steamed milk with rich espresso", price: "120 ETB", image: cappuccinoImg },
    { name: "Café Latte", description: "Smooth espresso with silky steamed milk and latte art", price: "130 ETB", image: latteImg },
    { name: "Pour Over", description: "Hand-brewed single origin, highlighting delicate flavors", price: "150 ETB", image: pouroverImg },
    { name: "Americano", description: "Espresso lengthened with hot water, clean finish", price: "95 ETB", image: espressoImg },
    { name: "Flat White", description: "Double ristretto with microfoam for a silky mouthfeel", price: "125 ETB", image: latteImg },
    { name: "Cappuccino Mocha", description: "Espresso, cocoa, steamed milk, and light foam", price: "135 ETB", image: cappuccinoImg },
    { name: "Cortado", description: "Equal parts espresso and warm milk—balanced and bold", price: "115 ETB", image: macchiatoImg },
    { name: "Cappuccino Viennese", description: "Cappuccino topped with whipped cream and cocoa dust", price: "140 ETB", image: cappuccinoImg },
  ],
  "Cold Drinks": [
    {
      name: "Iced Latte",
      description: "Chilled espresso with cold milk over ice",
      detail: "Double shot over ice, topped with cold milk and stirred. Ask for vanilla or caramel syrup.",
      price: "140 ETB",
      image: icedImg,
    },
    { name: "Cold Brew", description: "Slow-steeped for 18 hours, smooth and rich", price: "150 ETB", image: icedImg },
    { name: "Iced Macchiato", description: "Ethiopian macchiato served over ice", price: "110 ETB", image: icedImg },
    { name: "Coffee Frappe", description: "Blended iced coffee with cream", price: "160 ETB", image: icedImg },
    { name: "Iced Americano", description: "Espresso over ice, topped with cold water", price: "105 ETB", image: icedImg },
    { name: "Iced Mocha", description: "Espresso, chocolate, cold milk, and ice", price: "155 ETB", image: icedImg },
    { name: "Sparkling Lemonade", description: "House-made citrus with sparkling water", price: "95 ETB", image: juiceImg },
    { name: "Iced Caramel Latte", description: "Espresso, caramel, and cold milk over ice", price: "165 ETB", image: icedImg },
  ],
  "Food": [
    {
      name: "Avocado Toast",
      description: "Sourdough, smashed avocado, poached eggs, microgreens",
      detail: "Served on toasted sourdough with lemon, chili flakes, and seasonal greens. Add smoked salmon on request.",
      price: "220 ETB",
      image: breakfastImg,
    },
    { name: "Croissant", description: "Freshly baked butter croissant, flaky and golden", price: "120 ETB", image: pastriesImg },
    { name: "Pastry Selection", description: "Daily rotating selection of artisan pastries", price: "100 ETB", image: pastriesImg },
    { name: "Breakfast Bowl", description: "Granola, yogurt, fresh fruits, and honey drizzle", price: "180 ETB", image: breakfastImg },
    { name: "Chicken & Avocado Sandwich", description: "Grilled chicken, avocado, tomato, and herb aioli on ciabatta", price: "240 ETB", image: breakfastImg },
    { name: "Caprese Salad", description: "Fresh mozzarella, tomato, basil, and olive oil", price: "200 ETB", image: breakfastImg },
    { name: "Smoked Salmon Bagel", description: "Cream cheese, capers, red onion, and dill", price: "260 ETB", image: breakfastImg },
    { name: "Vegetable Quiche", description: "Seasonal vegetables in a buttery pastry shell", price: "190 ETB", image: pastriesImg },
    { name: "Soup of the Day", description: "Ask your server for today’s seasonal soup", price: "150 ETB", image: breakfastImg },
  ],
  "Fresh Juice": [
    {
      name: "Fresh Orange Juice",
      description: "Freshly squeezed, no additives",
      detail: "Pressed to order from ripe oranges. Seasonal sweetness may vary.",
      price: "100 ETB",
      image: juiceImg,
    },
    { name: "Green Detox", description: "Spinach, apple, ginger, and lemon blend", price: "120 ETB", image: juiceImg },
    { name: "Tropical Mix", description: "Mango, pineapple, and passion fruit", price: "110 ETB", image: juiceImg },
    { name: "Berry Boost", description: "Strawberry, blueberry, and apple", price: "125 ETB", image: juiceImg },
    { name: "Carrot & Ginger", description: "Cooling carrot with a ginger kick", price: "115 ETB", image: juiceImg },
    { name: "Watermelon Cooler", description: "Seasonal watermelon, mint, and lime", price: "105 ETB", image: juiceImg },
    { name: "Beet & Apple", description: "Earthy beet balanced with sweet apple", price: "125 ETB", image: juiceImg },
  ],
  "Tea & Chocolate": [
    {
      name: "Ethiopian Spiced Tea",
      description: "Black tea with cinnamon, cardamom, and cloves",
      detail: "Simmered spices with black tea—comforting and fragrant. Honey or sugar available.",
      price: "75 ETB",
      image: latteImg,
    },
    { name: "Chai Latte", description: "Spiced black tea concentrate with steamed milk", price: "110 ETB", image: cappuccinoImg },
    { name: "Green Tea", description: "Premium loose-leaf green tea, served hot", price: "70 ETB", image: pouroverImg },
    { name: "Peppermint Tea", description: "Caffeine-free herbal infusion", price: "65 ETB", image: pouroverImg },
    { name: "Hot Chocolate", description: "Rich cocoa with steamed milk and whipped cream", price: "115 ETB", image: cappuccinoImg },
    { name: "White Hot Chocolate", description: "Creamy white chocolate and steamed milk", price: "125 ETB", image: latteImg },
    { name: "Matcha Latte", description: "Ceremonial-grade matcha with steamed milk", price: "140 ETB", image: latteImg },
    { name: "Turmeric Latte", description: "Golden milk with turmeric, ginger, and honey", price: "120 ETB", image: macchiatoImg },
  ],
  "Desserts": [
    {
      name: "Tiramisu",
      description: "Classic espresso-soaked ladyfingers and mascarpone",
      detail: "Layered with Mamokacha espresso, cocoa, and mascarpone. Contains dairy, eggs, and gluten.",
      price: "180 ETB",
      image: pastriesImg,
    },
    { name: "Chocolate Brownie", description: "Warm brownie with vanilla ice cream", price: "150 ETB", image: pastriesImg },
    { name: "New York Cheesecake", description: "Creamy baked cheesecake with berry compote", price: "190 ETB", image: pastriesImg },
    { name: "Affogato", description: "Vanilla gelato drowned in a shot of hot espresso", price: "135 ETB", image: espressoImg },
    { name: "Honey Cake", description: "Layered Ethiopian-style honey cake", price: "160 ETB", image: pastriesImg },
    { name: "Fruit Tart", description: "Buttery shell with pastry cream and fresh fruit", price: "170 ETB", image: pastriesImg },
    { name: "Ice Cream Sundae", description: "Three scoops, chocolate sauce, and nuts", price: "145 ETB", image: icedImg },
    { name: "Baklava Plate", description: "Phyllo, nuts, and honey syrup—two pieces", price: "130 ETB", image: pastriesImg },
  ],
};

const Menu = () => {
  const [active, setActive] = useState("Hot Coffee");
  const [detailSelection, setDetailSelection] = useState<{ category: string; item: MenuItemData } | null>(null);
  const { addMenuItem } = useCart();

  const addItemToCart = (item: MenuItemData, category: string) => {
    const priceNum = parseInt(item.price.replace(/[^\d]/g, ""), 10);
    addMenuItem({
      id: `menu-${category}-${item.name}`,
      name: item.name,
      price: priceNum,
      image: item.image,
      category,
    });
    toast.success(`${item.name} added to cart`);
  };

  const activeIndex = categories.indexOf(active);
  const safeIndex = activeIndex >= 0 ? activeIndex : 0;
  const goPrev = () => {
    const i = (safeIndex - 1 + categories.length) % categories.length;
    setActive(categories[i]);
  };
  const goNext = () => {
    const i = (safeIndex + 1) % categories.length;
    setActive(categories[i]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MenuItemDetailModal
        open={detailSelection !== null}
        onOpenChange={(open) => {
          if (!open) setDetailSelection(null);
        }}
        category={detailSelection?.category ?? null}
        item={detailSelection?.item ?? null}
        onAddToCart={(item, category) => {
          addItemToCart(item, category);
          setDetailSelection(null);
        }}
      />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cappuccinoImg})` }} />
        <div className="absolute inset-0 bg-espresso/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Café Menu</p>
          <h1 className="text-4xl md:text-6xl font-serif text-background">Our Menu</h1>
        </motion.div>
      </section>

      {/* Menu Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Categories: one row with prev / next */}
          <div className="mb-16 flex max-w-6xl mx-auto items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Previous category"
              onClick={goPrev}
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-background text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-md motion-reduce:hover:shadow-none"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>

            <div className="flex min-h-[2.75rem] min-w-0 flex-1 items-center justify-center gap-2 overflow-x-auto py-1 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`shrink-0 whitespace-nowrap px-4 py-2.5 font-sans text-[10px] font-medium uppercase tracking-widest border transition-all duration-300 sm:px-6 sm:py-3 sm:text-xs ${
                    active === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "border-border bg-transparent text-foreground hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next category"
              onClick={goNext}
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-background text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-md motion-reduce:hover:shadow-none"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>

          {/* Items Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {menuData[active].map((item) => (
                <div
                  key={item.name}
                  className="group hover-lift rounded-lg border border-transparent bg-transparent p-4 -m-4 transition-colors duration-500 hover:border-border/60 hover:bg-card/40 hover:shadow-lg motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none"
                >
                  <button
                    type="button"
                    className="w-full cursor-pointer rounded-md text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    onClick={() => setDetailSelection({ category: active, item })}
                    aria-label={`${item.name}, view details`}
                  >
                    <div className="aspect-[4/3] overflow-hidden mb-4 rounded-md bg-card">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="font-serif text-lg text-foreground transition-colors duration-300 group-hover:text-accent">
                        {item.name}
                      </h3>
                      <span className="shrink-0 font-sans text-sm font-medium text-accent transition-colors duration-300 group-hover:text-foreground">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-sans text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                    <p className="mt-2 font-sans text-[10px] uppercase tracking-widest text-accent/80">View details</p>
                  </button>
                  <Button
                    type="button"
                    variant="gold"
                    size="sm"
                    className="mt-4 h-9 w-full px-4 text-[10px] tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:brightness-[1.05] active:scale-[0.98] motion-reduce:hover:scale-100 sm:w-auto"
                    onClick={() => addItemToCart(item, active)}
                  >
                    <ShoppingBag size={14} className="mr-1.5" />
                    Add to Cart
                  </Button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
