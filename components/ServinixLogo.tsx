import Link from "next/link";

interface ServinixLogoProps {
  className?: string;
  light?: boolean;
}

const ServinixLogo = ({ className = "", light = false }: ServinixLogoProps) => {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <span className={`font-heading text-xl font-bold ${light ? "text-white" : "text-foreground"}`}>
        <span className="text-primary font-black">S</span>ervini<span className="text-primary font-black">X</span>
      </span>
    </Link>
  );
};

export default ServinixLogo;
