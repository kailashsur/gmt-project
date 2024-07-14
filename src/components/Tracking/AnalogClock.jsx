import React, { useState, useEffect } from 'react';

const AnalogClock = ({ speed }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000 / speed);
    return () => clearInterval(interval);
  }, [speed]);

  const radius = 100;
  const center = { x: radius * 1.5, y: radius * 1.5 };
  const hourAngle = (time.getHours() % 12) * 30 * (Math.PI / 180) - Math.PI / 2;
  const minuteAngle = time.getMinutes() * 6 * (Math.PI / 180) - Math.PI / 2;
  const secondAngle = time.getSeconds() * 6 * (Math.PI / 180) - Math.PI / 2;

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 12; i++) {
      const angle = (i * 30) * (Math.PI / 180) - Math.PI / 2;
      const x = center.x + (radius - 20) * Math.cos(angle);
      const y = center.y + (radius - 20) * Math.sin(angle);
      numbers.push(
        <text
          key={i}
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
          fill="black"
        >
          {i}
        </text>
      );
    }
    return numbers;
  };

  const renderTicks = () => {
    const ticks = [];
    for (let i = 0; i < 60; i++) {
      const angle = (i * 6) * (Math.PI / 180) - Math.PI / 2;
      const x1 = center.x + radius * Math.cos(angle);
      const y1 = center.y + radius * Math.sin(angle);
      const x2 = center.x + (radius - (i % 5 === 0 ? 15 : 5)) * Math.cos(angle);
      const y2 = center.y + (radius - (i % 5 === 0 ? 15 : 5)) * Math.sin(angle);
      ticks.push(
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="black"
          strokeWidth={i % 5 === 0 ? "2" : "1"}
        />
      );
    }
    return ticks;
  };

  return (
    <div className=' w-full h-auto p-6 flex justify-center items-center flex-col gap-5' >
      {/* Watch */}
      <div className=' h-[300px] w-[300px] flex justify-center items-center shadow-white shadow-sm  rounded-full backdrop-blur-3xl'>
        <svg width={radius * 3} height={radius * 3}>
          <circle cx={center.x} cy={center.y} r={radius} stroke="black" strokeWidth="3" fill="white" />
          {renderTicks()}
          {renderNumbers()}
          <line
            x1={center.x}
            y1={center.y}
            x2={center.x + (radius - 20) * Math.cos(hourAngle)}
            y2={center.y + (radius - 20) * Math.sin(hourAngle)}
            stroke="black"
            strokeWidth="4"
          />
          <line
            x1={center.x}
            y1={center.y}
            x2={center.x + (radius - 10) * Math.cos(minuteAngle)}
            y2={center.y + (radius - 10) * Math.sin(minuteAngle)}
            stroke="black"
            strokeWidth="2"
          />
          <line
            x1={center.x}
            y1={center.y}
            x2={center.x + radius * Math.cos(secondAngle)}
            y2={center.y + radius * Math.sin(secondAngle)}
            stroke="red"
            strokeWidth="1"
          />
        </svg>
      </div>

<div className=' bg-[#36363662] p-2 backdrop-blur-xl'>
      <p
      className='text-xl font-extrabold text-white drop-shadow-base'
      >{time.toLocaleTimeString()}</p>


</div>

    </div>
  );
};

export default AnalogClock;
