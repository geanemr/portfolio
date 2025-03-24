import React from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "text-white",
  secondary: "text-black",
};

const Button: React.FC<ButtonProps> = ({ children, variant = "primary" }) => (
  <button className={buttonVariantClasses[variant]}>{children}</button>
);

export default Button;
