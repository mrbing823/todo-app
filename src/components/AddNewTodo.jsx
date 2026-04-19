import { useState } from "react";

export default function AddNewTodo({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim()) {
      onAdd(value);
      setValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-300 outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition"
      />
      <button
        onClick={handleSubmit}
        className="flex items-center gap-2 px-5 py-3 bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-600 text-white text-sm font-medium rounded-xl transition"
      >
        <span className="text-lg leading-none">+</span>
        Add
      </button>
    </div>
  );
}
