import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#5a64d8', // Wasteless dark-purple
          700: '#4338ca',
          800: '#323c84', // Wasteless dark-indigo
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#99ff99', // Wasteless light-green
          500: '#4ade80',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        wl: {
          action: '#0A72C4',
          navy: '#0C3D5E',
          iceGround: '#F4FAFD',
          structureDark: '#17679E',
          structureMid: '#4E8CB8',
          structureLight: '#86B3D1',
          tintSoft: '#BFDCF0',
          tintLight: '#D2E9F9',
          electric: '#0C7CC7',
          
          // Accent: Green (Savings & Claims)
          claim: '#12855F',
          claimMid: '#39A97D',
          claimTint: '#E4F4EC',
          
          // Accent: Amber (Urgency & Expiry & Waste)
          urgency: '#B77708',
          urgencyMid: '#E9A93B',
          urgencyTint: '#FCF1DC',

          // Core mapping
          darkPurple: '#0C3D5E',
          darkIndigo: '#0C3D5E',
          textColor: '#0C3D5E',
          darkPurpleTint: '#17679E',
          darkPurpleTint2: '#0C3D5E',
          lightGreen: '#E4F4EC',
          lightPurpleGrey: '#F4FAFD',
          red: '#B77708',
          lightPurple: '#D2E9F9',
          mediumPurple: '#4E8CB8',
          darkGrey: '#17679E',
          footer: '#0C3D5E'
        }
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'sans-serif'],
        display: ['var(--font-fredoka)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
