"use client";

import { FaTrello, FaUser, FaArrowRight } from "react-icons/fa";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const { isSignedIn, user } = useUser();
  console.log("isSignIn:", isSignedIn);

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
          {/* <FaUser /> */}
          {isSignedIn ? (
            <div className="flex flex-col items-end space-y-1 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
              <span className="hidden text-xs text-gray-600 sm:block sm:text-sm">
                Welcome, John Doe
              </span>
              <Link href="/dashboard">
                <Button className="cursor-pointer rounded px-4 py-4 md:h-11">
                  Go to Dashboard <FaArrowRight />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-x-3">
              <SignInButton>
                <Button
                  variant="ghost"
                  className="h-4 cursor-pointer rounded px-4 py-4 md:h-11 md:w-[6rem] md:p-0"
                >
                  Login
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="h-4 cursor-pointer rounded px-4 py-4 md:h-11 md:w-[6rem] md:p-0">
                  Sign up
                </Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
