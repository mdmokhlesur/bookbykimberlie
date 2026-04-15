"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  Shield,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
  Calculator,
  PieChart,
  FileText,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ─── Data ─── */
const services = [
  {
    title: "QuickBooks Cleanup",
    description:
      "Expert setup, cleanup, and automation that turns your spreadsheet nightmares into a streamlined, high-performance system.",
    image: "/payment-processing.png",
    icon: Calculator,
  },
  {
    title: "Accounts Payable",
    description:
      "Precision management of your bills and outgoing payments to maintain vendor trust and cash flow control.",
    image: "/account-payable.png",
    icon: FileText,
  },
  {
    title: "Accounts Receivable",
    description:
      "Tracking invoices and ensuring timely incoming payments to keep your business moving forward.",
    image: "/account-receivable.png",
    icon: Heart,
  },
  {
    title: "Payroll & Compliance",
    description:
      "On-time payroll and GAAP-compliant reporting that keeps your team happy and your books audit-ready.",
    image: "/account-payable.png",
    icon: Shield,
  },
  {
    title: "Financial Reporting",
    description:
      "Expert P&L, balance sheets, and cash flow visibility that CPAs love and owners actually understand.",
    image: "/account-receivable.png",
    icon: PieChart,
  },
];

const testimonials = [
  {
    text: "She made my accounting stress completely disappear. Highly professional and genuinely easy to work with.",
    rating: 5,
    name: "Sarah T.",
    role: "Freelance Designer",
    image: "https://ui-avatars.com/api/?name=Sarah+T&background=C96C74&color=fff",
  },
  {
    text: "Finally a bookkeeper who explains things in plain English. I feel confident about my finances for the first time.",
    rating: 5,
    name: "David R.",
    role: "Restaurant Owner",
    image: "https://ui-avatars.com/api/?name=David+R&background=3fa27a&color=fff",
  },
  {
    text: "Kimberlie's bookkeeping brought clarity to my chaotic finances—now I actually enjoy reviewing my numbers.",
    rating: 5,
    name: "Alex M.",
    role: "Contractor, Vermont",
    image: "https://ui-avatars.com/api/?name=Alex+M&background=C96C74&color=fff",
  },
];

/* ─── Animation Variants ─── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  },
};
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  },
};
const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  },
};
const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
  },
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const floatingAnimation: Variants = {
  animate: {
    y: [-6, 6, -6],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

/* ─── Main Page ─── */
export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Hero */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-4 overflow-hidden bg-white"
      >
        {/* Animated Rotating Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,var(--tw-gradient-stops))] from-primary/30 via-secondary/30 to-primary/30 animate-rotate-bg blur-3xl" />
        </div>

        {/* Floating Background Elements (kept for extra depth) */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto px-2"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-medium text-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Remote Bookkeeping • Vermont & Nationwide
          </motion.div>
          <motion.h1
            variants={scaleUp}
            className="text-5xl sm:text-6xl md:text-8xl font-heading font-bold text-slate-900 tracking-tight leading-[1.05] mb-8"
          >
            From <span className="italic font-normal">chaos</span> to <br className="hidden sm:block" />
            <span className="text-primary italic font-normal">calm</span>, one ledger <br className="hidden sm:block" />
            at a time.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-slate-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed px-4"
          >
            Clear financial control for builders, creatives & businesses. 
            <span className="block font-medium text-slate-900 mt-2">No spreadsheet nightmares, just crystal clear numbers.</span>
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 w-full h-14 text-base sm:text-lg transition-colors"
              >
                Get Started <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-slate-300 text-slate-700 hover:bg-slate-100 w-full h-14 text-base sm:text-lg transition-colors"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Summary */}
      <section className="bg-white pb-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: "Years Exp.", value: "30+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Remote", value: "100%" },
              { label: "Hidden Fees", value: "$0" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-[2.5rem] text-center hover:shadow-xl hover:shadow-primary/5 transition-all group"
              >
                <div className="text-3xl sm:text-5xl font-heading font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <p className="text-slate-500 font-medium text-sm sm:text-base uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-28 bg-gradient-to-b from-white to-primary/5 border-y border-slate-200/50">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Meet Your Bookkeeper</h2>
                <h3 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 leading-[1.1]">
                  Kimberlie Gerstner <br />
                  <span className="text-primary/60 text-3xl md:text-4xl">30+ Years Hands-On Experience</span>
                </h3>
              </div>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  With over three decades leading accounting and finance across construction, hospitality, banking, tech, and service industries, I bring battle-tested expertise to every client&apos;s books.
                </p>
                <p>
                  From Controller and CFO roles to Regional Finance Manager for multi-million portfolios, I&apos;ve managed everything from multi-entity GAAP reporting to daily wire transfers and international reconciliations.
                </p>
                <p className="border-l-4 border-secondary pl-6 italic bg-secondary/5 py-4 rounded-r-2xl">
                  &quot;My mission is simple: deliver clear financial control so you can focus on projects, customers, and growth instead of spreadsheets.&quot;
                </p>
              </div>

              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/20 h-14 px-10 text-lg font-medium transition-all transform hover:-translate-y-1"
                >
                  Work With Kimberlie
                </a>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              className="relative lg:pl-16 mt-16 lg:mt-0 lg:order-first"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/about-me-final.png"
                  alt="Kimberlie Gerstner"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="relative lg:pl-16 mt-16 lg:mt-0"
            >
              {/* Secondary Overflow Background */}
              <div className="absolute -inset-4 sm:-inset-10 bg-secondary/10 rounded-[3rem] -rotate-2 scale-105 pointer-events-none z-0 border border-secondary/20" />
              
              {/* Coins Background Animation */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-[3rem]">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-8 h-8 sm:w-10 sm:h-10 animate-coin-fall text-secondary/30 flex items-center justify-center font-bold text-xl mix-blend-multiply"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDuration: `${5 + Math.random() * 5}s`,
                      animationDelay: `${Math.random() * 5}s`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                  >
                    $
                  </div>
                ))}
              </div>

              <div className="relative z-10 p-4 sm:p-0">
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <motion.div
                      variants={floatingAnimation}
                      animate="animate"
                      className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary shadow-lg shadow-secondary/10 border border-secondary/20"
                    >
                      <Heart className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      Personalized Care
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-8 text-base sm:text-lg">
                    Every business runs differently, so Kimberlie tailors
                    QuickBooks setups, workflows, and reporting to match how you
                    actually operate—whether you’re a solo owner or a growing
                    multi‑location team.
                  </p>
                  <h4 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-8">
                    Why Choose Books by Kimberlie?
                  </h4>
                </div>
                
                {/* Bulleted List Style */}
                <div className="space-y-8 mt-12">
                  {[
                    {
                      title: "Extensive Controller/CFO Experience",
                      desc: "Built accounting systems from scratch for hotels, banks, tech startups, and construction firms.",
                    },
                    {
                      title: "QuickBooks Specialist",
                      desc: "Setup, cleanup, automation, and monthly maintenance that actually saves you time.",
                    },
                    {
                      title: "Proven Across Industries",
                      desc: "Expertise in construction job costing, hospitality revenue management, and tech payroll scaling.",
                    },
                    {
                      title: "GAAP-Compliant Reporting",
                      desc: "Balance sheets and cash flow insights that CPAs love and business owners actually trust.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 group pl-4 border-l-2 border-primary/20 hover:border-primary transition-colors"
                    >
                      <div>
                        <h4 className="text-xl font-heading font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-primary/20">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    Ready to simplify your books?
                  </h4>
                  <p className="text-slate-600 text-base sm:text-lg mb-8">
                    Contact me for a free consultation and let&apos;s get your
                    finances working for you.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-gradient-to-tr from-primary/10 via-slate-50 to-secondary/10 relative overflow-hidden">
        <div className="absolute -left-40 top-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-40 bottom-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-sm font-bold text-secondary uppercase tracking-widest mb-3"
            >
              Our Expertise
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6"
            >
              Services built for <br />
              <span className="text-secondary italic font-normal">builders & creatives</span>
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg max-w-xl mx-auto">
              Every service is customized to your business — not a one-size-fits-all template. We maintain absolute financial visibility using industry-leading tools.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={scaleUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100 flex-shrink-0">
                  <div className="absolute inset-0 bg-primary/5 z-10" />
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-sm z-20 text-primary"
                  >
                    <s.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </motion.div>
                </div>
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-gradient-to-br from-secondary/10 to-primary/10 border-y border-white/50 relative">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto mb-4">
              What Our Clients Are Saying
            </h2>
            <p className="text-slate-600 text-lg">
              Get helpful bookkeeping tips and updates
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative group"
              >
                <div className="absolute top-8 right-8 text-slate-100 group-hover:text-primary/10 transition-colors">
                  <div className="w-12 h-12 text-6xl font-serif">&quot;</div>
                </div>
                <div className="flex gap-1 mb-6 relative z-10">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-5 w-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-slate-700 italic leading-relaxed mb-8 relative z-10 min-h-[80px]">
                  {t.text}
                </p>
                <div className="flex items-center gap-4 relative z-10 border-t border-slate-100 pt-6">
                  <div className="relative">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover shadow-sm bg-slate-100"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-32 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-secondary/20 to-transparent skew-x-12 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-primary/20 to-transparent -skew-x-12 -translate-x-32" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in touch
              </h2>
              <p className="text-slate-300 mb-10 text-lg">
                Questions? Reach out via phone, email, or WhatsApp.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl shadow-sm flex items-center justify-center text-primary font-bold">
                    M
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Mobile</p>
                    <p className="font-bold text-white">830 515 9818</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl shadow-sm flex items-center justify-center text-secondary font-bold">
                    O
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Office</p>
                    <p className="font-bold text-white">830 730 4160</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-black/20 border border-slate-100 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-slate-50 border-slate-200 h-12 px-4 rounded-xl focus:ring-primary focus:border-primary transition-shadow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-slate-50 border-slate-200 h-12 px-4 rounded-xl focus:ring-primary focus:border-primary transition-shadow"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="bg-slate-50 border-slate-200 p-4 rounded-xl resize-none focus:ring-primary focus:border-primary transition-shadow"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 text-base font-bold transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Inquiry...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-secondary font-bold text-center bg-secondary/10 p-4 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Thank you! Kimberlie will be in touch soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-destructive font-bold text-center bg-destructive/10 p-4 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5" />
                    Something went wrong. Please check your connection.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
