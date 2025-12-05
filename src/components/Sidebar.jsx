import React from "react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 p-6 flex flex-col">
      <h1 className="text-2xl font-bold text-white mb-6">Logger System</h1>

      <nav className="space-y-3">
        <button className="w-full text-left py-2 px-3 rounded bg-gray-700 hover:bg-gray-600 transition">
          Dashboard
        </button>
        <button className="w-full text-left py-2 px-3 rounded bg-gray-700 hover:bg-gray-600 transition">
          Logs
        </button>
      </nav>

      <div className="mt-auto">
        <p className="text-sm text-gray-400">© 2025 Ainul</p>
      </div>
    </div>
  );
}
