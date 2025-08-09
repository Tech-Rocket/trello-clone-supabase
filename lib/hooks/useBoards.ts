"use client";

import { useUser } from "@clerk/nextjs";
import { boardDataService } from "../services";
import { useState } from "react";
import { BoardTypes } from "../supabase/models";

export function useBoards() {
  const { user } = useUser();
  const [boards, setBoards] = useState<BoardTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function createBoard(boardData: {
    title: string;
    description?: string;
    color?: string;
  }) {
    if (!user) throw new Error("User not authenicated");

    try {
      const newBoard = await boardDataService.createBoardWithDefaultColumns({
        ...boardData,
        user_id: user.id,
      });

      setBoards((prev) => [newBoard, ...prev]);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to create board",
      );
    }
  }

  return { boards, loading, error, createBoard };
}
