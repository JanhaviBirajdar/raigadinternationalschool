import { useEffect, useRef } from 'react';
import './FloatingIcons.css';

const ICONS = [
  { icon: '📖', label: 'book'       },
  { icon: '🌿', label: 'leaf'       },
  { icon: '🪁', label: 'kite'       },
  { icon: '🎓', label: 'mortarboard'},
  { icon: '☀️', label: 'sun'        },
  { icon: '🏔️', label: 'mountain'  },
  { icon: '✏️', label: 'pencil'    },
  { icon: '🌸', label: 'flower'     },
];

/**
 * FloatingIcons — scattered animated emoji icons drifting gently.
 * Wraps `children` and overlays the icons absolutely.
 */
export default function FloatingIcons({ children, count = 6 }) {
  const items = ICONS.slice(0, count);

  return (
    <div className="floating-host">
      {children}
      <div className="floating-icons" aria-hidden="true">
        {items.map((it, i) => (
          <span
            key={it.label}
            className="floating-icon"
            style={{
              left:              `${10 + i * (80 / count)}%`,
              top:               `${15 + (i % 3) * 25}%`,
              animationDelay:    `${i * 0.7}s`,
              animationDuration: `${4 + i * 0.5}s`,
              fontSize:          `${1.2 + (i % 3) * 0.4}rem`,
            }}
          >
            {it.icon}
          </span>
        ))}
      </div>
    </div>
  );
}
