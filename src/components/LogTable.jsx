export default function LogTable({ logs }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow-xl border border-gray-800">
      <h2 className="text-xl font-bold mb-3">Aktivitas Log</h2>
      <table className="w-full border-collapse text-gray-300">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-2 text-left">Waktu</th>
            <th className="p-2 text-left">Aktivitas</th>
          </tr>
        </thead>
        <tbody>
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-gray-800"
              >
                <td className="p-2">{log.time}</td>
                <td className="p-2">{log.activity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="p-4 text-center text-gray-500">
                Tidak ada log aktivitas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
