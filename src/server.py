from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app)  # Mengizinkan akses API dari frontend React (Cross-Origin Resource Sharing)

# =======================================================
#  CREATIONAL DESIGN PATTERN: SINGLETON (LogManager)
# =======================================================
class LogManager:
    # Static / class-level variable untuk menyimpan instance tunggal
    __instance = None

    def __init__(self):
        # Mencegah pembuatan objek baru lebih dari satu kali
        if LogManager.__instance is not None:
            raise Exception("Singleton sudah pernah dibuat, gunakan get_instance()")

        # Penyimpanan log sementara dalam list (tanpa database)
        self.logs = []

    @staticmethod
    def get_instance():
        """Method static untuk mengambil instance tunggal LogManager"""
        if LogManager.__instance is None:
            LogManager.__instance = LogManager()
        return LogManager.__instance

    # ==================== OPERASI MANAJEMEN LOG ==================== #
    def add_log(self, activity):
        """Menambah log baru dengan timestamp waktu real-time"""
        self.logs.append({
            "time": datetime.datetime.now().strftime("%H:%M:%S"),
            "activity": activity
        })

    def get_logs(self):
        """Mengambil semua log"""
        return self.logs

    def clear_logs(self):
        """Menghapus seluruh log"""
        self.logs.clear()


# Buat instance singleton LogManager
log_manager = LogManager.get_instance()


# =======================================================
#                 ROUTES / ENDPOINT API
# =======================================================

@app.post("/login")
def login():
    """Endpoint login: menerima username, membuat log login, dan merespons ke frontend"""
    data = request.get_json()
    username = data.get("username")

    # Validasi sederhana input kosong
    if not username:
        return jsonify({"success": False, "message": "Username tidak boleh kosong"}), 400

    # Membuat log login
    log_manager.add_log(f"User '{username}' login")

    return jsonify({"success": True, "message": "Login berhasil", "user": username})


@app.post("/log")
def add_log():
    """Endpoint untuk menambah event aktivitas ke log"""
    data = request.get_json()
    activity = data.get("activity")

    log_manager.add_log(activity)
    return jsonify({"success": True})


@app.get("/log")
def get_logs():
    """Mengembalikan semua log untuk ditampilkan di dashboard"""
    return jsonify(log_manager.get_logs())


@app.delete("/log")
def delete_logs():
    """Menghapus seluruh log"""
    log_manager.clear_logs()
    return jsonify({"success": True, "message": "Semua log dihapus"})


# =======================================================
#                       MAIN SERVER
# =======================================================
if __name__ == "__main__":
    app.run(port=5000, debug=True)  # Menyalakan server pada port 5000
