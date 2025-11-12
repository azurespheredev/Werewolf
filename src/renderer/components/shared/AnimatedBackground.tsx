import { ReactNode, useEffect, useState } from 'react';
import { GamePhaseEnum } from '../../../lib/enums';

interface AnimatedBackgroundProps {
  phase: GamePhaseEnum;
  className?: string;
  children: ReactNode;
}

const BACKGROUND_IMAGES = {
  [GamePhaseEnum.WAITING]: '/images/village_daylight.jpg',
  [GamePhaseEnum.DAY]: '/images/village_daylight.jpg',
  [GamePhaseEnum.VOTING]: '/images/village_sunset.jpg',
  [GamePhaseEnum.NIGHT]: '/images/village_night.jpg',
  [GamePhaseEnum.ENDED]: '/images/village_sunset.jpg',
};

export default function AnimatedBackground({
  phase,
  className = '',
  children,
}: AnimatedBackgroundProps) {
  const [currentBg, setCurrentBg] = useState(BACKGROUND_IMAGES[phase]);
  const [nextBg, setNextBg] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const newBg = BACKGROUND_IMAGES[phase];
    if (newBg !== currentBg) {
      setNextBg(newBg);
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setCurrentBg(newBg);
        setNextBg(null);
        setIsTransitioning(false);
      }, 2000); // 2 second transition

      return () => clearTimeout(timer);
    }
  }, [phase, currentBg]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Current Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-2000"
        style={{
          backgroundImage: `url(${currentBg})`,
          opacity: isTransitioning ? 0 : 1,
        }}
      />

      {/* Next Background (for smooth transition) */}
      {nextBg && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-2000"
          style={{
            backgroundImage: `url(${nextBg})`,
            opacity: isTransitioning ? 1 : 0,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
