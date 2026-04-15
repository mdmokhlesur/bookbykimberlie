"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: -20,
            transition: { duration: 0.2 },
          }}
          className="fixed top-6 left-6 right-6 md:top-10 md:right-10 md:left-auto z-[100] md:w-[384px]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 flex items-center gap-4">
            <div
              className={
                type === "success" ? "text-secondary" : "text-destructive"
              }
            >
              {type === "success" ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <AlertCircle className="w-6 h-6" />
              )}
            </div>
            <div className="flex-grow">
              <p className="text-sm font-bold text-slate-900 leading-tight">
                {type === "success" ? "Success!" : "Error"}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-slate-50 rounded-lg transition-colors text-slate-300 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
