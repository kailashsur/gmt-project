import React, { useState } from 'react';
import { auth, googleProvider } from './firebaseConfig';
import { useAuth } from '../../context/AuthContext';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom';
import '../../style/style.css'
import { emailRegex, passwordRegex } from '../../lib/regX';
import Loader from '../ui/loader';
import Success from '../ui/Success';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [terms, setTerms] = useState(false);

  const { user, loading, error, logout } = useAuth();
  const [showPassword, setShowPassword] = useState(false);



  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  const handleTermsChange = (e) => {
    setTerms(e.target.checked);
  };

  // ****************
// Handel Register Method
  const handleRegister = () => {

    if(email === ""){
      return alert("Enter email")
    }
    if(!emailRegex.test(email)){
      return alert("Enter valid email")
    }
    if(userName === ""){
      return alert("Enter username")
    }
    if(password === ""){
      return alert("Enter password")
    }
    if(!passwordRegex.test(password)){
      return alert("Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters")
    }



    if (terms) {
      auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
        const user = userCredential.user;
        user.updateProfile({ displayName: userName });
      }).catch(alert);
    }
    else {
      alert("Please accept the terms and conditions")
    }
  };
// Handel Google Register Method
  const handleGoogleSignUp = () => {
    auth.signInWithPopup(googleProvider).catch(alert);
  };


  if(loading){
    return <Loader/>
  }
  if(user?.accessToken){
    return <Success logout={logout} />
  }

  return (
    <div className={`w-full h-screen flex flex-col p-6 bg-white transition-all duration-500 ease-in-out' `}>
      <div>
        {/* TExt area welcome */}
        <div className=' my-6'>
          <h2
            className=' text-3xl font-semibold'
          >Create your new account</h2>
          <p
            className=' text-sm font-medium text-[#878787]'
          >Create an account to start looking for the food you like</p>
        </div>


        <div className=' flex gap-2 flex-col transition-all duration-500 ease-in-out '>
          {/* Email */}
          <div>

            <label htmlFor="email">
              <span className=' text-sm font-medium '>Email Address</span>
            </label>
            <input
              className=' p-4 w-full rounded-lg border mt-2 font-medium  transition-all duration-500 ease-in-out '
              id='email'
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          {/* Username */}
          <div>

            <label htmlFor="username">
              <span className=' text-sm font-medium '>Username</span>
            </label>
            <input
              className=' p-4 w-full rounded-lg border mt-2 font-medium  transition-all duration-500 ease-in-out '
              id='username'
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>



          {/* Password */}
          <div>
            <label htmlFor="password">
              <span className='text-sm font-medium'>Password</span>
            </label>
            <p className=' text-sm text-[#878787] ' 
            >Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters</p>
            <div className='relative mt-2 w-full'>
              <input
                className='p-4 w-full rounded-lg border font-medium transition-all duration-500 ease-in-out'
                id='password'
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />


              <div onClick={handleShowPassword}
                className='absolute right-3 top-1/2 transform -translate-y-1/2'
              >
                {
                  showPassword ?
                    <VisibilityOutlinedIcon
                      style={{ cursor: 'pointer' }}
                    />
                    :
                    <VisibilityOffOutlinedIcon
                      style={{ cursor: 'pointer' }}
                    />
                }
              </div>


            </div>
          </div>



          {/* Agriment sign tick TODO:  */}
          <div className='my-2 font-medium cursor-pointer flex items-center '>
            <span className=''>
            <input
              type="checkbox"
              name="terms"
              onChange={handleTermsChange}
              checked={terms}
              id="terms"
              className='w-6 h-6 custom-checkbox'
              style={{
                '--tw-ring-color': '#FE8C00', // Custom ring color
              }}
              />
              </span>
            <span className='ml-2'> I Agree with <span className=' text-[#FE8C00]'>Terms of Service</span> and <span className=' text-[#FE8C00]'>Privacy Policy</span> </span>
          </div>

        </div>



        {/* Signup button */}
        <button onClick={handleRegister}
          className=' bg-[#FE8C00] hover:bg-[#ee8301] active:bg-[#ff9009] w-full rounded-full py-4 text-white font-medium mt-6 transition-all duration-300 ease-in-out '
        >Sign up</button>

      </div>
      {/* Ends of the pass and email */}

      {/* or sign in with  */}

      <div className='my-8 flex items-center text-[#878787]'>
        <hr className='flex-grow' />
        <div className='flex-shrink-0 mx-4 text-sm font-medium whitespace-nowrap'>Or sign in with</div>
        <hr className='flex-grow' />
      </div>



      {/* Sign in with google */}
      <div className=' flex flex-col gap-2 justify-center items-center'>

        <button onClick={handleGoogleSignUp}
          className=' p-2 border rounded-full '>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#FFC107" />
            <path d="M3.653 7.3455L6.9385 9.755C7.8275 7.554 9.9805 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C8.659 2 5.328 4.1685 3.653 7.3455Z" fill="#FF3D00" />
            <path d="M12.5 22C15.083 22 17.43 21.0115 19.2045 19.404L16.1095 16.785C15.0718 17.5742 13.8037 18.001 12.5 18C9.899 18 7.6905 16.3415 6.8585 14.027L3.5975 16.5395C5.2525 19.778 8.6135 22 12.5 22Z" fill="#4CAF50" />
            <path d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#1976D2" />
          </svg>
        </button>


        <p className=' text-sm font-medium my-4'
        >Have an account? <Link to="/login" className=' text-[#FE8C00]  '>Sign In</Link></p>
      </div>
    </div>
  );
};

export default Register;

// <div>
//   <h2>Create your new account.</h2>
//   <input
//     type="email"
//     placeholder="Email Address"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//   />
//   <input
//     type="text"
//     placeholder="User Name"
//     value={userName}
//     onChange={(e) => setUserName(e.target.value)}
//   />
//   <input
//     type="password"
//     placeholder="Password"
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//   />
//   <button onClick={handleRegister}>Register</button>
//   <button onClick={handleGoogleSignUp}>Sign up with Google</button>
// </div>