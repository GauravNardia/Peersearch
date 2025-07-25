import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const user = await currentUser()

  return (
    <nav className="w-full">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1">
          <Image
          src="/icons/logo.svg"
          width={30}
          height={30}
          alt="peersearch"
          />
          <span className="hidden sm:block text-2xl font-bold text-black font-serif tracking-wide">PeerSearch</span>
        </Link>

        {
        !user?.id 
        ? 
        <>
        <div className="flex items-center space-x-4">
          <Link
            href="/sign-in"
            className="px-4 py-1.5 border border-gray-300 text-black font-sans font-bold rounded-lg shadow-md text-sm hover:bg-gray-100 transition"
          >
            Log in
          </Link>
          <Link
            href="/sign-in"
            className="px-4 py-1.5 bg-green-600 border border-green-700 text-white font-sans font-bold rounded-lg shadow-md text-sm font-medium hover:bg-green-700 transition"
          >
            Create Profile
          </Link>
        </div>
        </>
        :
        <>
        <div>
          <UserButton showName />
        </div>
        
        </>
        }

      </div>
    </nav>
  );
}
