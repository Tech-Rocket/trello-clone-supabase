"use client";
import Header from "@/components/ui/shared/headers/header";
import { useUser } from "@clerk/nextjs";
export default function Dashboard() {
  const { user } = useUser();

  return (
    <section>
      <Header />
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome back,{" "}
            {user?.firstName ?? user?.emailAddresses[0].emailAddress}! 👋
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your boards today.
          </p>
        </div>
      </main>
    </section>
  );
}
