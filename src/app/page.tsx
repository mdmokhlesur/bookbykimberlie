"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, Variants } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  FileText,
  Heart,
  Loader2,
  PieChart,
  Shield,
  Star,
  Users,
  Zap,
  Check,
  Phone,
  ArrowRight,
  Mail,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

/* ─── Data ─── */
const detailedServices = [
  {
    title: "Transaction Recording",
    desc: "Record and organize every financial transaction accurately.",
    icon: Calculator,
    image: "/payment-processing.png",
  },
  {
    title: "Smart Categorization",
    desc: "Ensure income and expenses are categorized for maximum tax benefit.",
    icon: PieChart,
    image: "/account-receivable.png",
  },
  {
    title: "Account Reconciliation",
    desc: "Bank and credit card accounts matched to the penny, every month.",
    icon: Shield,
    image: "/account-payable.png",
  },
  {
    title: "AP & AR Management",
    desc: "Expertly manage your bills and invoices to keep cash flowing.",
    icon: FileText,
    image: "/account-receivable.png",
  },
  {
    title: "Financial Reporting",
    desc: "Clear, understandable reports that show your business health.",
    icon: PieChart,
    image: "/account-payable.png",
  },
  {
    title: "Cleanup & Audit Prep",
    desc: "Identify errors and keep your records perfectly organized for tax time.",
    icon: Heart,
    image: "/payment-processing.png",
  },
];

const industries = [
  "Construction",
  "Hospitality",
  "Banking",
  "Tech",
  "Service Industries",
];

const testimonials = [
  {
    text: "Kimberlie's bookkeeping brought clarity to my chaotic finances—now I actually enjoy reviewing my numbers each month.",
    rating: 5,
    name: "Alex M.",
    role: "Contractor, Vermont",
    image:
      "https://ui-avatars.com/api/?name=Alex+M&background=C96C74&color=fff",
  },
  {
    text: "Finally a bookkeeper who explains things in plain English. I feel confident about my finances for the first time.",
    rating: 5,
    name: "David R.",
    role: "Restaurant Owner",
    image:
      "https://ui-avatars.com/api/?name=David+R&background=3fa27a&color=fff",
  },
  {
    text: "With 30 years of experience, she completely transformed how we view our cash flow. Truly expert service.",
    rating: 5,
    name: "Sarah T.",
    role: "Freelance Designer",
    image:
      "https://ui-avatars.com/api/?name=Sarah+T&background=C96C74&color=fff",
  },
];

/* ─── Animation Variants ─── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ─── Main Page ─── */
export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-body text-slate-900">
      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-40 pb-20 overflow-hidden bg-white"
      >
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-start text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary/20 bg-white text-primary text-sm font-bold mb-12 shadow-sm mt-8"
            >
              Remote Bookkeeping
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-heading font-medium tracking-tight text-slate-900 leading-[1.1] mb-8"
            >
              From <span className="italic font-normal">chaos</span> <br />
              to calm, <span className="italic font-normal">one</span> <br />
              <span className="italic font-normal">ledger</span> at a time.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[#8E4D64] mb-12 leading-relaxed font-medium max-w-3xl"
            >
              Remote bookkeeping for builders, creatives & businesses — so you
              can focus on growing what you love.{" "}
              <span className="block mt-2 font-bold">
                No spreadsheet nightmares, just crystal-clear numbers.
              </span>
            </motion.p>

            {/* Trust Section */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-12"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-slate-100"
                  >
                    <Image
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="Client"
                      width={48}
                      height={48}
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#DAA520] text-[#DAA520]"
                    />
                  ))}
                </div>
                <p className="text-slate-900 font-bold text-lg">
                  <span className="text-slate-900">200+ clients</span> trust
                  Kimberlie
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="mb-20">
              <a
                href="tel:8305159818"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full bg-white text-slate-600 border border-slate-100 shadow-xl hover:shadow-2xl transition-all h-20 px-20 text-xl font-medium flex items-center gap-2 group",
                )}
              >
                Get a Free Consultation
              </a>
            </motion.div>

            {/* Static Stats Cards - Full Width Scale */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            >
              {[
                { label: "Years Exp.", value: "30+" },
                { label: "Happy Clients", value: "200+" },
                { label: "Remote", value: "100%" },
                { label: "Hidden Fees", value: "$0" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-12 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all"
                >
                  <div className="text-6xl font-heading font-bold mb-2 text-slate-800">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-base font-bold uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet Kimberlie */}
      <section id="about" className="py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about-me-final.png"
                  alt="Kimberlie Gerstner"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Meet Your Bookkeeper
                </span>
                <h2 className="text-5xl md:text-6xl font-heading font-medium text-slate-900 leading-tight">
                  Kimberlie Gerstner
                </h2>
                <div className="w-16 h-1.5 bg-secondary rounded-full" />
              </div>

              <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
                <p className="font-medium text-slate-900 italic">
                  With over three decades leading accounting and finance across
                  construction, hospitality, banking, tech, and service
                  industries, I bring battle-tested expertise to every
                  client&apos;s books.
                </p>
                <p>
                  From Controller and CFO roles to Regional Finance Manager for
                  multi-million portfolios, I&apos;ve managed everything from
                  multi-entity GAAP reporting to daily reconciliations. I
                  started Books by Kimberlie because I saw business owners
                  drowning in receipts when they should be focused on their
                  vision.
                </p>
              </div>

              <div className="space-y-4 pt-6 text-slate-900">
                <h4 className="font-bold uppercase text-[12px] tracking-[0.3em] text-slate-400">
                  Industries We Serve
                </h4>
                <div className="flex flex-wrap gap-3">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-6 py-2 rounded-full bg-slate-50 border border-slate-100 font-medium text-sm transition-colors hover:bg-slate-100 cursor-default"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-32 bg-[#f8f9fa] border-y border-slate-100"
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 inline-block">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-heading font-medium mb-6 leading-tight text-slate-900">
              Mastering your finances so you can lead.
            </h2>
            <p className="text-slate-500 text-lg">
              Comprehensive bookkeeping solutions tailored for clarity and
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group overflow-hidden flex flex-col"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 z-10" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow text-left">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-heading mb-20 leading-tight text-slate-900">
            Confidence confirmed by our clients.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="text-left bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-10 italic">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-4 pt-8 border-t border-slate-200">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full bg-slate-200 shadow-sm"
                  />
                  <div>
                    <p className="font-bold text-slate-900 text-base">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Left Column */}
            <div>
              <h2 className="text-5xl md:text-6xl font-heading font-medium mb-6 text-slate-900">
                Let&apos;s clean up your books.
              </h2>
              <p className="text-slate-500 text-lg mb-12">
                Reach out for a free consultation or directly to Kimberlie.
              </p>
              {/* Contact List */}
              <div className="space-y-6">
                {[
                  {
                    label: "EMAIL",
                    value: "kimberlie@booksbykimberlie.com",
                    icon: Mail,
                    href: "mailto:kimberlie@booksbykimberlie.com",
                  },
                  {
                    label: "MOBILE",
                    value: "830-515-9818",
                    icon: Phone,
                    href: "tel:8305159818",
                  },
                  {
                    label: "OFFICE",
                    value: "830-730-4160",
                    icon: Phone,
                    href: "tel:8307304160",
                  },
                  {
                    label: "WHATSAPP",
                    value: "Available",
                    icon: MessageCircle,
                    href: "https://wa.me/8305159818",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-8 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all bg-white group"
                  >
                    <div className="w-16 h-16 rounded-full border border-[#D4C3C7] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-2">
                        {item.label}
                      </p>
                      <p className="text-xl font-bold text-slate-900">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-heading font-medium mb-8 text-slate-900">
                Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Full Name
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-0 border-b-2 border-slate-200 rounded-none h-14 px-0 text-xl focus:ring-0 focus:border-primary transition-all bg-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-0 border-b-2 border-slate-200 rounded-none h-14 px-0 text-xl focus:ring-0 focus:border-primary transition-all bg-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Message
                  </label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="border-0 border-b-2 border-slate-200 rounded-none min-h-[150px] px-0 text-xl focus:ring-0 focus:border-primary transition-all bg-transparent resize-none"
                    placeholder="How can Kimberlie help?"
                  />
                </div>

                <Button
                  disabled={isSubmitting}
                  className="w-full h-20 rounded-full bg-primary hover:bg-primary-dark text-white text-xl font-bold shadow-xl shadow-primary/20 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <Loader2 className="w-6 h-6 animate-spin" /> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      Send Message <ArrowRight className="w-6 h-6" />
                    </span>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3 text-secondary font-bold justify-center pt-4 text-base text-center"
                  >
                    <CheckCircle2 className="w-6 h-6" /> Message sent
                    successfully! We will contact you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3 text-destructive font-bold justify-center pt-4 text-base text-center"
                  >
                    <AlertCircle className="w-5 h-5" /> Error sending message.
                    Please try calling instead.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
