const MedicalShieldLogo = ({ size = 48, animated = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={animated ? { animation: 'float 3s ease-in-out infinite' } : {}}
  >
    {/* Shield body */}
    <path
      d="M32 2L6 14V36C6 52 18 65 32 70C46 65 58 52 58 36V14L32 2Z"
      fill="url(#shieldGrad)"
    />
    {/* Shield inner highlight */}
    <path
      d="M32 8L11 18V36C11 49 21 60 32 65C43 60 53 49 53 36V18L32 8Z"
      fill="url(#shieldInner)"
      opacity="0.5"
    />
    {/* Cross horizontal */}
    <rect x="20" y="29" width="24" height="8" rx="4" fill="white" />
    {/* Cross vertical */}
    <rect x="28" y="21" width="8" height="24" rx="4" fill="white" />
    {/* Gradients */}
    <defs>
      <linearGradient id="shieldGrad" x1="6" y1="2" x2="58" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0ea5b5" />
        <stop offset="50%" stopColor="#0891b2" />
        <stop offset="100%" stopColor="#0a1628" />
      </linearGradient>
      <linearGradient id="shieldInner" x1="11" y1="8" x2="53" y2="65" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="white" stopOpacity="0.4" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default MedicalShieldLogo;
