export default function TodoItem({ task, onToggle }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition group"
      onClick={() => onToggle(task.id)}
    >
      {/* Status Icon */}
      <div className="flex-shrink-0">
        {task.completed ? (
          <div className="w-5 h-5 rounded-full border-2 border-green-400 bg-green-50 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-green-500"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="2,6 5,9 10,3" />
            </svg>
          </div>
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-indigo-300 transition" />
        )}
      </div>

      {/* Title */}
      <span
        className={`text-sm ${
          task.completed
            ? "line-through text-gray-400"
            : "text-gray-700"
        }`}
      >
        {task.title}
      </span>
    </div>
  );
}
