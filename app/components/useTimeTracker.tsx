"use client";
import { useState, useEffect } from "react";

export const useTimerTracker = (initialTime: number) => {
  // State for time left
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    // Make sure localStorage is accessed only on the client side
    const storedEndTime = typeof window !== "undefined" ? window.localStorage.getItem('endTime') : null;
    const endTime = storedEndTime ? parseInt(storedEndTime, 10) : Date.now() + initialTime;

    // if no time is stored, we set a new one
    if (typeof window !== "undefined" && !storedEndTime) {
      window.localStorage.setItem('endTime', endTime.toString());
    }

    // Set initial time left
    setTimeLeft(endTime - Date.now());

    // Update the time every second
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const newTimeLeft = endTime - currentTime;

      if (newTimeLeft < 0) {
        clearInterval(timer);
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("endTime");
        }
        setTimeLeft(0);
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
