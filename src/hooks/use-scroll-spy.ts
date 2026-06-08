"use client";

import { useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

interface ScrollSpyOptions {
  /** Section IDs to observe (in DOM order) */
  sectionIds: string[];
  /** Offset from viewport top (px) — navbar height */
  offset?: number;
  /** Root margin for IntersectionObserver */
  rootMargin?: string;
}

/**
 * useScrollSpy — observes sections and updates the URL hash
 * via History API (replaceState) as the user scrolls.
 * Also scrolls to the correct section on initial mount if
 * the URL contains a matching hash.
 */
export function useScrollSpy({
  sectionIds,
  offset = 100,
  rootMargin = `-${100}px 0px -40% 0px`,
}: ScrollSpyOptions) {
  const pathname = usePathname();
  const lastHash = useRef<string | null>(null);
  const isScrollingFromClick = useRef(false);

  // Handle initial hash navigation on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      // Small delay to ensure DOM is painted
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          lastHash.current = hash;
        }
      }, 300);
    }
    // Only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll spy observer
  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    const validIds = sectionIds.filter((id) => document.getElementById(id));

    if (validIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible / topmost intersecting section
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;

        // Sort by intersection ratio descending
        intersecting.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );

        const topSection = intersecting[0].target.id;

        // Don't update if user is clicking a link (handled elsewhere)
        if (isScrollingFromClick.current) return;

        // Don't update if hash hasn't changed
        if (lastHash.current === topSection) return;

        lastHash.current = topSection;

        // Update URL without reload
        const url = `${pathname}#${topSection}`;
        window.history.replaceState({}, "", url);
      },
      {
        rootMargin: rootMargin.replace("${100}", String(offset)),
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    validIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, pathname, offset, rootMargin]);

  /** Smooth-scroll to a section and update the URL */
  const scrollToSection = useCallback(
    (id: string) => {
      if (typeof window === "undefined") return;

      const el = document.getElementById(id);
      if (!el) return;

      isScrollingFromClick.current = true;
      lastHash.current = id;

      // Update URL immediately
      const url = `${pathname}#${id}`;
      window.history.pushState({}, "", url);

      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Reset flag after scroll animation completes
      setTimeout(() => {
        isScrollingFromClick.current = false;
      }, 1000);
    },
    [pathname]
  );

  return { scrollToSection };
}
