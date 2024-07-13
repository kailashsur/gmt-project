import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../components/Auth/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  
  // console.log("User ", user);
  // console.log("Loading ", loading);
  // console.log("Error ", error);

  async function logout(){
    try {
      await auth.signOut();
    } catch (error) {
      console.log("Error logging out :: ", error);
    }
  }


  return (
    <AuthContext.Provider value={{ user, loading, error, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
