import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);
  return !user ? (
    <Login onLogin={setUser} />
  ) : (
    <Dashboard username={user} onLogout={() => setUser(null)} />
  );
}
