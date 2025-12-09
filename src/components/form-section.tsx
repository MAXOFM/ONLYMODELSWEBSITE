"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, XCircle, Loader2 } from "lucide-react";

export function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    twitter: "",
    instagram: "",
    tiktok: "",
    onlyfans: "",
    phoneNumber: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showNotification, setShowNotification] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Remove spaces, dashes, parentheses, dots, and plus signs for validation
    const cleanedPhone = phone.replace(/[\s\-\(\)\.\+]/g, '');
    // Check if it contains only digits and has at least 10 digits (international format)
    const phoneRegex = /^\d{10,15}$/;
    return phoneRegex.test(cleanedPhone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate email in real-time
    if (name === "email") {
      if (value && !validateEmail(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }

    // Validate phone number in real-time
    if (name === "phoneNumber") {
      if (value && !validatePhone(value)) {
        setPhoneError("Please enter a valid phone number (10-15 digits)");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === "email" && e.target.value) {
      if (!validateEmail(e.target.value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
    if (e.target.name === "phoneNumber" && e.target.value) {
      if (!validatePhone(e.target.value)) {
        setPhoneError("Please enter a valid phone number (10-15 digits)");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.country || !formData.email || !formData.phoneNumber) {
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Validate phone number format
    if (!validatePhone(formData.phoneNumber)) {
      setPhoneError("Please enter a valid phone number (10-15 digits)");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setEmailError("");
    setPhoneError("");

    // Simulate form submission
    try {
      // TODO: Replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setShowNotification(true);
      setFormData({
        name: "",
        country: "",
        email: "",
        twitter: "",
        instagram: "",
        tiktok: "",
        onlyfans: "",
        phoneNumber: "",
        message: "",
      });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" data-section="apply" className="relative isolate px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-background opacity-90" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4">
            Models Apply Here
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl px-2">
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

                {/* <div>
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
                </div> */}

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
                    onBlur={handleBlur}
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border ${
                      emailError ? "border-red-400/50" : "border-white/10"
                    } bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all min-h-[44px]`}
                    placeholder="your.email@example.com"
                  />
                  {emailError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                    >
                      <XCircle className="w-3 h-3" />
                      {emailError}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    pattern="[\d\s\-\(\)\.\+]{10,}"
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border ${
                      phoneError ? "border-red-400/50" : "border-white/10"
                    } bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all min-h-[44px]`}
                    placeholder="+1 (123) 456-7890"
                  />
                  {phoneError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                    >
                      <XCircle className="w-3 h-3" />
                      {phoneError}
                    </motion.p>
                  )}
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



                {/* <div>
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
                </div> */}
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
                disabled={isSubmitting || !formData.name || !formData.country || !formData.email || !formData.phoneNumber}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-accent text-white font-semibold text-base sm:text-lg shadow-[0_0_30px_rgba(255,20,147,0.4)] hover:shadow-[0_0_40px_rgba(255,20,147,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[52px]"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Submit</span>
              </motion.button>

              {/* Cute Loading Status under button */}
              <AnimatePresence>
                {isSubmitting && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 flex flex-col items-center justify-center gap-3"
                  >
                    <div className="flex items-center gap-2 text-accent">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="text-sm font-medium">Submitting your application...</span>
                    </div>
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-accent"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-sm w-full mx-4"
          >
            <div
              className={`rounded-[20px] border ${
                submitStatus === "success"
                  ? "border-accent/30 bg-gradient-to-br from-background/95 to-background/90 shadow-[0_10px_40px_rgba(255,20,147,0.3)]"
                  : "border-red-400/30 bg-gradient-to-br from-background/95 to-background/90 shadow-[0_10px_40px_rgba(239,68,68,0.3)]"
              } backdrop-blur-xl p-4 flex items-start gap-3`}
            >
              {submitStatus === "success" ? (
                <>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Application Submitted!
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Thank you! We'll reach out to you within 24 hours.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-400/20 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Submission Failed
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                </>
              )}
              <button
                onClick={() => setShowNotification(false)}
                className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
              >
                <XCircle className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

