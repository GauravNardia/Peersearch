import { getLinkLabel } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Prop {
  profile: any;
}

const BuilderCard = ({ profile }: Prop) => {
  const links: string[] =
    typeof profile.links === "string"
      ? profile.links
          .replace(/[{}"]/g, "")
          .split(",")
          .map((link: string) => link.trim())
          .filter(Boolean)
      : [];

  return (
    <div className="w-full p-4 bg-neutral-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm transition-all duration-300">
      {/* Header */}
      <div className="w-full flex justify-between items-center gap-4">
        <div className="flex gap-1 justify-center items-center">
        <Image
          width={48}
          height={48}
          src={profile.profilePhoto}
          alt={profile.fullName}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {profile.fullName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            @{profile.username}
          </p>
        </div>
        </div>
        <div className="-mt-4 flex items-center justify-center ">
          <Image
          width={48}
          height={48}
          src="/icons/logo.svg"
          alt={profile.fullName}
          className="w-6 h-6"
        />
        </div>
      </div>

      {/* Links */}
{/* Links Section */}
{links.length > 2 ? (
  <>
    {/* Grid of links */}
    <div className="grid grid-cols-2 gap-2 mt-4">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 bg-neutral-100 hover:bg-neutral-200 dark:text-green-400 dark:hover:text-green-300 px-3 py-2 rounded-lg transition whitespace-nowrap"
        >
          {getLinkLabel(link)} <ArrowUpRight className="w-4 h-4" />
        </Link>
      ))}
    </div>

    {/* Full-width Peerlist button */}
    <Link
      href={`https://peerlist.io/${profile.username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 w-full flex items-center justify-center gap-1 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg transition"
    >
      Peerlist <ArrowUpRight className="w-4 h-4" />
    </Link>
  </>
) : (
  <div className="flex flex-wrap gap-2 mt-4">
    {/* All links inline */}
    {links.map((link, i) => (
      <Link
        key={i}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 bg-neutral-100 hover:bg-neutral-200 dark:text-green-400 dark:hover:text-green-300 px-3 py-2 rounded-lg transition whitespace-nowrap"
      >
        {getLinkLabel(link)} <ArrowUpRight className="w-4 h-4" />
      </Link>
    ))}
    {/* Peerlist button inline too */}
    <Link
      href={`https://peerlist.io/${profile.username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-1 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg transition whitespace-nowrap"
    >
      Peerlist <ArrowUpRight className="w-4 h-4" />
    </Link>
  </div>
)}


    </div>
  );
};

export default BuilderCard;
