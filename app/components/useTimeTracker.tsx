// useTimeTracker.js
"use client";
import { useState, useEffect } from "react";

// Correctly export the hook
export const useTimerTracker = (initialTime: number) => {
  // Retrieve the stored time from localStorage or calculate a new one
  const storedEndTime = localStorage.getItem('endTime')
  const endTime = storedEndTime ? parseInt(storedEndTime, 10) : Date.now() + initialTime

  const [timeLeft, setTimeLeft] = useState<number>(endTime - Date.now());

  useEffect(() => {
    // if no time is stored, we set a new one
    if(!storedEndTime){
      localStorage.setItem('endTime',endTime.toString() )
    }

    //update the time every second
    const timer = setInterval(() => {
      const currentTime = Date.now()
      const newTimeleft = endTime - currentTime;

      if(newTimeleft < 0){
        clearInterval(timer);
        localStorage.removeItem("endTime")
        setTimeLeft(0);
      }else{
        setTimeLeft(newTimeleft)
      }
    },1000);
     
    return () => clearInterval(timer);
  }, [endTime, storedEndTime]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
