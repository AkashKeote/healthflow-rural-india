
import { useState } from "react";

const initialMessages = [
  { from: "bot", text: "नमस्ते! How can I help you today? (You can use Hindi/English/Maithili)" },
];

const ChatWindow = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    // Simulate multilingual bot reply
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "This is a demo AI response. (Add real AI integration here!)" }
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={
            msg.from === "bot"
              ? "text-gray-700 bg-blue-50 px-3 py-2 rounded-lg max-w-xs"
              : "text-right bg-green-50 px-3 py-2 rounded-lg max-w-xs ml-auto"
          }>
            <span>{msg.text}</span>
          </div>
        ))}
        {loading && (
          <div className="text-gray-400 text-sm">HealthBot is typing…</div>
        )}
      </div>
      <form className="flex gap-2" onSubmit={handleSend}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border rounded px-3 py-2 focus:outline-none"
          placeholder="Ask a health question..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          Send
        </button>
      </form>
      <div className="text-xs text-gray-400 mt-2">Voice coming soon • Multilingual</div>
    </div>
  );
};

export default ChatWindow;
