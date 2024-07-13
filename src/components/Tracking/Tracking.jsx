import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AnalogClock from './AnalogClock';
import SpeedSlider from './SpeedSlider';
import ShareButton from './ShareButton';
import { LogoutOutlined } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};



const Tracking = () => {
  const { user, loading, error, logout } = useAuth();

  // const [speed, setSpeed] = useState(1);

  const query = useQuery();
  const initialSpeed = query.get('speed') ? Number(query.get('speed')) : 1;
  const [speed, setSpeed] = useState(initialSpeed);

  return (
    <div className='w-full h-screen flex flex-col justify-between items-center bg-cover bg-center transition-all duration-500 ease-in-out backdrop-blur-sm ' style={{ backgroundImage: 'url("./src/assets/background1.png") ' }}>
      <div className='flex flex-col justify-between items-center w-full h-full backdrop-blur-[3px]'>
        <AnalogClock speed={speed} />

        <div className=' relative w-full h-[40%] rounded-t-[24px] flex flex-col justify-center  items-center backdrop-blur-3xl  bg-[#FE8C00]/90 p-6 text-white shadow-md shadow-white'>
          <Link to={'/'} className=' absolute top-6 left-6' >
          <svg
                className='inline-block mr-2'
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'rotate(180deg)' }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L13.7071 14.7071C13.3166 15.0976 12.6834 15.0976 12.2929 14.7071C11.9024 14.3166 11.9024 13.6834 12.2929 13.2929L14.5858 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
                  fill="white"
                />
              </svg>
          </Link>


          <button onClick={logout} className=' absolute top-6 right-6'>
            <LogoutOutlined/>
          </button>


          <SpeedSlider speed={speed} setSpeed={setSpeed} />
          <ShareButton speed={speed} />
        </div>
      </div>
    </div>
  );
};

export default Tracking;
