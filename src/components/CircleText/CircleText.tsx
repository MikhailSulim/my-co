import './CircleText.scss';

declare module 'react' {
  interface CSSProperties {
    '--total'?: number;
    '--radius'?: number;
    '--char-index'?: number;
  }
}

interface CircleTextProps {
  text: string;
  className: string;
}

const CircleText: React.FC<CircleTextProps> = ({ text, className }) => {
  const CHARS: string[] = text.split('');
  const INNER_ANGLE: number = 360 / CHARS.length;

  return (
    <span className={`text-ring ${className}`}>
      {CHARS.map((char, index) => (
        <span
          key={index}
          style={{
            '--char-index': index,
            '--total': CHARS.length,
            '--radius': 2.2 / Math.sin(INNER_ANGLE / (180 / Math.PI)),
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default CircleText;
