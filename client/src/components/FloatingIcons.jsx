import './FloatingIcons.css';

const ICONS = [
  { icon: '🌿', label: 'leaf'       },
  { icon: '☁️', label: 'cloud'      },
  { icon: '🕊', label: 'bird'       },
  { icon: '🌸', label: 'flower'     },
  { icon: '☀️', label: 'sun'        },
  { icon: '🍃', label: 'leafgreen'  },
  { icon: '✨', label: 'sparkle'    },
  { icon: '🌄', label: 'sunrise'    },
];

/**
 * FloatingIcons — scattered animated nature icons drifting gently.
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
              animationDelay:    `${i * 0.9}s`,
              animationDuration: `${5 + i * 0.6}s`,
              fontSize:          `${1.0 + (i % 3) * 0.3}rem`,
            }}
          >
            {it.icon}
          </span>
        ))}
      </div>
    </div>
  );
}
