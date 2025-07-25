import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const extractKeywords = (query: string): string[] => {
  const stopwords = [
    "give", "me","top", "best", "dev", "devs", "developer", "developers",
    "expert", "hire", "freelancer", "senior", "junior", "the", "a", "an", "of", "experienced", "experience",
  ];

  return query
    .toLowerCase()
    .split(/\s+/) // split by space
    .map((word) => word.replace(/[^a-z0-9]/gi, "")) // remove special chars
    .filter((word) => word && !stopwords.includes(word));
};

export const getLinkLabel = (link: string): string => {
    if (link.includes("github.com")) return "GitHub";
    if (link.includes("linkedin.com")) return "LinkedIn";
    if (link.includes("twitter.com")) return "Twitter";
    if (link.includes("calendly.com")) return "Calendly";
    if (link.includes("cal.com")) return "Cal";

    if (
      link.includes("vercel.app") ||
      link.includes("netlify.app") ||
      link.includes("portfolio")
    )
      return "Portfolio";
    if (link.includes("behance.net")) return "Behance";
    if (link.includes("dribbble.com")) return "Dribbble";
    if (link.includes("youtube.com")) return "YouTube";
    return "Website";
  };