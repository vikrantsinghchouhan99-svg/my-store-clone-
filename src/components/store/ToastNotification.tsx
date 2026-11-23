'use client';

import React, { useEffect } from 'react';
import { useStore } from '@/context/StoreContext';
import { Check, X } from 'lucide-react';

export function ToastNotification() {
  const { toast, clearToast } = useStore();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        clearToast();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast, clearToast]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-foreground text-background px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-medium max-w-sm border border-border/20">
        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
          <Check className="w-3 h-3" />
        </div>
        <span className="flex-1">{toast}</span>
        <button
          onClick={clearToast}
          className="p-1 hover:opacity-75 transition-opacity"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
