'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Start', href: '/' },
  { name: 'Prislista', href: '/prislista' },
  { name: 'Öppettider', href: '/oppettider' },
  { name: 'Support', href: '/support' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Golfshop', href: '/golfshop' },
  { name: 'Tävlingar', href: '/tavlingar' },
];

import Image from 'next/image';

// ... imports

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // ... useEffect

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
           <div className="relative w-12 h-12">
             <Image 
               src={`${basePath}/logo.png`}
               alt="Sweden Indoor Golf Logo"
               fill
               className="object-contain"
             />
           </div>
           <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            SWEDEN <span className="text-primary group-hover:text-white transition-colors">INDOOR GOLF</span>
           </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://www.matchi.se/facilities/swedenindoorgolf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors transform hover:scale-105 active:scale-95"
          >
            BOKA BANA
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-100 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-t border-slate-800"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-slate-300 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.matchi.se/facilities/swedenindoorgolf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-5 py-3 bg-primary text-slate-950 font-bold rounded-lg hover:bg-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                BOKA BANA
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
