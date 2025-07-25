import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const JoinCommunity = () => {
  return (
    <section className="w-full px-4 md:px-20 lg:px-0 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-serif font-regular text-neutral-800 leading-snug">
          Stop stressing over resumes 
          <br />
          find the best people by just searching!
        </h2>

        {/* CTA Button instead of input */}
        <div className="mt-8 text-center flex items-center justify-center">
          <Link
            href="/sign-in"
            className="sm:w-[40%] flex gap-1 justify-center items-center px-4 py-1.5 bg-neutral-800 border border-neutral-900 text-white font-sans font-bold rounded-lg shadow-md text-sm font-medium hover:bg-neutral-900 transition"
          >
            Join PeerSearch Now <ArrowRight className='w-5' />
          </Link>
        </div>
      </div>
    </section>
  );
};
