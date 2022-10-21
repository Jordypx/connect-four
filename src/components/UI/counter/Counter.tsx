import React from 'react';
import { CounterElement, WhiteCircle } from './CounterStyles';
import { whiteCircleVariants } from '../../../frameMotinVariats/frameMotionVariants';

const Counter: React.FC<{ bg: string; row: number; isWin: boolean }> = ({
  bg,
  row,
  isWin,
}) => {
  return (
    <CounterElement
      bg={bg}
      animate={{ y: [-(80 * row + 70), 0, -35, 0, -20, 0] }}
      transition={{
        duration: 0.6,
        times: [0, 0.4, 0.6, 0.7, 0.8, 1],
      }}
    >
      {isWin && (
        <WhiteCircle
          animate={{ scale: [0, 1.5, 1] }}
          transition={{
            duration: 0.6,
            times: [0, 0.5, 1],
          }}
          // @ts-ignore
          // variants={whiteCircleVariants}
          // initial="hidden"
          // animate="visible"
          // exit="exit"
        />
      )}
    </CounterElement>
  );
};

export default Counter;