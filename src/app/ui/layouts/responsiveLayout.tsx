"use client";

import { useState, useEffect, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

type ResponsiveLayoutProps = {
  desktop: ReactNode;
  mobile: ReactNode;
};

export default function ResponsiveLayout({
  desktop,
  mobile,
}: ResponsiveLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <>{isDesktop ? desktop : mobile}</>;
}
