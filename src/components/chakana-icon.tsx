"use client";

import Image from "next/image";

interface ChakanaIconProps {
  className?: string;
  size?: number;
}

/**
 * ChakanaIcon — isotipo corporativo dorado de IntiQuilla Adventures.
 * Renderiza la imagen PNG de la Chakana (public/images/chakana-icon.png)
 * reemplazando el antiguo SVG inline. Hereda tamaño via prop `size`
 * y estilos adicionales via `className`.
 */
export function ChakanaIcon({ className = "", size = 24 }: ChakanaIconProps) {
  return (
    <Image
      src="/images/chakana-icon.png"
      alt="Chakana IntiQuilla Adventures"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      aria-hidden="true"
      draggable={false}
    />
  );
}
