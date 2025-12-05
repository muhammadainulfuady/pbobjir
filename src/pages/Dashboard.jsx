import { useState, useEffect } from "react";
import LogTable from "../components/LogTable";

export default function Dashboard({ username, onLogout }) {
  // Menyimpan daftar log yang diterima dari backend
  const [logs, setLogs] = useState([]);

  // useEffect dijalankan sekali saat komponen pertama kali dirender (mount)
  // Fungsi ini akan mengambil data log awal dari server
  useEffect(() => {
    fetch("http://localhost:5000/log")
      .then((res) => res.json()) // ubah JSON response ke objek JS
      .then((data) => setLogs(data)); // simpan data log ke state
  }, []); // dependency array kosong = hanya jalan sekali

  // ================= HANDLER UNTUK BUTTON AKSI ================== //
  // Ketika klik Aksi A → kirim log baru ke backend
  const handleAksiA = () => {
    fetch("http://localhost:5000/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // memberi tahu backend bahwa kita mengirim JSON
      body: JSON.stringify({ activity: `User ${username} melakukan Aksi A` }),
    }).then(() => refreshLogs()); // setelah selesai, refresh tabel log
  };

  // Ketika klik Aksi B → proses yang sama seperti tombol A
  const handleAksiB = () => {
    fetch("http://localhost:5000/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activity: `User ${username} melakukan Aksi B` }),
    }).then(() => refreshLogs());
  };

  // Ambil ulang semua log terbaru dari backend (digunakan untuk tombol Refresh)
  const refreshLogs = () => {
    fetch("http://localhost:5000/log")
      .then((res) => res.json())
      .then((data) => setLogs(data)); // update state supaya UI berubah
  };

  // Hapus semua log pada server (DELETE request)
  const clearLogs = () => {
    fetch("http://localhost:5000/log", { method: "DELETE" }).then(
      () => setLogs([]) // kosongkan tampilan UI
    );
  };

  return (
    <div className="flex bg-gray-950 text-white min-h-screen">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6">
        <h2 className="text-2xl font-bold mb-6">Logger Panel</h2>

        <nav className="flex flex-col gap-4">
          <button className="text-left text-gray-300 hover:text-white">
            Aktivitas Log
          </button>

          <button
            className="text-left text-red-500 hover:text-red-400"
            onClick={onLogout} // kembali ke halaman login
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-6">
          {/* Menampilkan nama user yang login */}
          <h1 className="text-3xl font-bold">Selamat Datang, {username}</h1>

          {/* Tombol Aksi */}
          <div className="flex gap-3">
            <button
              className="bg-red-600 px-4 py-2 rounded"
              onClick={handleAksiA}
            >
              Aksi A
            </button>

            <button
              className="bg-blue-600 px-4 py-2 rounded"
              onClick={handleAksiB}
            >
              Aksi B
            </button>

            <button
              className="bg-yellow-600 px-4 py-2 rounded"
              onClick={refreshLogs}
            >
              Refresh
            </button>

            <button
              className="bg-red-600 px-4 py-2 rounded"
              onClick={clearLogs}
            >
              Hapus Log
            </button>
          </div>
        </header>

        {/* TABLE untuk menampilkan log */}
        <LogTable logs={logs} />
      </main>
    </div>
  );
}
