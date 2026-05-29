import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

type Step = 1 | 2;
const TOTAL_STEPS = 2;

const stepCopy: Record<Step, { title: React.ReactNode; subtitle: string }> = {
  1: {
    title: (
      <>
        Let's set up your <span className="text-gradient-primary">account</span>
      </>
    ),
    subtitle: "Enter your credentials to get started.",
  },
  2: {
    title: (
      <>
        Tell us about your <span className="text-gradient-primary">brand</span>
      </>
    ),
    subtitle: "A few details so we can personalise your experience.",
  },
};

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function LeadModalContent({
  onCloseAnimationEnd,
}: {
  onCloseAnimationEnd?: () => void;
}) {
  const [step, setStep] = useState<Step>(1);
  const [dir, setDir] = useState(1);
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // form data persisted across steps
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    company_name: "",
    coupon_code: "",
    message: "",
  });

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const goTo = (next: Step) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResult("Sending…");

    const data = new FormData();
    data.append("access_key", "27c6f6b6-6e86-4deb-b893-24714c7f2296");
    Object.entries(formData).forEach(([k, v]) => {
      if (v) data.append(k, v);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await response.json();

      if (json.success) {
        setResult("Form Submitted Successfully");
        setSubmitted(true);
        setFormData({
          email: "",
          phone_number: "",
          company_name: "",
          coupon_code: "",
          message: "",
        });
        window.location.href = "https://calendly.com/sanyogita-sghsglobal/30min";
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ---- validation per step ---- */
  const canProceed = (s: Step): boolean => {
    if (s === 1) return !!formData.email && !!formData.phone_number && !!formData.company_name;
    if (s === 2) return !!formData.message;
    return true;
  };

  const progressPercent = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  return (
    <DialogContent
      className="w-[calc(100%-2rem)] sm:w-full sm:max-w-lg p-0 overflow-hidden border-0 rounded-3xl"
      onAnimationEnd={onCloseAnimationEnd}
    >
      {!submitted ? (
        <>
          {/* ── Progress bar (top edge) ── */}
          <div className="h-1 w-full bg-foreground/5 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full"
              initial={false}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* ── Header ── */}
          <div className="px-5 sm:px-8 pt-6 pb-0">
            <DialogHeader>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                  Step {step} of {TOTAL_STEPS}
                </span>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <DialogTitle className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-1">
                    {stepCopy[step].title}
                  </DialogTitle>
                  <DialogDescription className="text-foreground/60 text-sm">
                    {stepCopy[step].subtitle}
                  </DialogDescription>
                </motion.div>
              </AnimatePresence>
            </DialogHeader>
          </div>

          {/* ── Step content ── */}
          <form
            ref={formRef}
            className="px-5 sm:px-8 pb-6 sm:pb-8"
            onSubmit={(e) => {
              e.preventDefault();
              if (step < 2) goTo((step + 1) as Step);
              else handleSubmit();
            }}
          >
            <div className="relative mt-6 min-h-[280px]">
              <AnimatePresence initial={false} mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4"
                >
                  {step === 1 && (
                    <>
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="signup-email" className="text-sm font-medium text-ink">
                          Email <span className="text-neon-pink">*</span>
                        </label>
                        <input
                          id="signup-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="you@company.com"
                          className="w-full h-12 px-4 rounded-xl bg-white/50 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent transition-all text-ink placeholder:text-foreground/40"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="signup-phone" className="text-sm font-medium text-ink">
                          Phone Number <span className="text-neon-pink">*</span>
                        </label>
                        <input
                          id="signup-phone"
                          type="tel"
                          name="phone_number"
                          required
                          value={formData.phone_number}
                          onChange={(e) => update("phone_number", e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full h-12 px-4 rounded-xl bg-white/50 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent transition-all text-ink placeholder:text-foreground/40"
                        />
                      </div>

                      {/* Company */}
                      <div className="space-y-1.5">
                        <label htmlFor="signup-company" className="text-sm font-medium text-ink">
                          Company / Brand Name <span className="text-neon-pink">*</span>
                        </label>
                        <input
                          id="signup-company"
                          type="text"
                          name="company_name"
                          required
                          value={formData.company_name}
                          onChange={(e) => update("company_name", e.target.value)}
                          placeholder="Acme Fashion Co."
                          className="w-full h-12 px-4 rounded-xl bg-white/50 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent transition-all text-ink placeholder:text-foreground/40"
                        />
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      {/* Coupon */}
                      <div className="space-y-1.5">
                        <label htmlFor="signup-coupon" className="text-sm font-medium text-ink">
                          Coupon / Referral Code
                        </label>
                        <input
                          id="signup-coupon"
                          type="text"
                          name="coupon_code"
                          value={formData.coupon_code}
                          onChange={(e) => update("coupon_code", e.target.value)}
                          placeholder="STYLE2026"
                          className="w-full h-12 px-4 rounded-xl bg-white/50 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent transition-all text-ink placeholder:text-foreground/40"
                        />
                        <p className="text-[11px] text-foreground/50 pl-1">
                          Optional — enter if you have one
                        </p>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label htmlFor="signup-message" className="text-sm font-medium text-ink">
                          Message <span className="text-neon-pink">*</span>
                        </label>
                        <textarea
                          id="signup-message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={(e) => update("message", e.target.value)}
                          placeholder="Tell us about your brand and what you're looking for…"
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl bg-white/50 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent transition-all text-ink placeholder:text-foreground/40 resize-none"
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Navigation buttons ── */}
            <div className="flex items-center justify-between mt-6 gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => goTo((step - 1) as Step)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-ink transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                type="submit"
                disabled={!canProceed(step) || loading}
                className={`group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 text-sm font-medium transition-all outline-none disabled:opacity-40 disabled:cursor-not-allowed ${
                  step === 2
                    ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:shadow-glow"
                    : "bg-ink text-background hover:shadow-glow"
                }`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Submitting…
                  </span>
                ) : step === 2 ? (
                  "Submit"
                ) : (
                  "Continue"
                )}
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs group-hover:rotate-45 transition-transform ${
                    step === 2 ? "bg-white/20 text-white" : "bg-background text-ink"
                  }`}
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </button>
            </div>

            {/* Result message */}
            {result && !submitted && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-foreground/60 mt-4"
              >
                {result}
              </motion.p>
            )}
          </form>
        </>
      ) : (
        /* ── Success state ── */
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center py-14 px-8 space-y-4"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 text-green-600 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-semibold text-ink">You're all set!</h3>
          <p className="text-foreground/70 text-base max-w-sm mx-auto">
            We'll be in touch shortly to get your store set up with Styailist. Check your inbox for
            next steps.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-foreground/50">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Confirmation sent
            </span>
          </div>
        </motion.div>
      )}
    </DialogContent>
  );
}
