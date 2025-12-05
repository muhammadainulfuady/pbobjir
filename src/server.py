from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime

# Membuat instance Flask
app = Flask(__name__)

# Mengaktifkan CORS agar frontend React (localhost:5173) bisa akses ke backend ini (localhost:5000)
CORS(app)

# Variabel untuk menyimpan log (sementara, belum pakai database)
logs = []


# ====================== ENDPOINT LOGIN ====================== #
@app.post("/login")
def login():
    # Ambil data JSON yang dikirim dari frontend
    data = request.get_json()
    username = data.get("username")

    # Validasi: username tidak boleh kosong
    if not username:
        return jsonify({"success": False, "message": "Username tidak boleh kosong"}), 400

    # Menyimpan log aktivitas login
    logs.append({
        "time": datetime.datetime.now().strftime("%H:%M:%S"),  # waktu sekarang format jam:menit:detik
        "activity": f"User '{username}' login"
    })

    # Response kembali ke React
    return jsonify({"success": True, "message": "Login berhasil", "user": username})


# ====================== TAMBAH LOG BARU ====================== #
@app.post("/log")
def add_log():
    data = request.get_json()
    activity = data.get("activity")  # Ambil aktivitas dari body JSON

    logs.append({
        "time": datetime.datetime.now().strftime("%H:%M:%S"),
        "activity": activity
    })

    return jsonify({"success": True})


# ====================== GET LOGS ====================== #
@app.get("/log")
def get_logs():
    # Kirim seluruh data log ke frontend
    return jsonify(logs)


# ====================== HAPUS SEMUA LOG ====================== #
@app.delete("/log")
def delete_logs():
    logs.clear()  # Kosongkan list logs
    return jsonify({"success": True, "message": "Semua log dihapus"})


# ====================== MAIN PROGRAM ====================== #
if __name__ == "__main__":
    app.run(port=5000, debug=True)  # Jalankan server di port 5000, debug aktif untuk auto reload