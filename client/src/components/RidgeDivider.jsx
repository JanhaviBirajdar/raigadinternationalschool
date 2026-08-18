import './RidgeDivider.css';

/**
 * RidgeDivider — the fort/hill SVG stripe that separates sections.
 * flip=true  → rotates 180° so the ramparts face down (for use at top of dark sections)
 * color      → CSS background color beneath the SVG
 */
export default function RidgeDivider({ flip = false, bg = 'transparent' }) {
  return (
    <div
      className={`ridge-wrap ${flip ? 'ridge-wrap--flip' : ''}`}
      style={{ background: bg }}
      aria-hidden="true"
    >
      <img
        src="/assets/svg/ridge.svg"
        alt=""
        className="ridge-img"
        loading="lazy"
      />
    </div>
  );
}
