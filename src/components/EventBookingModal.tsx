import { useEffect, useId, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";

const EVENT_TYPES = [
  "Private celebration",
  "Corporate / team event",
  "Coffee tasting / cupping",
  "Cultural gathering",
  "Other",
] as const;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  guestCount: string;
  eventType: string;
  message: string;
};

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredDate: "",
  guestCount: "",
  eventType: "",
  message: "",
};

export type EventBookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const EventBookingModal = ({ open, onOpenChange }: EventBookingModalProps) => {
  const baseId = useId();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setForm(emptyForm);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.trim()) return;
    setSubmitted(true);
  };

  const fid = (key: keyof FormState) => `${baseId}-${key}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto border-border bg-background p-6 sm:rounded-lg sm:p-8">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">Event booking request</DialogTitle>
          <DialogDescription className="font-sans text-sm text-muted-foreground">
            Mamokacha Gara — tell us about your event and we&apos;ll follow up with you shortly.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="space-y-4 py-4">
            <p className="font-sans text-sm leading-relaxed text-foreground">
              Thank you. Your booking request has been received. Our team will contact you soon to confirm details and availability.
            </p>
            <Button type="button" variant="hero" className="w-full sm:w-auto" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 pt-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={fid("firstName")} className="mb-2 block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  First name
                </label>
                <input
                  id={fid("firstName")}
                  className={inputClass}
                  value={form.firstName}
                  onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label htmlFor={fid("lastName")} className="mb-2 block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  Last name
                </label>
                <input
                  id={fid("lastName")}
                  className={inputClass}
                  value={form.lastName}
                  onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                  autoComplete="family-name"
                />
              </div>
            </div>
            <div>
              <label htmlFor={fid("email")} className="mb-2 block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                Email <span className="text-accent">*</span>
              </label>
              <input
                id={fid("email")}
                type="email"
                required
                className={inputClass}
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor={fid("phone")} className="mb-2 block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                Phone
              </label>
              <input
                id={fid("phone")}
                type="tel"
                className={inputClass}
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                autoComplete="tel"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={fid("preferredDate")} className="mb-2 block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  Preferred date
                </label>
                <input
                  id={fid("preferredDate")}
                  type="date"
                  className={inputClass}
                  value={form.preferredDate}
                  onChange={(e) => setForm((f) => ({ ...f, preferredDate: e.target.value }))}
                />
              </div>
              <div>
                <label htmlFor={fid("guestCount")} className="mb-2 block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  Estimated guests
                </label>
                <input
                  id={fid("guestCount")}
                  type="number"
                  min={1}
                  placeholder="e.g. 40"
                  className={inputClass}
                  value={form.guestCount}
                  onChange={(e) => setForm((f) => ({ ...f, guestCount: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <label htmlFor={fid("eventType")} className="mb-2 block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                Event type
              </label>
              <select
                id={fid("eventType")}
                className={cn(inputClass, "cursor-pointer appearance-none bg-background")}
                value={form.eventType}
                onChange={(e) => setForm((f) => ({ ...f, eventType: e.target.value }))}
              >
                <option value="">Select an option</option>
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={fid("message")} className="mb-2 block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                Details &amp; special requests
              </label>
              <textarea
                id={fid("message")}
                rows={4}
                className={cn(inputClass, "resize-none")}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell us about your occasion, timing, catering needs, or questions."
              />
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
              Submit booking request
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventBookingModal;
