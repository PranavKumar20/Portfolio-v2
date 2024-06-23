'use client';
import React, { useEffect, useRef } from 'react';
import { animated } from '@react-spring/web';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function Title({ title, size = '5rem', animateStyle = {}, interval = 2500 }) {
  const ref = useRef();

  useEffect(() => {
    if (size) ref.current.style.fontSize = size;
    const colorInterval = setInterval(() => {
      ref.current.style.color = `hsl(${random(1, 360)}, ${random(60, 100)}%, ${random(40, 60)}%)`;
    }, interval);
    return () => clearInterval(colorInterval);
  }, [size, interval]);

  return (
    <animated.div
      ref={ref}
      style={{ ...animateStyle, transition: 'color 3s' }}
      className="font-bold bg-transparent text-[1.2rem] md:text-3xl md:py-2 cursor-pointer mt-[40px] mb-[20px]"
    >
      {title}
    </animated.div>
  );
}

export default Title;
