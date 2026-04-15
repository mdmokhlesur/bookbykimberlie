"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "How It Works", href: "#services" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const contactItems = [
  {
    name: "kimberlie@booksbykimberlie.com",
    href: "mailto:kimberlie@booksbykimberlie.com",
  },
  { name: "830-515-9818", href: "tel:8305159818" },
  { name: "830-730-4160", href: "tel:8307304160" },
  { name: "WhatsApp", href: "https://wa.me/8305159818" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 overflow-hidden border-t border-slate-200">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Books by Kimberlie"
                width={220}
                height={120}
                className="w-auto h-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate-500 text-xl leading-relaxed max-w-sm font-light">
              Remote bookkeeping for builders, creatives & businesses. From
              chaos to calm, one ledger at a time.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-bold text-[#8E4D64] text-lg tracking-[0.3em] uppercase mb-10">
              COMPANY
            </h4>
            <ul className="space-y-6">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-primary transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-[#8E4D64] text-lg tracking-[0.3em] uppercase mb-10">
              CONTACT
            </h4>
            <ul className="space-y-6">
              {contactItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-600 hover:text-primary transition-colors text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © 2026 Books by Kimberlie. All rights reserved.
          </p>
          <div className="flex gap-10">
            <Link
              href="#"
              className="text-slate-400 hover:text-primary transition-colors text-sm font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-primary transition-colors text-sm font-medium"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
