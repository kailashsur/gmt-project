import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { CircularProgress } from "@mui/material";
import axios from "axios";

const apikey = import.meta.env.VITE_KEY;
const generate = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_URL}`, {
      headers: {
        "X-Api-Key": apikey,
      },
    });

    if (res) {
      return {
        name: res?.data[0]?.author,
        designation: res?.data[0]?.category,
        content: res?.data[0]?.quote,
      };
    }
  } catch (error) {
    console.log("Error = ", error);
    return {};
  }
};

const isEmptyObject = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

const CardStack = ({ height }) => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    const interval = setInterval(async () => {
      setCards(await generate());
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      {!isEmptyObject(cards) ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div
            className={`relative shadow-lg  rotate-180 w-60 ${height ? height : "h-60"}`}
          >
            <motion.div
              className={`absolute text-sm bg-white ${height ? height : "h-60"} w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 shadow-black/[0.1] flex flex-col justify-between`}
              style={{
                transformOrigin: "top center",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="rotate-180 font-normal text-neutral-700 py-4">
                  {cards.content}
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div>
                  <p className="text-neutral-500 font-medium ">{cards.name}</p>
                  <p className="text-neutral-400 font-normal ">
                    {cards.designation}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </>
  );
};

export default CardStack;
