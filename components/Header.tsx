'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 drop-shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <Image src="/images/logo.png" alt="Sunnyland Family Daycare" width={160} height={80} className="h-12 sm:h-16 md:h-20 w-auto" />
        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="text-gray-700 hover:text-orange-500 transition-colors">{label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
          Contact Us
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-yellow-400 p-2 rounded-full"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors py-2">{label}</a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors mt-2 text-center">
              Contact Us
            </a>
          </nav>
        </div>
      )}
      {/* Cloud bottom edge — mobile */}
      <svg
        className="md:hidden absolute bottom-0 left-0 w-full pointer-events-none translate-y-full"
        viewBox="0 0 400 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        height={64}
        aria-hidden="true"
      >
        <path
          d="M0,0 Q50,64 100,0 Q150,64 200,0 Q250,64 300,0 Q350,64 400,0 Z"
          fill="white"
        />
      </svg>
      {/* Cloud bottom edge — desktop */}
      <svg
        className="hidden md:block absolute bottom-0 left-0 w-full pointer-events-none translate-y-full"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        height={48}
        aria-hidden="true"
      >
        <path
          d="M0,0 Q45,48 90,0 Q135,48 180,0 Q225,48 270,0 Q315,48 360,0 Q405,48 450,0 Q495,48 540,0 Q585,48 630,0 Q675,48 720,0 Q765,48 810,0 Q855,48 900,0 Q945,48 990,0 Q1035,48 1080,0 Q1125,48 1170,0 Q1215,48 1260,0 Q1305,48 1350,0 Q1395,48 1440,0 Z"
          fill="white"
        />
      </svg>
    </header>
  );
}
