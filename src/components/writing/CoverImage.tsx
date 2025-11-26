"use client";

import { useState } from "react";

interface CoverImageProps {
  src: string;
  alt: string;
  source: string;
}

export default function CoverImage({ src, alt, source }: CoverImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return (
      <div className="h-full bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
        <div className="text-6xl opacity-40">
          {source === "Medium" ? "📰" : "💌"}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
      onError={() => setImageError(true)}
    />
  );
}

