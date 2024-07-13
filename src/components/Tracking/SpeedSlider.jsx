import React from 'react';

const SpeedSlider = ({ speed, setSpeed }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <input
        type="range"
        min="1"
        max="10"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
      />
      <p className="mt-2 text-xl text-gray-700 font-semibold">Speed: {speed}</p>
    </div>
  );
};

export default SpeedSlider;
