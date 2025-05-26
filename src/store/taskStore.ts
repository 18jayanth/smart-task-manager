import { create } from 'zustand';

interface TaskState {
  tasks: string[];
  addTask: (task: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));
