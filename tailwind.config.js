// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '0px 4px 12px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        rotateCW: {
          from: { transform: 'translate3d(0px, -50%, -1px) rotate(-45deg)' },
          to: { transform: 'translate3d(0px, -50%, 0px) rotate(-315deg)' },
        },
        rotateCCW: {
          from: { transform: 'rotate(45deg)' },
          to: { transform: 'rotate(315deg)' },
        },
        pulseGlow: {
          from: { backgroundSize: '60%' },
          to: { backgroundSize: '100%' },
        },
        bouncingSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        rotateCW: 'rotateCW var(--rotate-speed)s var(--easing) infinite',
        rotateCCW: 'rotateCCW var(--rotate-speed)s var(--easing) infinite',
        pulseGlow: 'pulseGlow 5s linear infinite alternate',
        bouncingSlow: 'bouncingSlow 2s infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(100% 50% at 100% 50%, rgba(60, 26, 229, 0.25) 0%, rgba(60, 26, 229, 0.247904) 11.79%, rgba(59, 26, 229, 0.241896) 21.38%, rgba(58, 26, 229, 0.2324) 29.12%, rgba(57, 26, 229, 0.219837) 35.34%, rgba(55, 26, 229, 0.20463) 40.37%, rgba(53, 26, 229, 0.1872) 44.56%, rgba(51, 26, 229, 0.16797) 48.24%, rgba(48, 26, 229, 0.147363) 51.76%, rgba(46, 26, 229, 0.1258) 55.44%, rgba(44, 26, 229, 0.103704) 59.63%, rgba(41, 26, 229, 0.0814963) 64.66%, rgba(39, 26, 229, 0.0596) 70.88%, rgba(36, 26, 229, 0.038437) 78.62%, rgba(34, 26, 229, 0.0184296) 88.21%, rgba(32, 26, 229, 0) 100%)',
      },
    },
  },
  plugins: [],
};
