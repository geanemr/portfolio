import React from "react";

type ThemeMode = 'dark' | 'light';
type PlatformType = "GitHub" | "LinkedIn" | "Gmail" | "Whatsapp";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  mode?: ThemeMode;
  platform?: PlatformType;
};

export const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);
