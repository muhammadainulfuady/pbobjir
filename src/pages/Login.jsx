import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-96 border border-gray-700 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Sistem Logger</h1>
        <input
          className="w-full p-3 rounded bg-gray-800 text-white mb-4 border border-gray-700"
          placeholder="Masukkan Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() =>
            username.trim() ? onLogin(username) : alert("Masukkan username")
          }
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
