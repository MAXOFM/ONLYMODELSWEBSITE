
"use client";

import { Mail, MapPin, Phone, Send, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from next/link

const XLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const TikTokLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const TelegramLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const footerLinks = [
  { label: "How We work", href: "/how-we-work" },
  { label: "Referral", href: "/referral" },
  { label: "Blogs", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact us", href: "/#cta" },
];

const contactInfo = [
  { icon: Mail, text: "onlymodels.ca@gmail.com", href: "mailto:onlymodels.ca@gmail.com" },
  { icon: MapPin, text: "2955 Blvd. Saint-Martin O, Laval, QC H7T 2Y8", href: "https://www.google.com/maps/search/6926+Jarry+EAST,+Montreal,+H1P+3C1" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/onlymodels.ca/", label: "Instagram" },
  { icon: TikTokLogo, href: "https://www.tiktok.com/@onlymodelsusa", label: "TikTok" },
  { icon: XLogo, href: "https://x.com/onlymodelsca", label: "X (Twitter)" },
  { icon: TelegramLogo, href: "https://t.me/SaraAssistantOM", label: "Telegram" },
];

const WavePath = ({
  d,
  color,
  opacity,
  duration,
  delay,
  yOffset = 0,
}: {
  d: string;
  color: string;
  opacity: number;
  duration: number;
  delay: number;
  yOffset?: number;
}) => {
  // Ensure d is always a valid string
  if (!d || typeof d !== 'string') {
    return null;
  }
  
  return (
    <motion.path
      fill={color}
      fillOpacity={opacity}
      d={d}
      initial={{ x: "-50%" }}
      animate={{ x: "0%" }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
      style={{ y: yOffset }}
    />
  );
};

const FooterWaves = () => {
  // Wave paths designed to interleave and create depth
  const wavePath1 =
    "M0,60 C300,70 600,30 900,60 C1200,90 1500,50 1800,60 C2100,70 2400,30 2700,60 L2700,200 L0,200 Z";
  const wavePath2 =
    "M0,50 C400,20 800,80 1200,50 C1600,20 2000,80 2400,50 C2800,20 3200,80 3600,50 L3600,200 L0,200 Z";
  const wavePath3 =
    "M0,70 C250,90 500,50 750,70 C1000,90 1250,50 1500,70 C1750,90 2000,50 2250,70 L2250,200 L0,200 Z";

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[98%]">
      <svg
        className="relative block w-[200%] h-[120px] md:h-[180px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Layer 1 - Back */}
        <WavePath
          d={wavePath2}
          color="var(--wave-color-1)"
          opacity={0.4}
          duration={20}
          delay={0}
          yOffset={10}
        />
        {/* Layer 2 - Middle */}
        <WavePath
          d={wavePath3}
          color="var(--wave-color-2)"
          opacity={0.6}
          duration={15}
          delay={-2}
          yOffset={5}
        />
        {/* Layer 3 - Front */}
        <WavePath
          d={wavePath1}
          color="var(--wave-color-3)"
          opacity={1}
          duration={10}
          delay={-5}
        />
      </svg>
    </div>
  );
};

export function Footer() {
  return (
    <footer className="relative mt-48 max-[500px]:mt-20">
      {/* Theme-aware styles for waves and background */}
      <style jsx global>{`
        [data-theme="light"] footer {
          --footer-bg: #ffc0cb; /* Sakura Pink */
          --wave-color-1: #ffb7c5;
          --wave-color-2: #ffacc1;
          --wave-color-3: #ffc0cb;
          --footer-text: #d63384;
          --footer-text-muted: #e66ea8;
        }
        [data-theme="dark"] footer {
          --footer-bg: #1a0b14; /* Dark with pink hint */
          --wave-color-1: #4a1a36;
          --wave-color-2: #66224a;
          --wave-color-3: #1a0b14;
          --footer-text: #f8d7da;
          --footer-text-muted: #cbb2c0;
        }
      `}</style>

      <div
        className="relative pt-12 pb-12"
        style={{ backgroundColor: "var(--footer-bg)" }}
      >
        <FooterWaves />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 max-[500px]:gap-[6px]">
          {/* Logo */}
          <div className="w-48 transform transition-transform hover:scale-105 duration-300">
            <Link href="/#home">
              <img
                src="/assets/logos/footer-logo.png"
                alt="OnlyModels logo"
                className="h-auto w-full object-contain drop-shadow-lg"
              />
            
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-nowrap justify-center gap-3 md:gap-8 text-[10px] md:text-sm font-bold uppercase tracking-wider md:tracking-widest">
            {footerLinks.map((link) => (
              <Link // Changed <a> to Link
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-white"
                style={{ color: "var(--footer-text)" }}
              >
                {link.label}
              </Link> // Changed </a> to </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{ color: "var(--footer-text)" }}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-2 text-sm" style={{ color: "var(--footer-text-muted)" }}>
            {contactInfo.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="flex items-center  gap-2 transition-colors duration-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-sm font-medium mt-4 text-center px-4"
            style={{ color: "var(--footer-text-muted)" }}
          >
            Copyright © OnlyModels Management LLC {new Date().getFullYear()} – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
