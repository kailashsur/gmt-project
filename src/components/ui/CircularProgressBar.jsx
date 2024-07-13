import React, { useState, useEffect } from 'react';

const CircularProgressBar = ({ next }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [progress, setProgress] = useState(0);

  function handelClickToNextOnCircularProgressBar(){
    window.location.href = "/login"
  }

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
        setProgress(prevProgress => prevProgress + 10);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      // next();
      window.location.href = "/login"
      
    }
  }, [timeLeft, next]);

  const radius = 30;
  const stroke = 1;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div 
    onClick={handelClickToNextOnCircularProgressBar}
    className='flex flex-col items-center hover:motion-safe:animate-spin transition-all duration-500 ease-in-out   '>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="white"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ transition: 'stroke-dashoffset 1s linear', strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* White small circle behind the arrow */}
        <circle
          cx={radius}
          cy={radius}
          r="8"
          fill="white"
          stroke="white"
          strokeWidth="30"
        />
        {/* Arrow path */}
        <path
          d="M10 7l5 5-5 5"
          stroke="#FE8C00"
          strokeWidth="3"
          fill="none"
          transform={`translate(${radius - 12}, ${radius - 12})`}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;