import React from "react";
import { Link } from "react-router-dom";


function Success({user, logout}) {

    

    return (
        <div className='w-full h-screen flex flex-col justify-end items-center bg-cover bg-center transition-all duration-500 ease-in-out' style={{ backgroundImage: 'url("/background1.png") ' }}>

            {/* Background */}
            <div className=' relative w-full h-[50%] rounded-t-[24px] flex flex-col items-center  bg-[#FFFFFF] p-6'>

                <div className=" absolute top-0">
                    <svg width="327" height="24" viewBox="0 0 327 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="134.433" y="10" width="58.1333" height="4" rx="2" fill="black" fillOpacity="0.2" />
                    </svg>
                </div>


                {/* Success ilustretor */}
                <div className=" p-4 animate-pulse ">
                    <svg width="207" height="168" viewBox="0 0 207 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.1" cx="104.189" cy="106" r="62" fill="#FE8C00" />
                        <circle cx="35.1891" cy="59" r="4" fill="#B468FF" />
                        <circle cx="110.689" cy="15.5" r="8.5" fill="#B468FF" />
                        <circle cx="187.189" cy="95" r="8" fill="#FE8C00" />
                        <path d="M152.189 5L154.271 10.9183L160.189 13L154.271 15.0817L152.189 21L150.107 15.0817L144.189 13L150.107 10.9183L152.189 5Z" fill="#FB46FF" />
                        <path d="M28.8425 78.5306C28.8425 78.5306 27.1961 85.177 19.3985 85.4631C14.2001 85.6539 12.9772 80.2666 6.90458 83.9134C4.20019 85.5374 2.18909 90.4719 2.18909 90.4719" stroke="#FB46FF" strokeWidth="3" strokeLinecap="round" />
                        <path d="M31.6891 117L34.5773 124.612L42.1891 127.5L34.5773 130.388L31.6891 138L28.8009 130.388L21.1891 127.5L28.8009 124.612L31.6891 117Z" fill="#FE8C00" />
                        <circle cx="101.189" cy="3" r="2" fill="#FB46FF" />
                        <path d="M38.5133 3.76226C39.4964 12.3082 59.3559 20.8261 59.7984 13.8343C60.4996 2.75464 33.7161 11.3933 70.2565 25.9123" stroke="#FE8C00" strokeWidth="3" strokeLinecap="round" />
                        <path d="M185.189 133.81C190.153 133.106 200.977 134.293 204.559 144.676" stroke="#B468FF" strokeWidth="3" strokeLinecap="round" />
                        <path d="M180.268 37.3673C180.268 37.3673 187.527 41.06 190.569 37.7505C193.344 34.7316 190.135 30.02 193.492 27.6657C196.224 25.75 202.011 27.0118 202.011 27.0118" stroke="#FE8C00" strokeWidth="3" strokeLinecap="round" />
                        <rect x="177.189" y="74" width="7" height="7" rx="2" fill="#FE8C00" />
                        <path d="M96.5354 63.4998C101.436 61.4699 106.942 61.4699 111.843 63.4998L128.829 70.5359C133.73 72.5658 137.623 76.4592 139.653 81.3598L146.689 98.3463C148.719 103.247 148.719 108.753 146.689 113.654L139.653 130.64C137.623 135.541 133.73 139.434 128.829 141.464L111.843 148.5C106.942 150.53 101.436 150.53 96.5354 148.5L79.5489 141.464C74.6483 139.434 70.7548 135.541 68.725 130.64L61.6889 113.654C59.659 108.753 59.659 103.247 61.6889 98.3463L68.725 81.3598C70.7548 76.4592 74.6483 72.5658 79.5489 70.5359L96.5354 63.4998Z" fill="#F5F5FF" stroke="#FE8C00" strokeWidth="8" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M116.069 93.88C116.629 93.3251 117.385 93.0128 118.173 93.0106C118.961 93.0085 119.719 93.3166 120.281 93.8684C120.844 94.4202 121.167 95.1714 121.181 95.9595C121.194 96.7476 120.897 97.5093 120.353 98.08L104.385 118.04C104.111 118.336 103.78 118.573 103.411 118.737C103.043 118.902 102.646 118.991 102.242 118.998C101.839 119.006 101.438 118.932 101.064 118.781C100.69 118.63 100.35 118.405 100.065 118.12L89.4852 107.536C89.1905 107.261 88.9541 106.93 88.7901 106.562C88.6261 106.194 88.538 105.797 88.5309 105.394C88.5238 104.991 88.5979 104.591 88.7487 104.218C88.8996 103.844 89.1242 103.505 89.4091 103.22C89.694 102.935 90.0333 102.71 90.4068 102.56C90.7804 102.409 91.1805 102.335 91.5833 102.342C91.9861 102.349 92.3834 102.437 92.7514 102.601C93.1194 102.765 93.4506 103.001 93.7252 103.296L102.101 111.668L115.993 93.968C116.018 93.937 116.045 93.9076 116.073 93.88H116.069Z" fill="#FE8C00" />
                    </svg>
                </div>

                <div className=" my-4 text-xl text-center font-semibold"
                >Login Successful</div>


                <div className=" mt-4 w-full flex flex-col gap-4 justify-center">

                    <Link to="/tracking"
                    
                    className=" w-full text-center rounded-full font-semibold text-white bg-[#FE8C00] p-4 hover:text-white active:bg-[#FE8C00]] "
                    >
                        Go to tracking Screen
                    </Link>

                    <button onClick={logout} 
                    className=" font-semibold p-4">
                        Logout
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Success
