import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "outline-light";
  children: React.ReactNode;
}

const variantClasses: Record<string, string> = {
  primary: "bg-navy text-white hover:bg-navy-dark",
  outline: "border border-navy text-navy hover:bg-navy hover:text-white",
  "outline-light": "border border-white/70 text-white hover:bg-white hover:text-navy",
};

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
