"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Footer = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (pathname === "/find") return null;

  return (
    <section className="w-full border-t border-gray-200 mt-20">
      <div className="w-full mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700 text-sm">
        <div className="w-full">
          <h2 className="w-full text-4xl md:text-6xl font-bold font-serif text-neutral-500 mb-3">
            PeerSearch
          </h2>
        </div>
      </div>
    </section>
  );
};
