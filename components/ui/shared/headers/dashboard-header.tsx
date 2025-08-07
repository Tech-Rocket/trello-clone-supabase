import { FaTrello, FaUser, FaArrowRight } from "react-icons/fa";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export default function DashboarHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <div className="items-cente r flex space-x-2">
          <FaTrello className="h-6 w-6 text-blue-600 sm:h-8 sm:w-8" />
          <span className="text-xl font-bold text-gray-900 sm:text-2xl">
            Trello Clone
          </span>
        </div>

        <div className="flex h-14 w-14 items-center space-x-2 sm:space-x-4">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
