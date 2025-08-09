"use client";

import Header from "@/components/ui/shared/headers/header";
import { useUser } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaRocket, FaTrello, FaPlus } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  const { user } = useUser();

  const handleCreateBoard = async () => {};
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
        {/* Create Button  */}
        <Button
          onClick={handleCreateBoard}
          className="mb-8 h-12 w-auto cursor-pointer rounded md:w-full"
        >
          <FaPlus />
          Create Board
        </Button>
        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:mb-8 sm:gap-6 lg:grid-cols-4">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-600 sm:text-sm">
                    Total Boards
                  </p>
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {/* {boards.length} */}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 sm:h-12 sm:w-12">
                  <FaTrello className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-600 sm:text-sm">
                    Active Projects
                  </p>
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {/* {boards.length} */}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 sm:h-12 sm:w-12">
                  <FaRocket className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-600 sm:text-sm">
                    Recent Activity
                  </p>
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {/* {
                      boards.filter((board) => {
                        const updatedAt = new Date(board.updated_at);
                        const oneWeekAgo = new Date();
                        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                        return updatedAt > oneWeekAgo;
                      }).length
                    } */}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 sm:h-12 sm:w-12">
                  📊
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </section>
  );
}
