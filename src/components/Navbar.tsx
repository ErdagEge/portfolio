"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-gray-800">Ege Erdağ</div>
      <div className="space-x-6 text-gray-600 font-medium">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
