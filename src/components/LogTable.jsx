import React, { useState } from "react";

export default function LogTable() {
  const [logs, setLogs] = useState([
    { id: 1, level: "INFO", message: "App started", time: "10:10:20" },
    {
      id: 2,
      level: "ERROR",
      message: "Database not connected",
      time: "10:11:01",
    },
    { id: 3, level: "WARNING", message: "Low memory", time: "10:12:44" },
  ]);

  const clearLogs = () => {
    setLogs([]); // frontend only dummy
  };

  return (
    <div>
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-xl font-semibold">Log Records</h2>

        <div className="flex gap-3">
          <input
            placeholder="Search logs..."
            className="px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
          />

          <button
            onClick={clearLogs}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-bold"
          >
            Clear Logs
          </button>
        </div>
      </div>

      <div className="border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full table-auto text-left">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Level</th>
              <th className="p-3">Message</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr
                key={log.id}
                className="border-t border-gray-700 hover:bg-gray-800"
              >
                <td className="p-3">{log.id}</td>
                <td className="p-3">{log.level}</td>
                <td className="p-3">{log.message}</td>
                <td className="p-3">{log.time}</td>
              </tr>
            ))}

            {logs.length === 0 && (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan={4}>
                  No logs available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
