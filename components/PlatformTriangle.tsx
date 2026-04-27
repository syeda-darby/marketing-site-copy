const PlatformTriangle = () => {
  return (
    <svg
      viewBox="0 0 600 520"
      className="w-full max-w-lg mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Servinix platform diagram showing Fleet GPS Tracking, Field Service Management, and AI Assistant connected around a central Servinix hub"
      role="img"
    >
      {/* Connecting lines */}
      <line x1="300" y1="100" x2="100" y2="420" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="300" y1="100" x2="500" y2="420" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="100" y1="420" x2="500" y2="420" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.3" />

      {/* Center glow */}
      <circle cx="300" cy="290" r="80" fill="hsl(var(--primary))" fillOpacity="0.06" />
      <circle cx="300" cy="290" r="55" fill="hsl(var(--primary))" fillOpacity="0.1" />

      {/* Center label */}
      <text x="300" y="284" textAnchor="middle" className="fill-primary font-heading text-lg font-bold" fontSize="20">
        Servinix
      </text>
      <text x="300" y="306" textAnchor="middle" className="fill-muted-foreground" fontSize="11">
        Unified Platform
      </text>

      {/* Top node – Fleet GPS Tracking */}
      <circle cx="300" cy="80" r="40" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
      <text x="300" y="76" textAnchor="middle" className="fill-primary" fontSize="22">📍</text>
      <text x="300" y="96" textAnchor="middle" className="fill-foreground font-heading font-semibold" fontSize="10">GPS</text>
      <text x="300" y="145" textAnchor="middle" className="fill-foreground font-heading font-semibold" fontSize="13">
        Fleet GPS Tracking
      </text>

      {/* Bottom-left node – Field Service Management */}
      <circle cx="100" cy="420" r="40" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
      <text x="100" y="416" textAnchor="middle" className="fill-primary" fontSize="22">🔧</text>
      <text x="100" y="436" textAnchor="middle" className="fill-foreground font-heading font-semibold" fontSize="10">FSM</text>
      <text x="100" y="485" textAnchor="middle" className="fill-foreground font-heading font-semibold" fontSize="13">
        Field Service
      </text>
      <text x="100" y="502" textAnchor="middle" className="fill-foreground font-heading font-semibold" fontSize="13">
        Management
      </text>

      {/* Bottom-right node – AI Assistant */}
      <circle cx="500" cy="420" r="40" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
      <text x="500" y="416" textAnchor="middle" className="fill-primary" fontSize="22">🤖</text>
      <text x="500" y="436" textAnchor="middle" className="fill-foreground font-heading font-semibold" fontSize="10">AI</text>
      <text x="500" y="485" textAnchor="middle" className="fill-foreground font-heading font-semibold" fontSize="13">
        AI Assistant
      </text>
    </svg>
  );
};

export default PlatformTriangle;
