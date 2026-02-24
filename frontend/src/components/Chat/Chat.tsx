import { useState } from "react";
import bot from "../../images/bot.png";

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "ai" }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;

    setMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://minimal-doe-composed-trek.trycloudflare.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();

      const reply =
        data?.choices?.[0]?.message?.content || "No response received.";

      setMessages((prev) => [...prev, { text: reply, sender: "ai" }]);
    } catch {
      setMessages((prev) => [...prev, { text: "Server error", sender: "ai" }]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "none",
            background: "linear-gradient(135deg, #7b2ff7, #4facfe)",
            color: "white",
            fontSize: "26px",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
            zIndex: 9999,
          }}
        >
          <img
            src={bot}
            alt="Chat Bot"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "340px",
            height: "460px",
            background: "#1c1333",
            borderRadius: "16px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "14px",
              background: "linear-gradient(135deg, #7b2ff7, #4facfe)",
              color: "white",
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            AI Assistant
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "12px",
              overflowY: "auto",
              fontSize: "14px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    m.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    background: m.sender === "user" ? "#7b2ff7" : "#2a2148",
                    color: "white",
                    padding: "10px 14px",
                    borderRadius: "18px",
                    maxWidth: "75%",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && <div style={{ color: "#aaa" }}>AI is typing...</div>}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #333",
            }}
          >
            <input
              style={{
                flex: 1,
                background: "#2a2148",
                border: "none",
                color: "white",
                padding: "10px",
                borderRadius: "10px",
                outline: "none",
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about me..."
            />

            <button
              onClick={sendMessage}
              style={{
                marginLeft: "8px",
                background: "linear-gradient(135deg, #7b2ff7, #4facfe)",
                border: "none",
                color: "white",
                padding: "10px 14px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;
