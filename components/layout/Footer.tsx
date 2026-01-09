import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

import Image from 'next/image';

// ... imports

export function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image 
                  src={`${basePath}/logo.png`}
                  alt="Sweden Indoor Golf Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                SWEDEN <span className="text-primary">INDOOR GOLF</span>
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Linköpings hetaste inomhushall för golf. Upplev den trivsamma miljön i våra lokaler och fascineras av våra precisa simulatorer.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/swedenindoorgolf.se" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/swedenindoorgolf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Information</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/om-oss" className="hover:text-primary transition-colors">Om oss</Link></li>
              <li><Link href="/prislista" className="hover:text-primary transition-colors">Prislista</Link></li>
              <li><Link href="/tavlingar" className="hover:text-primary transition-colors">Tävlingar</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">Support</Link></li>
              <li><Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
              <li><Link href="/integritetspolicy" className="hover:text-primary transition-colors">Integritetspolicy</Link></li>
              <li><a href="https://premiumgolf.se" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Premium Golf</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Kontakt</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Industrigatan 5<br />582 77 Linköping</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>SMS +46 70 - 691 32 03</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@swedenindoorgolf.se</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Öppettider</h4>
             <p className="text-slate-400 text-sm">
              Alla dagar: <span className="text-white font-bold">05:00 - 24:00</span>
            </p>
             <p className="text-slate-500 text-xs mt-2">
              Bokning sker via MATCHi. Koden till dörren får du i bokningsbekräftelsen.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sweden Indoor Golf. All rights reserved.</p>
          <p>Built with modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
}
