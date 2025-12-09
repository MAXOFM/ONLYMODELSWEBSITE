"use client";

import React from 'react';
import Link from "next/link";

export function ReferButton({ className }: { className?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const selector = '[data-section="apply"]';
    const element = document.querySelector(selector) ?? document.getElementById('apply');
    if (element) {
      const headerOffset = 120;
      const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <Link href="#apply" onClick={handleClick} className={`refer-button ${className || ""}`}>
      Apply Now
      <div className="refer-button-effect">
        <div />
      </div>
    </Link>
  );
}
