"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-gray-800">Ege Erdağ</div>
      <div className="space-x-6 text-gray-600 font-medium">
        <Link
          href="/"
          className="text-gray-600 hover:text-black transition-colors font-medium"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-gray-600 hover:text-black transition-colors font-medium"
        >
          Projects
        </Link>
        <Link
          href="/"
          className="text-gray-600 hover:text-black transition-colors font-medium"
        >
          About
        </Link>
        <Link
          href="/"
          className="text-gray-600 hover:text-black transition-colors font-medium"
        >
          Contact
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black font-medium"
        >
          Resume
        </Link>
        
      </div>
    </nav>
  );
}
