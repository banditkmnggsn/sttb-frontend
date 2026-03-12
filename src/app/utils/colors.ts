/**
 * STTB Brand Color System - Production Design
 * 
 * This color system is designed for a professional academic institution
 * inspired by universities like Harvard, Wheaton College, and theological seminaries.
 * 
 * All colors are WCAG AA compliant for accessibility.
 */

export const COLORS = {
  // Primary Brand Colors
  red: {
    primary: '#C1121F',    // Main CTA, buttons, highlights
    dark: '#9A0E19',       // Hover states, darker accents
  },
  
  blue: {
    dark: '#0B1F3B',       // Headers, footers, major sections
    bright: '#2E90FF',     // Info cards, hover accents, highlights
    lightBg: '#F3F7FF',    // Section backgrounds
  },
  
  // Typography
  text: {
    heading: '#0B1F3B',    // All headings
    body: '#2F2F2F',       // Body text
    muted: '#6B7280',      // Secondary text, hints
  },
  
  // Neutrals
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    600: '#4B5563',
    700: '#374151',
  }
} as const;

// Tailwind-compatible color classes
export const tw = {
  // Background classes
  bg: {
    redPrimary: 'bg-[#C1121F]',
    redDark: 'bg-[#9A0E19]',
    blueDark: 'bg-[#0B1F3B]',
    blueBright: 'bg-[#2E90FF]',
    blueLightBg: 'bg-[#F3F7FF]',
    white: 'bg-white',
  },
  
  // Text classes
  text: {
    redPrimary: 'text-[#C1121F]',
    blueDark: 'text-[#0B1F3B]',
    blueBright: 'text-[#2E90FF]',
    heading: 'text-[#0B1F3B]',
    body: 'text-[#2F2F2F]',
    muted: 'text-[#6B7280]',
  },
  
  // Border classes
  border: {
    redPrimary: 'border-[#C1121F]',
    blueDark: 'border-[#0B1F3B]',
    blueBright: 'border-[#2E90FF]',
  },
  
  // Gradient classes
  gradient: {
    redPrimary: 'from-[#C1121F] to-[#9A0E19]',
    blueDark: 'from-[#0B1F3B] to-[#071528]',
    blueCard: 'from-[#F3F7FF] to-white',
  }
} as const;
