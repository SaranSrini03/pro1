"use client";

import Link from "next/link";

interface GradientButtonProps {
  href?: string;         // optional: works as Link or Button
  label: string;         
  width?: string;        // optional width
  onClick?: () => void;  
  variant?: "vertical" | "horizontal"; // gradient style
}

export default function GradientButton({
  href,
  label,
  width = "w-auto",
  onClick,
  variant = "vertical", // default
}: GradientButtonProps) {
  const baseClasses = `
    block px-6 py-2 text-center text-white font-semibold rounded-full 
    shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${width}
  `;

  const gradients = {
    vertical: "bg-gradient-to-b from-[#264d99] to-[#66b3ff] hover:opacity-90",
    horizontal: "bg-gradient-to-r from-[#1e40af] to-[#3b82f6] hover:shadow-xl",
  };

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={`${baseClasses} ${gradients[variant]}`}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${gradients[variant]}`}>
      {label}
    </button>
  );
}
