import React from "react";
import Sidebar from "./components/Sidebar";
import LogTable from "./components/LogTable";

function App() {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <LogTable />
      </div>
    </div>
  );
}

export default App;
