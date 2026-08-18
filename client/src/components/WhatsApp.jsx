import './WhatsApp.css';

const WA_NUMBER = '919000000000'; // +91 90000 00000 — update when ready
const WA_MESSAGE = encodeURIComponent(
  'Hello! I would like to enquire about Raigad International School.'
);

export default function WhatsApp() {
  const href = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

  return (
    <a
      id="whatsapp-widget"
      className="wa-widget"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Raigad School on WhatsApp"
      title="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="16" cy="16" r="16" fill="#25D366"/>
        <path
          d="M22.8 19.6c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.08-.12-.28-.2-.58-.35z"
          fill="white"
        />
        <path
          d="M16 5C9.93 5 5 9.93 5 16c0 1.96.52 3.8 1.43 5.38L5 27l5.75-1.4C12.26 26.5 14.07 27 16 27c6.07 0 11-4.93 11-11S22.07 5 16 5zm0 20c-1.77 0-3.44-.48-4.87-1.32l-.35-.2-3.41.83.85-3.33-.22-.35A8.93 8.93 0 017 16c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9z"
          fill="white"
        />
      </svg>
      <span className="wa-tooltip">Chat on WhatsApp</span>
    </a>
  );
}
