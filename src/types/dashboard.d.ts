export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  progress: number;
}

export interface UserStats {
  xp: number;
  level: number;
  tasksCompleted: number;
  streak: number;
  achievements: string[];
}