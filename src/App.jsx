import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chat from "./pages/Chat";
import Status from "./pages/Status";
import Settings from "./pages/Settings";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/status" element={<Status />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
