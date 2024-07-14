
import React, { useEffect } from 'react';
import CircularProgressBar from '../ui/CircularProgressBar';

const Onboarding1 = ({ back, next, onboarding }) => {



  function titleBanner(onboarding) { 
    switch (onboarding) {
      case 1:
        return "We serve incomparable delicacies"
        break;
      case 2 :
        return "We provide unmatched cuisine"
      case 3: 
        return "We offer unparalleled flavors"
      default:
        return "We serve incomparable delicacies"
        break;
    }
   }


  return (
    <div className='w-full h-full flex flex-col justify-end items-center p-10 bg-cover bg-center transition-all duration-500 ease-in-out' style={{ backgroundImage: 'url("/background1.png") ' }}>

      {/* Background */}
      <div className=' w-[311px] h-[400px] rounded-[48px] flex flex-col items-center justify-between bg-[#FE8C00] text-white p-8'>

        <div className=' relative flex flex-col items-center justify-center w-full'>
          <h1 className=' text-3xl font-bold text-center transition-all duration-500 ease-in-out '
          >
          {
            titleBanner(onboarding)
          }
          </h1>

          <p className=' my-4 text-center text-sm '
          >All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</p>

          {/* hug */}
          <div className=' my-4 flex justify-center items-center gap-1 transition-all duration-500 ease-in-out'>
            <div className={`w-7 h-2 ${onboarding == 1 ? 'bg-white' : 'bg-[#C2C2C2]'} rounded-full transition-all duration-500 ease-in-out`}></div>
            <div className={` w-7 h-2 ${onboarding == 2 ? 'bg-white' : 'bg-[#C2C2C2]'} rounded-full transition-all duration-500 ease-in-out`}></div>
            <div className={` w-7 h-2 ${onboarding == 3 ? 'bg-white' : 'bg-[#C2C2C2]'} rounded-full transition-all duration-500 ease-in-out`}></div>
          </div>

          {
            onboarding == 3 ?
            <CircularProgressBar />
            : ""
          }
        </div>

        <div className=' text-sm font-semibold flex justify-between items-center w-full'>
          {/* Skip */} 
          <span
            onClick={next}
            className=' cursor-pointer select-none' 
          >Skip</span>

          <span >
            {/* Back */}
            <span
              onClick={back}
              className=' cursor-pointer mx-2 select-none'
            >
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

              Back</span>

              {/* Next */}
            <span
              onClick={next}
              className=' cursor-pointer select-none'>
              Next
              <svg className=' inline-block ml-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L13.7071 14.7071C13.3166 15.0976 12.6834 15.0976 12.2929 14.7071C11.9024 14.3166 11.9024 13.6834 12.2929 13.2929L14.5858 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z" fill="white" />
              </svg>

            </span>
          </span>
        </div>


      </div>




    </div>
  );
};

export default Onboarding1;
