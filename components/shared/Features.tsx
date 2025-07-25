import React from "react";
import Image from "next/image";
import GridCard from "../cards/GridCard";
import { FaqSection } from "./faq";

export const Features = () => {
  return (
    <section className="w-full px-4 md:px-20 lg:px-0 pt-20 font-sans flex flex-col justify-center">
      <div className="max-w-2xl w-full flex flex-col items-start text-left relative">
        {/* Top Badge */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="px-2.5 py-1 text-neutral-600 text-md font-semibold flex items-center gap-1">
            <Image
            src="/icons/logo.svg"
            width={25}
            height={25}
            alt="peersearch"
            />
            Features
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-xl font-semibold text-neutral-800">
           Intent-Based Search
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 text-md md:text-lg leading-relaxed">
         Find people by what they're working on, their tech stack, roles, and goals.
        </p>

        {/* Image with Play Button */}
        <div className="mt-10 w-full relative rounded-2xl overflow-hidden">
          <Image
            src="/images/profile.png"
            alt="Profile Showcase"
            width={1200}
            height={700}
            className="w-full h-auto object-cover opacity-50"
          />
        </div>
      </div>
      <GridCard
      heading="Live Builder"
      subheading="A constantly updating feed of active builders from around the world."
      img="/images/live-builder.png"
      />
      <GridCard
      heading="Public Profiles with Live Tags"
      subheading="Get every builder's professional peerlist's profile."
      img="/images/profile.png"
      />
      <div className="max-w-2xl w-full flex flex-col items-start text-left relative">
        {/* Top Badge */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="px-2.5 py-1 text-neutral-600 text-md font-semibold flex items-center gap-1">
            <Image
            src="/icons/logo.svg"
            width={25}
            height={25}
            alt="peersearch"
            />
            Search
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-xl font-semibold text-neutral-800">
           Hiring Developers ?
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 text-md md:text-lg leading-relaxed">
         If you're hiring builders and struggling to discover the best developers, just searh what kinds of developers, engineers you need :)
        </p>

        {/* Image with Play Button */}
        <div className="mt-10 w-full relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
          <Image
            src="/images/search.png"
            alt="Search"
            width={1200}
            height={700}
            className="w-full h-auto object-cover opacity-50"
          />
        </div>
      </div>
      <FaqSection/>
    </section>
  );
};
