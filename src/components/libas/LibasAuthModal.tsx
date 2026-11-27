'use client';

import React, { useState, useEffect } from 'react';
import { useLibas } from '@/context/LibasContext';
import {
  X,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  ShieldAlert,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

export function LibasAuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, loginUser } = useLibas();

  const [mode, setMode] = useState<'signin' | 'register'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Brute-force protection states
  const MAX_FAILED_ATTEMPTS = 3;
  const LOCKOUT_SECONDS = 30;

  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutRemaining, setLockoutRemaining] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle live countdown when locked
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLocked && lockoutRemaining > 0) {
      timer = setInterval(() => {
        setLockoutRemaining((prev) => {
          if (prev <= 1) {
            setIsLocked(false);
            setFailedAttempts(0);
            setErrorMessage(null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isLocked, lockoutRemaining]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) return;

    // Simulation validation
    // For demo: if password is 'wrong' or less than 6 chars, simulate failure
    if (password.length < 6) {
      const nextFailed = failedAttempts + 1;
      setFailedAttempts(nextFailed);

      if (nextFailed >= MAX_FAILED_ATTEMPTS) {
        setIsLocked(true);
        setLockoutRemaining(LOCKOUT_SECONDS);
        setErrorMessage(
          `SECURITY SHIELD TRIGGERED: Brute-force protection active. Maximum ${MAX_FAILED_ATTEMPTS} failed attempts reached. System locked for ${LOCKOUT_SECONDS} seconds.`
        );
      } else {
        setErrorMessage(
          `Invalid credentials. Security Warning: ${MAX_FAILED_ATTEMPTS - nextFailed} attempts remaining before temporary account lockout.`
        );
      }
      return;
    }

    // Success login
    const displayName = mode === 'register' && name ? name : email.split('@')[0];
    loginUser({
      name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
      email,
      phone: phone || '+91 9876543210',
    });

    // Reset attempts on successful sign in
    setFailedAttempts(0);
    setErrorMessage(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsAuthModalOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl border border-[#E6E6E6] shadow-2xl max-w-md w-full z-10 overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E6E6E6] flex items-center justify-between bg-[#FAF7F9]">
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.2em] text-2xl font-extrabold uppercase text-[#71006A]">
              LIBAS
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#737373] uppercase">
              CLIENT AUTHENTICATION PORTAL
            </span>
          </div>

          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1.5 rounded-full hover:bg-white text-[#737373] hover:text-[#252525] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#E6E6E6] text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => {
              setMode('signin');
              setErrorMessage(null);
            }}
            className={`flex-1 py-3 text-center transition-all ${
              mode === 'signin'
                ? 'border-b-2 border-[#71006A] text-[#71006A] bg-white'
                : 'text-[#737373] bg-[#F5F5F5] hover:text-[#252525]'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setMode('register');
              setErrorMessage(null);
            }}
            className={`flex-1 py-3 text-center transition-all ${
              mode === 'register'
                ? 'border-b-2 border-[#71006A] text-[#71006A] bg-white'
                : 'text-[#737373] bg-[#F5F5F5] hover:text-[#252525]'
            }`}
          >
            New Registration
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4">
          
          {/* Brute-Force Security Shield Banner */}
          {isLocked ? (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2 font-bold text-xs text-red-700">
                <ShieldAlert className="w-4 h-4 text-red-600 animate-pulse" />
                <span>ACCOUNT TEMPORARILY LOCKED</span>
              </div>
              <p className="text-[11px] leading-relaxed">{errorMessage}</p>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-700 pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Lockout expires in: {lockoutRemaining}s</span>
              </div>
            </div>
          ) : errorMessage ? (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {mode === 'register' && (
              <div>
                <label className="text-xs font-bold text-[#252525] block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    disabled={isLocked}
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 pl-9 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none disabled:opacity-50"
                  />
                  <User className="w-4 h-4 text-[#999999] absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-[#252525] block mb-1">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  disabled={isLocked}
                  placeholder="e.g. priya@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 pl-9 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none disabled:opacity-50"
                />
                <Mail className="w-4 h-4 text-[#999999] absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label className="text-xs font-bold text-[#252525] block mb-1">
                  Mobile Number (For OTP / Delivery)
                </label>
                <input
                  type="tel"
                  disabled={isLocked}
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none disabled:opacity-50"
                />
              </div>
            )}

            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span>Password *</span>
                {mode === 'signin' && (
                  <span className="text-[11px] text-[#71006A] hover:underline cursor-pointer">
                    Forgot Password?
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  disabled={isLocked}
                  placeholder="Minimum 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pl-9 pr-10 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none disabled:opacity-50"
                />
                <Lock className="w-4 h-4 text-[#999999] absolute left-3 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999] hover:text-[#252525]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLocked}
              className="w-full py-3 rounded-xl bg-[#71006A] hover:bg-[#5C0056] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isLocked ? (
                <span>Lockout Active ({lockoutRemaining}s)</span>
              ) : mode === 'signin' ? (
                <span>Sign In Securely</span>
              ) : (
                <span>Create Account</span>
              )}
            </button>
          </form>

          <div className="text-center text-[11px] text-[#737373] pt-2">
            <span>By proceeding, you agree to Libas </span>
            <span className="text-[#71006A] underline">Terms of Use</span>
            <span> & </span>
            <span className="text-[#71006A] underline">Privacy Policy</span>
          </div>

        </div>

      </div>
    </div>
  );
}
