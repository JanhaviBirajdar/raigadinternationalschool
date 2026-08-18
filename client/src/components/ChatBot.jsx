import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './ChatBot.css';

const WELCOME = {
  from: 'bot',
  text: "🙏 Namaste! I'm the Raigad School assistant. Ask me about admissions, fees, academics, facilities, or anything else!",
};

export default function ChatBot() {
  const [open,     setOpen]     = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input,    setInput]    = useState('');
  const [loading,  setLoading]  = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages((m) => [...m, { from: 'user', text }]);
    setLoading(true);
    try {
      const { data } = await axios.post('/api/chat', { message: text });
      setMessages((m) => [...m, { from: 'bot', text: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { from: 'bot', text: 'Sorry, I could not connect right now. Please call us at +91 90000 00000.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
    <>
      {/* Bubble trigger */}
      <button
        id="chatbot-trigger"
        className={`chat-trigger ${open ? 'chat-trigger--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Open school assistant chatbot"
        title="Ask our school assistant"
      >
        {open ? '✕' : '💬'}
        {!open && <span className="chat-trigger__badge">?</span>}
      </button>

      {/* Panel */}
      <div className={`chat-panel ${open ? 'chat-panel--open' : ''}`} role="dialog" aria-label="School Chatbot">
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header__avatar">🎓</div>
          <div>
            <div className="chat-header__name">RIS Assistant</div>
            <div className="chat-header__status">
              <span className="status-dot" /> Online
            </div>
          </div>
          <button className="chat-header__close" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble chat-bubble--${msg.from}`}>
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="chat-bubble chat-bubble--bot chat-bubble--typing">
              <span /><span /><span />
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Quick chips */}
        {messages.length === 1 && (
          <div className="chat-chips">
            {['Admissions', 'Fee structure', 'School timings', 'Facilities'].map((chip) => (
              <button
                key={chip}
                className="chat-chip"
                onClick={() => { setInput(chip); }}
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chat-input-row">
          <input
            id="chatbot-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Type your question…"
            disabled={loading}
            aria-label="Chat message input"
          />
          <button
            id="chatbot-send"
            className="chat-send"
            onClick={send}
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
}
