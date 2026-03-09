import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import productSignature from "@/assets/product-signature.jpg";
import productSingleOrigin from "@/assets/product-single-origin.jpg";
import productEspresso from "@/assets/product-espresso.jpg";
import productSubscription from "@/assets/product-subscription.jpg";

const products = [
  {
    name: "Signature Blend",
    image: productSignature,
    roast: "Medium Roast",
    notes: "Chocolate, caramel, smooth finish",
    price: "$18.00",
  },
  {
    name: "Single Origin Ethiopia",
    image: productSingleOrigin,
    roast: "Light Roast",
    notes: "Floral, citrus, tea-like body",
    price: "$22.00",
  },
  {
    name: "Espresso Roast",
    image: productEspresso,
    roast: "Dark Roast",
    notes: "Bold, rich crema, dark chocolate",
    price: "$16.00",
  },
  {
    name: "Coffee Subscription",
    image: productSubscription,
    roast: "Your Choice",
    notes: "Fresh beans delivered monthly",
    price: "From $14/mo",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Our Collection</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Featured Coffee</h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group hover-lift cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-card mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <p className="text-xs tracking-widest uppercase font-sans text-accent mb-2">{product.roast}</p>
                <h3 className="font-serif text-xl text-foreground mb-2">{product.name}</h3>
                <p className="text-sm font-sans text-muted-foreground mb-3">{product.notes}</p>
                <p className="font-serif text-lg text-foreground mb-4">{product.price}</p>
                <Button variant="outline" size="sm" className="text-xs tracking-widest uppercase rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background">
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <Link to="/shop">Shop All Coffee</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
