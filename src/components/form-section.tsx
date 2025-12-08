"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    twitter: "",
    instagram: "",
    tiktok: "",
    onlyfans: "",
    otherSocials: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    try {
      // TODO: Replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        country: "",
        email: "",
        twitter: "",
        instagram: "",
        tiktok: "",
        onlyfans: "",
        otherSocials: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative isolate px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-background opacity-90" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 max-[500px]:text-[25px]">
            Models Apply Here
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl px-2 max-[500px]:text-[15px]">
            Apply using the form below and one of our team members will reach out to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 bg-gradient-to-br from-background/80 via-background/60 to-background/80 p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_35px_140px_rgba(236,72,153,0.25)] backdrop-blur-xl"
        >
          {/* Background glow effects */}
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-accent/20 blur-[180px]" />
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-secondary/20 blur-[180px]" />
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-4 sm:space-y-5 md:space-y-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border border-white/10 bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all min-h-[44px]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    Country/Region <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border border-white/10 bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all min-h-[44px]"
                    placeholder="Enter your country"
                  />
                </div>

                <div>
                  <label htmlFor="twitter" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    Twitter Username
                  </label>
                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border border-white/10 bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all min-h-[44px]"
                    placeholder="@username"
                  />
                </div>

                <div>
                  <label htmlFor="otherSocials" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    Other Socials
                  </label>
                  <input
                    type="text"
                    id="otherSocials"
                    name="otherSocials"
                    value={formData.otherSocials}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border border-white/10 bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all min-h-[44px]"
                    placeholder="Other social media links"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border border-white/10 bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all min-h-[44px]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="instagram" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    Instagram Username
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border border-white/10 bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all min-h-[44px]"
                    placeholder="@username"
                  />
                </div>

                <div>
                  <label htmlFor="tiktok" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    TikTok Username
                  </label>
                  <input
                    type="text"
                    id="tiktok"
                    name="tiktok"
                    value={formData.tiktok}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border border-white/10 bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all min-h-[44px]"
                    placeholder="@username"
                  />
                </div>

                <div>
                  <label htmlFor="onlyfans" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    OnlyFans Link
                  </label>
                  <input
                    type="url"
                    id="onlyfans"
                    name="onlyfans"
                    value={formData.onlyfans}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border border-white/10 bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all min-h-[44px]"
                    placeholder="https://onlyfans.com/..."
                  />
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                Message <span className="text-muted-foreground text-xs font-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border border-white/10 bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none min-h-[120px] sm:min-h-[140px]"
                placeholder="Tell us about yourself..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-3 md:pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-accent text-white font-semibold text-base sm:text-lg shadow-[0_0_30px_rgba(255,20,147,0.4)] hover:shadow-[0_0_40px_rgba(255,20,147,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[52px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="text-sm sm:text-base">Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Submit</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 sm:mt-4 text-accent font-medium text-center text-sm sm:text-base px-2"
                >
                  Thank you! We'll reach out to you within 24 hours.
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 sm:mt-4 text-red-400 font-medium text-center text-sm sm:text-base px-2"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

