import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import productSignature from "@/assets/product-signature.jpg";
import productSingleOrigin from "@/assets/product-single-origin.jpg";
import productEspresso from "@/assets/product-espresso.jpg";
import productSubscription from "@/assets/product-subscription.jpg";

type FeaturedProduct = {
  name: string;
  image: string;
  roast: string;
  notes: string;
  price: string;
  cart: {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
  };
};

/** Display copy + cart payload aligned with `Shop` product ids/prices (ETB). */
const products: FeaturedProduct[] = [
  {
    name: "Signature Blend",
    image: productSignature,
    roast: "Medium Roast",
    notes: "Chocolate, caramel, smooth finish",
    price: "$18.00",
    cart: {
      id: "shop-Mamokacha Signature Blend",
      name: "Mamokacha Signature Blend",
      price: 850,
      category: "Blends",
      image: productSignature,
    },
  },
  {
    name: "Single Origin Ethiopia",
    image: productSingleOrigin,
    roast: "Light Roast",
    notes: "Floral, citrus, tea-like body",
    price: "$22.00",
    cart: {
      id: "shop-Yirgacheffe Single Origin",
      name: "Yirgacheffe Single Origin",
      price: 950,
      category: "Single Origin",
      image: productSingleOrigin,
    },
  },
  {
    name: "Espresso Roast",
    image: productEspresso,
    roast: "Dark Roast",
    notes: "Bold, rich crema, dark chocolate",
    price: "$16.00",
    cart: {
      id: "shop-Espresso Roast",
      name: "Espresso Roast",
      price: 780,
      category: "Blends",
      image: productEspresso,
    },
  },
  {
    name: "Coffee Subscription",
    image: productSubscription,
    roast: "Your Choice",
    notes: "Fresh beans delivered monthly",
    price: "From $14/mo",
    cart: {
      id: "shop-Monthly Subscription",
      name: "Monthly Subscription",
      price: 2400,
      category: "Subscriptions",
      image: productSubscription,
    },
  },
  {
    name: "Guji Natural",
    image: productSingleOrigin,
    roast: "Medium-Light",
    notes: "Blueberry, wine, dark chocolate",
    price: "$19.00",
    cart: {
      id: "shop-Guji Natural",
      name: "Guji Natural",
      price: 900,
      category: "Single Origin",
      image: productSingleOrigin,
    },
  },
  {
    name: "Sidamo Washed",
    image: productSingleOrigin,
    roast: "Medium",
    notes: "Lemon, honey, silky body",
    price: "$20.00",
    cart: {
      id: "shop-Sidamo Washed",
      name: "Sidamo Washed",
      price: 920,
      category: "Single Origin",
      image: productSingleOrigin,
    },
  },
  {
    name: "Harrar Bold",
    image: productEspresso,
    roast: "Medium-Dark",
    notes: "Dried fruit, spice, mocha",
    price: "$19.00",
    cart: {
      id: "shop-Harrar Bold",
      name: "Harrar Bold",
      price: 880,
      category: "Single Origin",
      image: productEspresso,
    },
  },
  {
    name: "Gift Subscription",
    image: productSubscription,
    roast: "Curated",
    notes: "Three months of premium Ethiopian coffee",
    price: "From $58/mo",
    cart: {
      id: "shop-Gift Subscription – 3 Months",
      name: "Gift Subscription – 3 Months",
      price: 6900,
      category: "Subscriptions",
      image: productSubscription,
    },
  },
  {
    name: "Limu Gera",
    image: productSingleOrigin,
    roast: "Medium-Light",
    notes: "Citrus, honey, floral aromatics",
    price: "$20.00",
    cart: {
      id: "shop-Limu Gera",
      name: "Limu Gera",
      price: 910,
      category: "Single Origin",
      image: productSingleOrigin,
    },
  },
  {
    name: "Jimma Organic",
    image: productSingleOrigin,
    roast: "Medium",
    notes: "Cocoa, dried cherry, full body",
    price: "$19.50",
    cart: {
      id: "shop-Jimma Organic",
      name: "Jimma Organic",
      price: 895,
      category: "Single Origin",
      image: productSingleOrigin,
    },
  },
  {
    name: "Heritage House Blend",
    image: productSignature,
    roast: "Medium",
    notes: "Balanced cup, chocolate and stone fruit",
    price: "$18.50",
    cart: {
      id: "shop-Heritage House Blend",
      name: "Heritage House Blend",
      price: 840,
      category: "Blends",
      image: productSignature,
    },
  },
  {
    name: "Discovery Trio Pack",
    image: productSignature,
    roast: "Mixed",
    notes: "Three 100g bags—rotate your morning ritual",
    price: "$12.00",
    cart: {
      id: "shop-Discovery Trio Pack",
      name: "Discovery Trio Pack",
      price: 520,
      category: "Blends",
      image: productSignature,
    },
  },
];

const FeaturedProducts = () => {
  const { addShopItem } = useCart();
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [carouselHovered, setCarouselHovered] = useState(false);

  const onWheel = useCallback(
    (e: WheelEvent) => {
      if (!carouselApi) return;
      const dx = e.deltaX;
      const dy = e.deltaY;
      if (Math.abs(dx) < 2 && Math.abs(dy) < 2) return;
      e.preventDefault();
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) carouselApi.scrollNext();
        else carouselApi.scrollPrev();
      } else {
        if (dy > 0) carouselApi.scrollNext();
        else carouselApi.scrollPrev();
      }
    },
    [carouselApi]
  );

  useEffect(() => {
    if (!carouselApi || !carouselHovered) return;
    const root = carouselApi.rootNode();
    root.addEventListener("wheel", onWheel, { passive: false });
    return () => root.removeEventListener("wheel", onWheel);
  }, [carouselApi, carouselHovered, onWheel]);

  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center md:mb-16"
        >
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-accent">Our Collection</p>
          <h2 className="mb-4 font-serif text-3xl text-foreground md:text-5xl">Featured Coffee</h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
          onMouseEnter={() => setCarouselHovered(true)}
          onMouseLeave={() => setCarouselHovered(false)}
        >
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
            }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-ml-5 md:-ml-6">
              {products.map((product) => (
                <CarouselItem
                  key={product.name}
                  className="basis-[88%] pl-5 sm:basis-[48%] md:pl-6 lg:basis-[32%] xl:basis-[25%]"
                >
                  <div className="group hover-lift flex h-full flex-col rounded-sm border border-border/40 bg-card/30 pb-8 pt-2 transition-colors duration-500 hover:border-border/80 hover:bg-card/60 hover:shadow-lg motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none">
                    <div className="mb-6 aspect-square overflow-hidden bg-card">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-1 text-center sm:px-2">
                      <p className="mb-2 font-sans text-xs uppercase tracking-widest text-accent">{product.roast}</p>
                      <h3 className="mb-2 font-serif text-lg text-foreground md:text-xl">{product.name}</h3>
                      <p className="mb-3 flex-1 font-sans text-sm text-muted-foreground">{product.notes}</p>
                      <p className="mb-4 font-serif text-lg text-foreground">{product.price}</p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mx-auto w-full max-w-[220px] rounded-none border-foreground text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background"
                        onClick={(e) => {
                          e.stopPropagation();
                          addShopItem(product.cart);
                          toast.success(`${product.cart.name} added to cart`);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              variant="outline"
              className="z-20 h-11 w-11 !-translate-y-1/2 rounded-full border-2 border-accent/70 bg-background/95 text-foreground shadow-md backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/10 hover:text-accent disabled:opacity-40 [&>svg]:h-5 [&>svg]:w-5 !left-3 md:!left-5 !top-1/2"
            />
            <CarouselNext
              variant="outline"
              className="z-20 h-11 w-11 !-translate-y-1/2 rounded-full border-2 border-accent/70 bg-background/95 text-foreground shadow-md backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/10 hover:text-accent disabled:opacity-40 [&>svg]:h-5 [&>svg]:w-5 !right-3 md:!right-5 !top-1/2"
            />
          </Carousel>

          {/* Edge fades for polish */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-background to-transparent md:w-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-background to-transparent md:w-16"
            aria-hidden
          />
        </motion.div>

        <div className="mt-14 text-center md:mt-16">
          <Button variant="hero" size="lg" asChild>
            <Link to="/shop">Shop All Coffee</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
