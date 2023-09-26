import './CircleText.scss';
import React from 'react';
declare module 'react' {
  interface CSSProperties {
    '--total'?: number;
    '--inner-angle'?: number;
    '--radius'?: number;
    '--char-index'?: number;
  }
}

interface CircleTextProps {
  text: string;
}

const CircleText: React.FC<CircleTextProps> = ({ text }) => {
  const CHARS: string[] = text.split('');
  const INNER_ANGLE: number = 360 / CHARS.length;

  return (
    <span
      className="text-ring"
      style={{
        '--total': CHARS.length,
        '--radius': 3 / Math.sin(INNER_ANGLE / (180 / Math.PI))
      }}
        >
      {CHARS.map((char, index) => (
          <span
          key={index}
          style={{
              '--char-index': index,
            //   '--inner-angle': INNER_ANGLE,
            //   '--total': CHARS.length,
            //   '--radius': 1 / Math.sin(INNER_ANGLE),
            // transform: `rotate(${index * INNER_ANGLE}deg)`,
             
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default CircleText;
