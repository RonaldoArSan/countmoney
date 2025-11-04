// Paleta de cores moderna baseada em tendências 2024-2025
export const modernColors = {
  // Primary Colors - Tons de roxo/azul vibrante
  primary: {
    50: '#f0f4ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1', // Cor principal
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b'
  },

  // Secondary Colors - Verde moderno
  secondary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16'
  },

  // Accent Colors - Laranja/Rosa vibrante
  accent: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407'
  },

  // Neutral Colors - Cinzas modernos
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a'
  },

  // Success Colors
  success: {
    50: '#f0fdf4',
    500: '#22c55e',
    700: '#15803d'
  },

  // Warning Colors
  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    700: '#b45309'
  },

  // Error Colors
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a'
  }
};

// Gradientes modernos
export const gradients = {
  primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
  secondary: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
  accent: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
  dark: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  light: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  glassDark: 'linear-gradient(135deg, rgba(30, 41, 59, 0.1) 0%, rgba(15, 23, 42, 0.05) 100%)'
};

// Sombras modernas
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  glow: '0 0 20px rgba(99, 102, 241, 0.4)'
};

// Breakpoints responsivos
export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// Tema para modo escuro
export const darkTheme = {
  background: {
    primary: modernColors.neutral[950],
    secondary: modernColors.neutral[900],
    tertiary: modernColors.neutral[800]
  },
  text: {
    primary: modernColors.neutral[50],
    secondary: modernColors.neutral[300],
    muted: modernColors.neutral[500]
  },
  border: modernColors.neutral[700],
  shadow: '0 10px 15px -3px rgb(0 0 0 / 0.3)'
};

// Tema para modo claro
export const lightTheme = {
  background: {
    primary: modernColors.neutral[50],
    secondary: modernColors.neutral[100],
    tertiary: modernColors.neutral[200]
  },
  text: {
    primary: modernColors.neutral[900],
    secondary: modernColors.neutral[700],
    muted: modernColors.neutral[500]
  },
  border: modernColors.neutral[200],
  shadow: shadows.lg
};

// Animações e transições
export const animations = {
  transition: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out'
  },
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
};