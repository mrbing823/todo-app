import { useState, useEffect } from "react";
import AddNewTodo from "./components/AddNewTodo";
import TodoItem from "./components/TodoItem";

const STORAGE_KEY = "todo-app-tasks";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [
        { id: 1, title: "API documentation review", completed: false },
        { id: 2, title: "Quarterly roadmap sync", completed: false },
        { id: 3, title: "Design system audit", completed: true },
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const activeTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <AddNewTodo onAdd={addTask} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Column */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Active &mdash; {activeTasks.length}
            </p>
            <div className="space-y-2">
              {activeTasks.length === 0 ? (
                <p className="text-sm text-gray-300 italic py-4 text-center">
                  No active tasks
                </p>
              ) : (
                activeTasks.map((task) => (
                  <TodoItem key={task.id} task={task} onToggle={toggleTask} />
                ))
              )}
            </div>
          </div>

          {/* Completed Column */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Completed &mdash; {completedTasks.length}
            </p>
            <div className="space-y-2">
              {completedTasks.length === 0 ? (
                <p className="text-sm text-gray-300 italic py-4 text-center">
                  No completed tasks
                </p>
              ) : (
                completedTasks.map((task) => (
                  <TodoItem key={task.id} task={task} onToggle={toggleTask} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
