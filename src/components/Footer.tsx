"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative h-16 w-56">
              <Image
                src="/logo.png"
                alt="Books by Kimberlie"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-slate-600 leading-relaxed font-medium">
              Kimberlie Gerstner <br />
              <span className="text-primary text-sm font-bold uppercase tracking-wider">Certified Bookkeeper & CFO Expert</span>
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Delivering battle-tested financial control for builders and creatives nationwide.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 border border-slate-100 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-xl mb-6">Get In Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-slate-600">
                <MapPin className="text-secondary flex-shrink-0" size={20} />
                <span>Remote Bookkeeping <br /> Serving Clients Nationwide</span>
              </li>
              <li className="flex items-center gap-4 text-slate-600">
                <Phone className="text-secondary flex-shrink-0" size={20} />
                <a href="tel:8305159818" className="hover:text-primary transition-colors">830-515-9818</a>
              </li>
              <li className="flex items-center gap-4 text-slate-600">
                <Mail className="text-secondary flex-shrink-0" size={20} />
                <a href="mailto:kimberlie@booksbykimberlie.com" className="hover:text-primary transition-colors">kimberlie@booksbykimberlie.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-xl mb-6">Stay in the Loop</h4>
            <p className="text-slate-600 mb-6 text-sm">
              Helpful bookkeeping tips, money wins, and cheerful updates.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="your@email.com"
                className="bg-slate-50 border-slate-200 rounded-xl px-4 py-6 focus:ring-primary h-12 text-slate-900"
              />
              <Button className="w-full bg-primary hover:bg-primary-dark rounded-xl py-6 h-12 font-bold shadow-lg shadow-primary/10 transition-all font-body">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Books by Kimberlie. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
