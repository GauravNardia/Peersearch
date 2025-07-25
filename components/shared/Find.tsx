"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import React, { useEffect, useState, useTransition } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { placeholders } from "@/constants";

const Find = () => {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const shouldShowPlaceholder = inputValue === "" && !isFocused;

  const handleSearch = () => {
    if (inputValue.trim()) {
      startTransition(() => {
        router.push(`/search?query=${inputValue}`);
      });
    }
  };

  return (
    <div className="w-full flex justify-center items-center rounded-xl border border-gray-200 shadow-sm px-2 py-2">
      <div className="w-full flex items-center space-x-2 relative">
        <div className="flex items-center justify-center">
          <Image src="/icons/logo.svg" width={30} height={30} alt="peersearch" />
        </div>

        {shouldShowPlaceholder && (
          <div className="w-full flex items-center absolute left-10 pointer-events-none text-neutral-400 font-semibold text-md">
            <AnimatePresence mode="wait">
              <motion.span
                key={placeholders[index]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="absolute"
              >
                {placeholders[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        )}

        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          disabled={isPending}
          placeholder=" "
          className="text-md w-full bg-transparent border-none outline-none shadow-none text-neutral-700 font-semibold"
        />
      </div>

      <Button
        disabled={isPending}
        className="ml-3 w-8 h-8 rounded-lg bg-neutral-600 hover:bg-neutral-800"
        onClick={handleSearch}
      >
        {isPending ? (
          <Loader2 className="text-white animate-spin" size={18} />
        ) : (
          <ArrowRight className="text-white text-lg" />
        )}
      </Button>
    </div>
  );
};

export default Find;
