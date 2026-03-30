import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import coffeeFarmImg from "@/assets/coffee-farm.jpg";
import mamoImg from "@/assets/mamo.jpg";
import roastingImg from "@/assets/roasting.jpg";
import cafeImg from "@/assets/cafe-interior.jpg";

const timeline = [
  { year: "2015", title: "The Seed is Planted", description: "Mamokacha was born from a deep love for Ethiopian coffee heritage and a vision to share it with the world." },
  { year: "2017", title: "First Café Opens", description: "Our flagship café opened its doors in Addis Ababa, bringing specialty coffee culture to the heart of Ethiopia." },
  { year: "2019", title: "Roasting Mastery", description: "We launched our own roasting facility, perfecting small-batch roast profiles for every origin." },
  { year: "2021", title: "Growing the Ecosystem", description: "Mamokacha expanded into agro-processing, dairy, and event hosting — building a complete coffee ecosystem." },
  { year: "2024", title: "A Global Vision", description: "Today, Mamokacha stands as a premium Ethiopian brand with multiple cafés and a growing international presence." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coffeeFarmImg})` }} />
        <div className="absolute inset-0 bg-espresso/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6 text-center"
        >
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-accent">About Mamokacha</p>
          <h1 className="mb-4 font-serif text-4xl text-background md:text-6xl">Inspiring History</h1>
          <p className="mx-auto max-w-xl font-sans text-base text-background/85 md:text-lg">
            Mamokacha PLC — quality products, customer satisfaction, and service you can rely on.
          </p>
        </motion.div>
      </section>

      {/* Lead */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-lg leading-relaxed text-muted-foreground"
          >
            Inspired by the legacy of{" "}
            <span className="font-medium text-foreground">Mamo Yenberberu (Mamo Kacha)</span>, we carry forward a spirit of
            enterprise, precision, and care—across coffee, agro-processing, dairy, hospitality, and more.
          </motion.p>
        </div>
      </section>

      {/* Mission / Vision / Values — interactive tabs */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="mb-3 font-sans text-xs uppercase tracking-widest text-accent">Mamokacha PLC</p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Mission, Vision &amp; Values</h2>
            <div className="gold-divider mx-auto mt-6" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid h-auto w-full grid-cols-1 gap-2 rounded-none border border-border bg-background/80 p-2 md:grid-cols-3">
                <TabsTrigger
                  value="mission"
                  className="rounded-sm py-3 font-sans text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Mission
                </TabsTrigger>
                <TabsTrigger
                  value="vision"
                  className="rounded-sm py-3 font-sans text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Vision
                </TabsTrigger>
                <TabsTrigger
                  value="values"
                  className="rounded-sm py-3 font-sans text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Values
                </TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="mt-8 border border-border/80 bg-background/50 p-8 md:p-10">
                <p className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
                  &ldquo;MamoKacha aims to deliver products and services of high quality. In order to accomplish our mission, we
                  have established an environment that constantly supports our team, for them to provide services that are
                  exceptional.&rdquo;
                </p>
              </TabsContent>
              <TabsContent value="vision" className="mt-8 border border-border/80 bg-background/50 p-8 md:p-10">
                <p className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
                  &ldquo;To be the leading, fast moving consumer goods distributor and manufacturer in Ethiopia.&rdquo;
                </p>
              </TabsContent>
              <TabsContent value="values" className="mt-8 border border-border/80 bg-background/50 p-8 md:p-10">
                <ul className="space-y-6 text-left">
                  <li className="flex gap-4">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <p className="font-sans leading-relaxed text-muted-foreground">
                      We aim to be recognized for the <strong className="font-medium text-foreground">quality and effectiveness</strong>{" "}
                      of our products.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <p className="font-sans leading-relaxed text-muted-foreground">
                      We strive to develop our people by providing an environment that fosters{" "}
                      <strong className="font-medium text-foreground">personal development</strong> and{" "}
                      <strong className="font-medium text-foreground">professional growth</strong>.
                    </p>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-sm border border-border shadow-lg"
          >
            <img
              src={mamoImg}
              alt="Mr. Mamo Yenberberu (Mamo Kacha)"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-sans text-xs uppercase tracking-widest text-cream/90">
              Heritage &amp; hospitality
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="mb-3 font-sans text-xs uppercase tracking-widest text-accent">Founder &amp; visionary</p>
            <h2 className="mb-4 font-serif text-3xl text-foreground md:text-4xl">Mr. Mamo Yenberberu</h2>
            <div className="gold-divider !mx-0 mb-6" />
            <p className="mb-4 font-sans leading-relaxed text-muted-foreground">
              Mr. Mamo Yenberberu—known as <strong className="text-foreground">Mamo Kacha</strong>—was a self-made entrepreneur
              and a transportation pioneer who manufactured buses and ran a fleet that became a household name across Ethiopia.
            </p>
            <p className="font-sans leading-relaxed text-muted-foreground">
              His eye for mechanics, courage to challenge giants like Fiat, and dedication to moving people safely shaped a
              legacy that still inspires how Mamokacha approaches quality and service today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History — interactive accordion (content from mamokachaplc.com/about-mamokacha/) */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-3 font-sans text-xs uppercase tracking-widest text-accent">History</p>
            <h2 className="font-serif text-3xl text-foreground md:text-5xl">How it all began</h2>
            <div className="gold-divider mx-auto mt-6" />
            <p className="mt-6 font-sans text-sm text-muted-foreground">
              Open each chapter to explore the journey—from a young orphan in Addis Ababa to a name synonymous with speed,
              ingenuity, and resilience.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="early" className="border border-border bg-background/60 px-2">
                <AccordionTrigger className="font-serif text-lg hover:no-underline md:text-xl">
                  Early years &amp; the road to Addis
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-6 font-sans text-sm leading-relaxed text-muted-foreground">
                  <p>
                    At a young age, Mamo Yenberberu moved to Illubabor, Gore, when his father relocated for work. Soon after,
                    his father fell at the battle of Maychew defending Ethiopia from Italian forces, and his mother passed
                    from illness—leaving Mamo an orphan at twelve.
                  </p>
                  <p>
                    Hearing that his father had built a house in Addis Ababa, in <strong className="text-foreground">1937</strong>{" "}
                    Mamo set out for the capital. He worked as a dishwasher and messenger for a small café, paid in food, and
                    began to imagine independence.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="beginning" className="border border-border bg-background/60 px-2">
                <AccordionTrigger className="font-serif text-lg hover:no-underline md:text-xl">
                  The beginning — carriages &amp; bicycles
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-6 font-sans text-sm leading-relaxed text-muted-foreground">
                  <p>
                    A carpenter who valued Mamo gave him a chariot-like vehicle. Mamo used it to carry children from Seytan
                    Bet and Tewodros roundabout to the Telecommunication Office for a fare—then reinvested in a second
                    carriage, and later a bicycle without pedals or chain, fitted with wheels he crafted himself, offering
                    neighborhood tours.
                  </p>
                  <p>
                    An Italian official noticed his diligence and helped him buy <strong className="text-foreground">twenty bicycles</strong> from
                    Mistewa. Mamo rented them out and grew his means.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="kacha" className="border border-border bg-background/60 px-2">
                <AccordionTrigger className="font-serif text-lg hover:no-underline md:text-xl">
                  Mamo puts his name on transportation — &ldquo;Kacha&rdquo;
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-6 font-sans text-sm leading-relaxed text-muted-foreground">
                  <p>
                    As the Italian army departed, Mamo bought a pickup for <strong className="text-foreground">180 birr</strong> and ran passengers
                    from Addis Ababa to Wolkite—often in two days or less when others needed three. People chose Mamo because he
                    was fast.
                  </p>
                  <p>
                    For that speed he earned the nickname <strong className="text-foreground">Kacha</strong>—after a swift Italian military plane. He
                    named his organization <strong className="text-foreground">Mamo-Kacha</strong>, the name that endures today.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fiat" className="border border-border bg-background/60 px-2">
                <AccordionTrigger className="font-serif text-lg hover:no-underline md:text-xl">
                  MamoKacha to the rescue — the Fiat buses
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-6 font-sans text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Emperor Haile Selassie&apos;s government ordered buses from Fiat for Anbessa. When the buses began crashing,
                    Mamo suspected the design. Following one bus toward Shashamene and beyond, he witnessed a front tire blow
                    and traced the fault: <strong className="text-foreground">weight at the front</strong>—engine and luggage both forward.
                  </p>
                  <p>
                    He flew to Italy, insisted on seeing Fiat&apos;s leadership, and explained the flaw. After debate, engineers
                    built a corrected bus—moving luggage rearward—and the fix held. Fiat allowed Mamo to correct all buses sent
                    to Ethiopia and awarded him a <strong className="text-foreground">Mercedes 220</strong> for his insight.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="derg" className="border border-border bg-background/60 px-2">
                <AccordionTrigger className="font-serif text-lg hover:no-underline md:text-xl">
                  The 1970s — resilience under the Derg
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-6 font-sans text-sm leading-relaxed text-muted-foreground">
                  <p>
                    When the Derg regime seized properties, Mamo—like many who had built everything through work—was constrained.
                    His company struggled under a Workers&apos; Association until buses had to be sold to pay salaries.
                  </p>
                  <p>
                    Recognizing that only Mamo could run the business effectively, the regime eventually{" "}
                    <strong className="text-foreground">returned the enterprise to him</strong>. He led it until his passing—proof of endurance
                    matched to the same clarity he brought to every mechanical puzzle before it.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Timeline — design unchanged */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">The Mamokacha Timeline</h2>
            <div className="gold-divider mt-6" />
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border hidden md:block" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-accent font-serif text-2xl">{item.year}</span>
                  <h3 className="font-serif text-xl text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-accent border-4 border-background absolute left-1/2 -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roasting & Café Images */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden group"
          >
            <img src={roastingImg} alt="Coffee roasting" className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-espresso/40 flex items-end p-8">
              <h3 className="font-serif text-2xl text-background">Craft Roasting</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden group"
          >
            <img src={cafeImg} alt="Mamokacha café" className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-espresso/40 flex items-end p-8">
              <h3 className="font-serif text-2xl text-background">Modern Café Culture</h3>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
