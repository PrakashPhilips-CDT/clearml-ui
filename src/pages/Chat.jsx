import { useState } from "react";

const API = "https://6hoixxya7h.execute-api.us-east-1.amazonaws.com/clearml";

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "👋 Welcome to ClearML AI", type: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async (action) => {
    if (!action) return;

    setMessages((m) => [...m, { text: action, type: "user" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });

      const data = await res.json();

      setMessages((m) => [
        ...m,
        { text: data.message, type: "bot" }
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { text: "❌ API error", type: "bot" }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.type}`}>
            {m.text}
          </div>
        ))}

        {loading && <div className="msg bot">⏳ Thinking...</div>}
      </div>

      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command..."
        />
        <button onClick={() => send(input)}>Send</button>
      </div>

      <div className="actions">
        <button onClick={() => send("deploy")}>🚀 Deploy</button>
        <button onClick={() => send("destroy")}>🔥 Destroy</button>
        <button onClick={() => send("add_user")}>👤 Add User</button>
        <button onClick={() => send("list_users")}>📋 Users</button>
      </div>
    </div>
  );
}
