import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        panel: 'var(--color-panel)',
        rule: 'var(--color-rule)',
        worth: {
          DEFAULT: 'var(--color-worth)',
          dim: 'var(--color-worth-dim)',
        },
        minutes: 'var(--color-minutes)',
        overflow: 'var(--color-overflow)',
        fresh: 'var(--color-fresh)',
        stale: 'var(--color-stale)',
        steel: 'var(--color-steel)',
        brand: 'var(--color-brand)',
        ink: 'var(--color-ink)',
      },
      fontFamily: {
        sans: ['var(--font-plex)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        display: ['var(--font-plex)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        admit: {
          '0%': { opacity: '0', transform: 'translateX(-4px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        overflowPulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        degrade: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.65' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.28s ease-out both',
        admit: 'admit var(--motion-admit) both',
        overflowPulse: 'overflowPulse var(--motion-overflow) infinite',
        degrade: 'degrade var(--motion-degrade) both',
      },
    },
  },
  plugins: [],
};

export default config;
