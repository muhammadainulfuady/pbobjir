# Logger Monitoring Dashboard

Sistem monitoring log real-time berbasis web sederhana tanpa database.  
Frontend menggunakan **React + Vite** dengan **Tailwind CSS**, dan backend menggunakan **Python Flask** untuk menyimpan dan menampilkan log.

---

## Fitur Utama
- Mencatat log ke dalam file log (`log.txt`)
- Refresh otomatis dari client untuk mengambil log terbaru
- Dashboard modern dengan tampilan elegan (Tailwind CSS)
- Fast HMR berkat Vite
- Struktur kode sederhana, mudah dipahami dan dikembangkan

---

## Struktur Folder
project-logger/
│
├── server.py # Backend Flask
├── log.txt # File penyimpanan log
│
└── frontend/ # React + Vite + Tailwind
├── index.html
├── package.json
├── vite.config.js
└── src/
├── App.jsx
└── components/
└── LogTable.jsx

yaml
Copy code

---

## Cara Instalasi & Menjalankan Proyek

### 1. Clone Repository
```sh
git clone https://github.com/username/logger-dashboard.git
cd logger-dashboard
2. Install Frontend Dependencies
sh
Copy code
cd frontend
npm install
3. Jalankan Frontend
sh
Copy code
npm run dev
Akses:

arduino
Copy code
http://localhost:5173
4. Jalankan Backend Python
sh
Copy code
cd ..
python server.py
Backend akan berjalan pada:

arduino
Copy code
http://localhost:5000
Cara Kerja Program
Alur proses:
User mengklik tombol Save Log pada dashboard

React mengirim request ke endpoint Flask /write

Flask menulis data log ke dalam file log.txt

React memanggil /logs setiap refresh untuk mengambil data terbaru

Dashboard menampilkan log dalam bentuk tabel

Fungsi Refresh
Fitur refresh digunakan untuk mengambil data log terbaru tanpa perlu restart server dan mensimulasikan mekanisme live-streaming log pada server production.

Tampilan UI (Diagram)
pgsql
Copy code
+-----------------------------------------------------+
|   Logger Dashboard                                  |
|-----------------------------------------------------|
|  [Input Text]    [Save Log]    [Refresh Logs]       |
|                                                     |
|  +---------------------------------------------+    |
|  | Timestamp           | Pesan Log             |    |
|  +---------------------------------------------+    |
|  | 2025-12-04 13:23    | Login success         |    |
|  | 2025-12-04 13:24    | User create record    |    |
|  +---------------------------------------------+    |
+-----------------------------------------------------+
Dependencies
Frontend
json
Copy code
"react": "^18",
"axios": "^1.7",
"tailwindcss": "^3",
"vite": "^6"
Backend
nginx
Copy code
Flask
Flask-CORS
Install:

sh
Copy code
pip install flask flask-cors
Author
Muhammad Ainul Fuady
Mahasiswa Teknik Informatika – Universitas Trunojoyo Madura
Bidang: Fullstack Web Developer, React, Python, Tailwind

Lisensi
Proyek ini bebas digunakan untuk belajar dan pengembangan pribadi.

yaml
Copy code

---

Siap pak komandan 🔥  

Kalau mau saya:
- Bikin **API Documentation** versi Markdown (POST /write, GET /logs)
- Bikin **Flowchart / ERD gaya profesional**
- Bikin **mockup UI** untuk README

Tinggal bilang **"lanjutkan API docs"** 🚀