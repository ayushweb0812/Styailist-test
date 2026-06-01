import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

export default function LeadModalContent({
  onCloseAnimationEnd,
}: {
  onCloseAnimationEnd?: () => void;
}) {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    company_name: "",
  });

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

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

  const canProceed = !!formData.email && !!formData.phone_number && !!formData.company_name;

  return (
    <DialogContent
      className="w-[calc(100%-2rem)] sm:w-full sm:max-w-lg p-0 overflow-hidden border-0 rounded-3xl"
      onAnimationEnd={onCloseAnimationEnd}
    >
      {!submitted ? (
        <>
          <div className="px-5 sm:px-8 pt-6 pb-0">
            <DialogHeader>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                  Sign Up
                </span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <DialogTitle className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-1">
                  Let's set up your <span className="text-gradient-primary">account</span>
                </DialogTitle>
                <DialogDescription className="text-foreground/60 text-sm">
                  Enter your credentials to get started.
                </DialogDescription>
              </motion.div>
            </DialogHeader>
          </div>

          <form
            ref={formRef}
            className="px-5 sm:px-8 pb-6 sm:pb-8"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="relative mt-6 min-h-[280px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
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
              </motion.div>
            </div>

            <div className="flex items-center justify-end mt-6 gap-3">
              <button
                type="submit"
                disabled={!canProceed || loading}
                className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 text-sm font-medium transition-all outline-none disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:shadow-glow"
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
                ) : (
                  "Submit"
                )}
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs group-hover:rotate-45 transition-transform bg-white/20 text-white">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </button>
            </div>

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
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center py-14 px-8 flex items-center justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 text-green-600 flex items-center justify-center mx-auto">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </DialogContent>
  );
}
