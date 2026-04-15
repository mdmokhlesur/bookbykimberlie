"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50"
    >
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="relative h-12 md:h-16 w-48 md:w-64">
          <Image
            src="/logo.png"
            alt="Books by Kimberlie"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-primary font-medium transition-all hover:scale-105 active:scale-95"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:8305159818"
            className="flex items-center gap-2 rounded-full bg-primary hover:bg-primary-dark text-white px-8 py-3.5 font-bold transition-all shadow-xl hover:shadow-primary/20"
          >
            Free Consultation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 p-2 hover:bg-slate-50 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl absolute top-full left-0 w-full overflow-hidden rounded-b-2xl"
        >
          <div className="flex flex-col p-8 gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl text-slate-600 hover:text-primary font-heading transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:8305159818"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-primary text-white px-6 py-4 text-lg font-bold transition-colors shadow-lg shadow-primary/20"
            >
              Free Consultation
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
