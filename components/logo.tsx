interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 180, height = 32 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 520 80"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Menssäkrad"
      role="img"
    >
      {/* The red period dot */}
      <circle cx="16" cy="64" r="12" fill="currentColor" className="text-primary" />

      {/* MENSSÄKRAD wordmark */}
      <text
        x="40"
        y="58"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="800"
        fontSize="54"
        letterSpacing="6"
        fill="currentColor"
        className="text-foreground"
      >
        MENSS
      </text>
      <text
        x="280"
        y="58"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="800"
        fontSize="54"
        letterSpacing="6"
        fill="currentColor"
        className="text-primary"
      >
        A
      </text>
      <text
        x="320"
        y="58"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="800"
        fontSize="54"
        letterSpacing="6"
        fill="currentColor"
        className="text-foreground"
      >
        KRAD
      </text>

      {/* Umlaut dots over the Ä */}
      <circle cx="297" cy="16" r="4" fill="currentColor" className="text-primary" />
      <circle cx="313" cy="16" r="4" fill="currentColor" className="text-primary" />
    </svg>
  );
}

export function LogoMark({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Menssäkrad"
      role="img"
    >
      <circle cx="20" cy="20" r="18" fill="currentColor" className="text-primary" />
      <text
        x="20"
        y="27"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="currentColor"
        className="text-primary-foreground"
        textAnchor="middle"
      >
        M
      </text>
    </svg>
  );
}
