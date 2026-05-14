"use client";

import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   Image Lightbox — fast, fluid, native feel
   No slow Framer Motion per-slide animations.
   Uses instant CSS transitions for speed.
   ───────────────────────────────────────────── */

interface LightboxProps {
  images: string[];
  alt?: string;
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({
  images,
  alt = "",
  initialIndex = 0,
  isOpen,
  onClose,
}: LightboxProps) {
  const [idx, setIdx] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  /* pointer tracking for swipe */
  const startX = useRef(0);
  const startY = useRef(0);
  const isDragging = useRef(false);
  const imageRef = useRef<HTMLDivElement>(null);

  /* reset index when lightbox opens */
  useEffect(() => {
    if (isOpen) setIdx(initialIndex);
  }, [isOpen, initialIndex]);

  /* lock body scroll + keyboard nav */
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, idx, images.length]);

  const goNext = useCallback(() => {
    if (idx >= images.length - 1) return;
    setDirection(1);
    setIdx((i) => i + 1);
  }, [idx, images.length]);

  const goPrev = useCallback(() => {
    if (idx <= 0) return;
    setDirection(-1);
    setIdx((i) => i - 1);
  }, [idx]);

  /* ── touch / pointer swipe handlers ── */
  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/95"
            onClick={onClose}
            style={{ touchAction: "manipulation" }}
          />

          {/* close button — minimal gold X */}
          <button
            type="button"
            onClick={onClose}
            onTouchStart={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="absolute top-4 right-4 z-[110] p-3 text-[#D4AF37] active:text-white"
            aria-label="Close lightbox"
            style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
          >
            <X className="w-6 h-6" strokeWidth={2.5} />
          </button>

          {/* counter */}
          <div className="absolute top-5 left-5 z-[110] text-xs text-white/50 font-medium tracking-wider">
            {idx + 1} / {images.length}
          </div>

          {/* image container — instant swap, no motion animations on slides */}
          <div
            className="relative z-[105] w-full h-full flex items-center justify-center overflow-hidden"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => { isDragging.current = false; }}
            style={{ touchAction: "pan-y pinch-zoom" }}
          >
            <div
              key={idx}
              ref={imageRef}
              className="relative w-[92vw] max-w-5xl h-[70vh] sm:h-[80vh] max-h-[800px]"
              style={{ willChange: "contents" }}
            >
              <Image
                src={images[idx]}
                alt={alt ? `${alt} ${idx + 1}` : `Image ${idx + 1}`}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 80vw, 92vw"
                priority
                draggable={false}
              />
            </div>
          </div>

          {/* prev / next arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                disabled={idx === 0}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-[110] p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 active:bg-black/70 border border-white/10 hover:border-white/20 text-white/70 hover:text-white disabled:opacity-20 disabled:pointer-events-none transition-all duration-100"
                aria-label="Previous image"
                style={{ touchAction: "manipulation" }}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                disabled={idx === images.length - 1}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-[110] p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 active:bg-black/70 border border-white/10 hover:border-white/20 text-white/70 hover:text-white disabled:opacity-20 disabled:pointer-events-none transition-all duration-100"
                aria-label="Next image"
                style={{ touchAction: "manipulation" }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
              </button>
            </>
          )}

          {/* dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > idx ? 1 : -1);
                    setIdx(i);
                  }}
                  className={`transition-all duration-150 rounded-full ${
                    i === idx
                      ? "w-6 h-2 bg-[#D4AF37]"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                  style={{ touchAction: "manipulation" }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   Hook helper for easy integration
   ───────────────────────────────────────────── */
export function useLightbox() {
  const [lightbox, setLightbox] = useState<{
    images: string[];
    alt: string;
    index: number;
  } | null>(null);

  const open = useCallback(
    (images: string[], index = 0, alt = "") => {
      setLightbox({ images, alt, index });
    },
    []
  );

  const close = useCallback(() => setLightbox(null), []);

  return {
    isOpen: lightbox !== null,
    images: lightbox?.images ?? [],
    alt: lightbox?.alt ?? "",
    initialIndex: lightbox?.index ?? 0,
    open,
    close,
  };
}
