export interface BoardTypes {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  color: string;
  created_at: string;
  updated_at: string;
}

export interface ColumnTypes {
  id: string;
  board_id: string;
  title: string;
  sort_order: number;
  created_at: string;
}

export interface TaskTypes {
  id: string;
  column_id: string;
  title: string;
  description: string | null;
  assignee: string | null;
  priorty: "low" | "medium" | "high";
  sort_order: number;
  due_date: string | null;
  created_at: string;
  updated_at: string;
}
