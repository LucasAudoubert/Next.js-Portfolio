import { CSSProperties, ReactElement } from 'react';

export interface LogoLoopProps {
  logos: Array<{ name: string; path: string }>;
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (logo: { name: string; path: string }) => ReactElement;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

declare const LogoLoop: React.MemoExoticComponent<(props: LogoLoopProps) => ReactElement>;

export default LogoLoop;
