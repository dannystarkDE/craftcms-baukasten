/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  breakpoints: {
    min: '320px',
    s: { min: '320px', max: '799px' },
    m: { min: '800px', max: '1199px' },
    l: { min: '1200px', max: '1599px' },
    max: '1600px',
  },

  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    red: '#f00',
    blue: '#00f',
    green: '#0f0',
    'gray-100': '#f7fafc',
    'gray-200': '#edf2f7',
    'gray-300': '#e2e8f0',
    'gray-400': '#cbd5e0',
    'gray-500': '#a0aec0',
    'gray-600': '#718096',
    'gray-700': '#4a5568',
    'gray-800': '#2d3748',
    'gray-900': '#1a202c',
  },

  borderRadius: {
    none: '0',
    '1px': '1px',
    '3px': '3px',
    '5px': '5px',
    full: '9999px',
  },

  borderWidth: {
    default: '1px',
    '0': '0',
    '1px': '1px',
    '2px': '2px',
    '3px': '3px',
    '4px': '4px',
    '5px': '5px',
  },

  widths: {
    '0': '0',
    full: '100%',
    screen: '100vw',
    auto: 'auto',
    '1/6': '16.666666666666664%',
    '2/6': '33.33333333333333%',
    '3/6': '50%',
    '4/6': '66.66666666666666%',
    '5/6': '83.33333333333334%',
    '6/6': '100%',
    '1/10': '10%',
    '2/10': '20%',
    '3/10': '30%',
    '4/10': '40%',
    '5/10': '50%',
    '6/10': '60%',
    '7/10': '70%',
    '8/10': '80%',
    '9/10': '90%',
    '10/10': '100%',
    '1/24': '4.166666666666666%',
    '2/24': '8.333333333333332%',
    '3/24': '12.5%',
    '4/24': '16.666666666666664%',
    '5/24': '20.833333333333336%',
    '6/24': '25%',
    '7/24': '29.166666666666668%',
    '8/24': '33.33333333333333%',
    '9/24': '37.5%',
    '10/24': '41.66666666666667%',
    '11/24': '45.83333333333333%',
    '12/24': '50%',
    '13/24': '54.166666666666664%',
    '14/24': '58.333333333333336%',
    '15/24': '62.5%',
    '16/24': '66.66666666666666%',
    '17/24': '70.83333333333334%',
    '18/24': '75%',
    '19/24': '79.16666666666666%',
    '20/24': '83.33333333333334%',
    '21/24': '87.5%',
    '22/24': '91.66666666666666%',
    '23/24': '95.83333333333334%',
    '24/24': '100%',
  },

  spacings: {
    '4px': '4px',
    '8px': '8px',
    '12px': '12px',
    '16px': '16px',
    '20px': '20px',
    '40px': '40px',
    '80px': '80px',
    '0.5': '0.5rem',
    '1': '1rem',
    '1.5': '1.5rem',
    '2': '2rem',
    '2.5': '2.5rem',
    '3': '3rem',
    '4': '4rem',
    '5': '5rem',
    '6': '6rem',
    '7': '7rem',
    '8': '8rem',
    '9': '9rem',
    '10': '10rem',
  },

  boxShadow: {
    '0': 'none',
    '1': '0 1px 1px rgba(0,0,0,0.30)',
    '2': '0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.25)',
    '3':
      '0 1px 1px rgba(0,0,0,0.20), 0 2px 2px rgba(0,0,0,0.20), 0 4px 4px rgba(0,0,0,0.20)',
    '4':
      '0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15)',
    '5':
      '0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12)',
    '6':
      '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 8px 8px rgba(0,0,0,0.11), 0 16px 16px rgba(0,0,0,0.11), 0 32px 32px rgba(0,0,0,0.11)',
    sharp:
      '0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.20), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.10), 0 16px 16px rgba(0,0,0,0.05)',
    diffuse:
      '0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20)',
    shorter:
      '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)',
    longer:
      '0 2px 1px rgba(0,0,0,0.09), 0 4px 2px rgba(0,0,0,0.09), 0 8px 4px rgba(0,0,0,0.09), 0 16px 8px rgba(0,0,0,0.09), 0 32px 16px rgba(0,0,0,0.09)',
    dreamy:
      '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
  },

  fontFamily: {
    sans: ['sans-serif'],
    serif: ['serif'],
    mono: ['monospace'],
  },

  opacity: {},

  schrift: {
    minFontSize: '16px',
    maxFontSize: '18px',
    minRatio: 1.1,
    maxRatio: 1.3,
    scales: [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    minBreakpoint: '320px',
    maxBreakpoint: '1600px',
  },
};
