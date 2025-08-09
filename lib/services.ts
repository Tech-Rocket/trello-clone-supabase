import { createClient } from "@/lib/supabase/client";
import { BoardTypes } from "./supabase/models";
import { ColumnTypes } from "./supabase/models";

const supabase = createClient();

// boards services
export const boardService = {
  async getBoards(userId: string): Promise<BoardTypes[]> {
    const { data, error } = await supabase
      .from("boards")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async createBoard(
    board: Omit<BoardTypes, "id" | "created_at" | "updated_at">,
  ): Promise<BoardTypes> {
    const { data, error } = await supabase
      .from("boards")
      .insert(board)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

// column services
export const columnService = {
  // async getBoards(userId: string): Promise<BoardTypes[]> {
  //   const { data, error } = await supabase
  //     .from("boards")
  //     .select("*")
  //     .eq("user_id", userId)
  //     .order("created_at", { ascending: false });

  //   if (error) throw error;
  //   return data || [];
  // },

  async createColumn(
    column: Omit<ColumnTypes, "id" | "created_at">,
  ): Promise<ColumnTypes> {
    const { data, error } = await supabase
      .from("column")
      .insert(column)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

// boardData service
export const boardDataService = {
  async createBoardWithDefaultColumns(boardData: {
    title: string;
    description?: string;
    color?: string;
    user_id: string;
  }) {
    const board = await boardService.createBoard({
      title: boardData.title,
      description: boardData.description || null,
      color: boardData.color || "bg-blue-700",
      user_id: boardData.user_id,
    });

    const defaultColums = [
      { title: "To Do", sort_order: 0 },
      { title: "In Progress", sort_order: 1 },
      { title: "Review", sort_order: 2 },
      { title: "Done", sort_order: 3 },
    ];

    await Promise.all(
      defaultColums.map((column) =>
        columnService.createColumn({ ...column, board_id: board.id }),
      ),
    );

    return board;
  },
};
