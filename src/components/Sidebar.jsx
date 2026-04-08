import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🤖 ClearML AI</h2>
      <Link to="/">💬 Chat</Link>
      <Link to="/status">📊 Status</Link>
      <Link to="/settings">⚙️ Settings</Link>
    </div>
  );
}
