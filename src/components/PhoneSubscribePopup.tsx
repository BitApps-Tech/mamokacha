import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "mamokacha-stay-updated-popup";
const SHOW_DELAY_MS = 3500;

/** Bottom-left phone capture modal; shows once per browser unless cleared. */
const PhoneSubscribePopup = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const dismiss = useCallback((reason: "dismissed" | "subscribed") => {
    try {
      localStorage.setItem(STORAGE_KEY, reason);
    } catch {
      /* ignore */
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let alreadySeen = false;
    try {
      alreadySeen = Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      /* Storage unavailable — still show the popup; we just can't persist dismiss */
      alreadySeen = false;
    }

    // Dev / QA: ?stayUpdated=1 forces the popup to show again for this session
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.has("stayUpdated")) {
        localStorage.removeItem(STORAGE_KEY);
        alreadySeen = false;
      }
    } catch {
      /* ignore */
    }

    if (alreadySeen) return () => {};

    const t = window.setTimeout(() => {
      if (!cancelled) setOpen(true);
    }, SHOW_DELAY_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss("dismissed");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 9) {
      toast.error("Please enter a valid mobile number.");
      return;
    }
    toast.success("You're on the list. We'll be in touch!");
    dismiss("subscribed");
    setPhone("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="phone-subscribe-popup"
          role="dialog"
          aria-labelledby="stay-updated-title"
          aria-describedby="stay-updated-desc"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className={cn(
            "pointer-events-auto fixed bottom-4 left-4 z-[100] sm:bottom-6 sm:left-6",
            "w-[min(100vw-2rem,17.5rem)] sm:w-[min(100vw-3rem,22rem)]",
            "rounded-lg border border-accent/45 p-3.5 shadow-2xl shadow-black/25 sm:rounded-xl sm:p-5",
            "bg-gradient-to-b from-white/38 to-neutral-900/14 backdrop-blur-xl backdrop-saturate-150",
            "ring-1 ring-inset ring-accent/25"
          )}
        >
          <button
            type="button"
            onClick={() => dismiss("dismissed")}
            className="absolute right-2 top-2 rounded-md p-1 text-accent/70 transition-colors hover:bg-accent/10 hover:text-accent sm:right-3 sm:top-3"
            aria-label="Close"
          >
            <X size={16} className="sm:h-[18px] sm:w-[18px]" />
          </button>

          <div className="mb-3 flex flex-col items-center border-b border-accent/25 pb-3 text-center sm:mb-4 sm:pb-4">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 ring-2 ring-accent/60 ring-offset-1 ring-offset-white/50 sm:mb-3 sm:h-12 sm:w-12">
              <Phone
                className="h-4 w-4 fill-accent text-accent sm:h-5 sm:w-5"
                strokeWidth={1.25}
                aria-hidden
              />
            </div>
            <h2 id="stay-updated-title" className="font-serif text-base font-semibold tracking-wide text-accent sm:text-lg">
              Stay Updated!
            </h2>
            <p id="stay-updated-desc" className="mt-1.5 font-sans text-[11px] leading-relaxed text-accent/85 sm:mt-2 sm:text-xs">
              Get updates about our events and offers from Mamokacha.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
            <div className="flex gap-1.5 sm:gap-2">
              <div className="flex h-9 shrink-0 items-center justify-center rounded-md border border-accent/45 bg-accent/20 px-2 font-sans text-xs tabular-nums text-accent backdrop-blur-sm sm:h-10 sm:px-3 sm:text-sm">
                +251
              </div>
              <Input
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="9XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, "").slice(0, 9))}
                className="h-9 flex-1 border border-accent/40 bg-white/55 font-sans text-xs text-accent placeholder:text-accent/45 backdrop-blur-sm focus-visible:border-accent focus-visible:ring-accent sm:h-10 sm:text-sm"
              />
            </div>
            <Button
              type="submit"
              variant="gold"
              className="h-9 w-full rounded-md border border-accent/50 font-sans text-[10px] uppercase tracking-widest shadow-sm shadow-accent/25 sm:h-10 sm:text-xs"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhoneSubscribePopup;
