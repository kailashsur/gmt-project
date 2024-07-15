import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../ui/loader";
import { useState } from "react";
import Onboarding1 from "./Onboarding1";
import { motion } from "framer-motion";
import { ArrowForwardIos, LogoutOutlined } from "@mui/icons-material";

import ClockWise from "../Tracking/ClockWise";
import CardStack from "../ui/card-stack";

export default function Home() {
  const { user, loading, error, logout } = useAuth();
  const [onboarding, setOnboarding] = useState(1);

  function Next() {
    if (onboarding !== 3) setOnboarding(onboarding + 1);
  }
  function Back() {
    if (onboarding !== 1) setOnboarding(onboarding - 1);
  }

  if (loading) {
    return <Loader />;
  }

  if (!user?.accessToken) {
    return (
      <Onboarding1
        back={Back}
        next={Next}
        onboarding={onboarding}
        setOnboarding={setOnboarding}
      />
    );
  }

  return (
    <>
      {user?.accessToken ? (
        <section className="relative w-full h-full bg-[url(/background1.png)] ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "undamped",
              stiffness: 500,
              damping: 20,
            }}
          >
            <ClockWise />
          </motion.div>

          <div className=" absolute bottom-0 w-full h-[40%] rounded-t-[24px] flex flex-col justify-center  items-center backdrop-blur-3xl  p-6 pt-20 text-white shadow-md shadow-white transition-all duration-300 border-t ">
            <Link to={"/tracking"} className=" absolute top-6 left-6">
              <span className=" text-white font-semibold ">Tracking</span>{" "}
              <ArrowForwardIos className="text-white" />
            </Link>

            <div className="absolute top-6 right-6 flex flex-col gap-1 justify-center ">
              <div className="flex gap-2 justify-center items-center">
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    alt="Profile"
                    className=" rounded-full w-6 h-6 border"
                  />
                ) : (
                  ""
                )}
                <button onClick={logout} className=" ">
                  <LogoutOutlined />
                </button>
              </div>

              {user.displayName ? (
                <p className=" text-[8px] capitalize"> {user?.displayName} </p>
              ) : (
                ""
              )}
            </div>

            <div className=" flex justify-center items-center">
              <CardStack />
            </div>
          </div>

          {/* <Tracking /> */}
        </section>
      ) : (
        ""
      )}
    </>
  );
}
