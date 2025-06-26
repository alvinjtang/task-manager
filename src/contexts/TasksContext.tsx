import React, { createContext, useContext, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
};

type TasksContextType = {
  tasks: TaskType[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
  updateTask: (id: string, title: string) => void;
  clearCompletedTasks: () => void;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (title: string) => {
    setTasks(prev => [...prev, { title, id: uuidv4(), completed: false }]);
  };

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const updateTask = (id: string, title: string) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, title } : task));
  };

  const clearCompletedTasks = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, toggleTask, updateTask, clearCompletedTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};