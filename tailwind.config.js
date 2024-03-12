/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
        kode_mono: 'Kode Mono, sans-serif',
        ubuntu: 'Ubuntu, sans-serif',
        pixelify_sans: 'Pixelify Sans, sans-serif',
        lora: 'Lora, sans-serif',
        jetBrains_mono: 'JetBrains Mono, sans-serif',
        roboto: 'Roboto, sans-serif'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'var(--popover)',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        radius: 'hsl(var(--radius))',
        coral: '#faafa8',
        'coral-dark': '#77172e',
        peach: '#f39f76',
        'peach-dark': '#692b17',
        sand: '#fff8b8',
        'sand-dark': '#7c4a03',
        mint: '#e2f6d3',
        'mint-dark': '#264d3b',
        sage: '#b4ddd3',
        'sage-dark': '#0c625d',
        fog: '#d4e4ed',
        'fog-dark': '#256377',
        storm: '#aeccdc',
        'storm-dark': '#284255',
        dusk: '#d3bfdb',
        'dusk-dark': '#472e5b',
        blossom: '#f6e2dd',
        'blossom-dark': '#6c394f',
        clay: '#e9e3d4',
        'clay-dark': '#4b443a',
        chalk: '#efeff1',
        'chalk-dark': '#232427'
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        }
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
