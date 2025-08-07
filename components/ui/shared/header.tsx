"use client";

import { FaTrello, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:py-8">
        <div className="flex items-center space-x-2">
          <FaTrello className="h-6 w-6 text-blue-700 sm:h-8 sm:w-8" />
          <span className="text-xl font-bold text-gray-900 sm:text-2xl">
            Trello Clone
          </span>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <FaUser />
        </div>
      </div>
    </header>
  );
}
