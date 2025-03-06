import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#F5F5F7",
          100: "#E8E8ED",
          200: "#D2D2D8",
          300: "#B8B8C0",
          400: "#86868B",
          500: "#6E6E73",
          600: "#424245",
          700: "#333336",
          800: "#1D1D1F", // Main primary color (dark gray)
          900: "#0A0A0A",
          950: "#000000",
        },
        secondary: {
          50: "#F2F7FF",
          100: "#E6F0FF",
          200: "#CCE0FF",
          300: "#99C1FF",
          400: "#66A3FF",
          500: "#0066CC", // Main secondary color (Apple blue)
          600: "#0055A5",
          700: "#00407C",
          800: "#002A52",
          900: "#001529",
          950: "#000A14",
        },
        accent: {
          50: "#FFF9F0",
          100: "#FFF3E0",
          200: "#FFE0B2",
          300: "#FFCC80",
          400: "#FFA726",
          500: "#FF9500", // Main accent color (Apple orange)
          600: "#E67E00",
          700: "#CC6A00",
          800: "#A65500",
          900: "#804000",
          950: "#663300",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif"],
        mono: ["var(--font-geist-mono)", "SF Mono, monospace"],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        '2xs': '0.625rem',
        '4xl': ['2.5rem', { lineHeight: '1.1' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'supertight': '-0.075em',
      },
      borderRadius: {
        '4xl': '2rem',
        'apple': '0.75rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.42, 0, 0.58, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      maxWidth: {
        'apple-section': '1120px',
      },
    },
  },
  plugins: [],
};
export default config;
