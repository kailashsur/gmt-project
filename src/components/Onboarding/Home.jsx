import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import Loader from "../ui/loader";
import { useState } from "react";
import Onboarding1 from "./Onboarding1";
import Success from "../ui/Success";



export default function Home() {
    const { user, loading, error, logout } = useAuth();
    const [onboarding, setOnboarding] = useState(1);

    function Next(){
        if(onboarding !== 3)
        setOnboarding(onboarding + 1);
    }
    function Back(){
        if(onboarding !== 1)
        setOnboarding(onboarding - 1);
    }




    if (loading) {
        return <Loader />
    }

    if (!user?.accessToken) {
        return <Onboarding1 back={Back} next={Next} onboarding={onboarding} setOnboarding={setOnboarding}/>
    }

    return(<>
        {
            user?.accessToken ?
            <>
            <Success logout={logout} />
            {/* <Tracking /> */}

        </>
            : ""
        }
    </>)
    
}

