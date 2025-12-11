"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';

export function ReferButton({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  // Handle hash scroll after navigation to home page
  useEffect(() => {
    if (pathname === '/') {
      // Check if we have a hash in the URL
      const hash = window.location.hash;
      if (hash === '#apply') {
        const scrollToForm = () => {
          const selector = '[data-section="apply"]';
          const element = document.querySelector(selector) ?? document.getElementById('apply');
          if (element) {
            const headerOffset = 120;
            const elementTop = element.getBoundingClientRect().top;
            const elementPosition = elementTop + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({ 
              top: Math.max(0, offsetPosition), 
              behavior: 'smooth' 
            });
          }
        };
        // Wait for page to be fully rendered
        setTimeout(scrollToForm, 300);
      }
    }
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const scrollToForm = () => {
      const selector = '[data-section="apply"]';
      const element = document.querySelector(selector) ?? document.getElementById('apply');
      
      if (element) {
        const headerOffset = 120;
        const elementTop = element.getBoundingClientRect().top;
        const elementPosition = elementTop + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({ 
          top: Math.max(0, offsetPosition), 
          behavior: 'smooth' 
        });
      } else {
        // Retry after a short delay if element not found (for dynamic content)
        setTimeout(() => {
          const retryElement = document.querySelector(selector) ?? document.getElementById('apply');
          if (retryElement) {
            const headerOffset = 120;
            const elementTop = retryElement.getBoundingClientRect().top;
            const elementPosition = elementTop + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({ 
              top: Math.max(0, offsetPosition), 
              behavior: 'smooth' 
            });
          } else {
            // If still not found, navigate to home page with hash
            if (pathname !== '/') {
              router.push('/#apply');
              setTimeout(() => {
                const formElement = document.querySelector(selector) ?? document.getElementById('apply');
                if (formElement) {
                  const headerOffset = 120;
                  const elementTop = formElement.getBoundingClientRect().top;
                  const elementPosition = elementTop + window.scrollY;
                  const offsetPosition = elementPosition - headerOffset;
                  window.scrollTo({ 
                    top: Math.max(0, offsetPosition), 
                    behavior: 'smooth' 
                  });
                }
              }, 100);
            }
          }
        }, 100);
      }
    };
    
    // If we're not on the home page, navigate first
    if (pathname !== '/') {
      // Navigate to home and set hash
      router.push('/');
      // Set hash after a brief delay to ensure navigation started
      setTimeout(() => {
        window.location.hash = '#apply';
        // Scroll after hash is set
        setTimeout(() => {
          const formSelector = '[data-section="apply"]';
          const formElement = document.querySelector(formSelector) ?? document.getElementById('apply');
          if (formElement) {
            const headerOffset = 120;
            const elementTop = formElement.getBoundingClientRect().top;
            const elementPosition = elementTop + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({ 
              top: Math.max(0, offsetPosition), 
              behavior: 'smooth' 
            });
          }
        }, 200);
      }, 100);
    } else {
      // Small delay to ensure any ongoing animations/transitions don't interfere
      requestAnimationFrame(() => {
        scrollToForm();
      });
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
