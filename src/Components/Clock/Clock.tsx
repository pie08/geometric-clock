import { FC, useEffect, useRef } from "react";
import "./Clock.scss";

interface ClockProps {
  time: number;
}

const Clock: FC<ClockProps> = ({ time }) => {
  const secondsRef = useRef<HTMLDivElement>(null);
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  useEffect(() => {
    // flip actove class on seconds div
    if (secondsRef.current?.classList.contains("active")) {
      secondsRef.current.classList.remove("active");
    } else {
      secondsRef.current?.classList.add("active");
    }
  }, [time]);

  return (
    <div className="clock">
      <div className="seconds" ref={secondsRef}></div>

      <div className="container__hours">
        {/* 5 hours a bar */}
        <div className={`hour-bar ${hours >= 5 ? "active" : ""}`}></div>
        <div className={`hour-bar ${hours >= 10 ? "active" : ""}`}></div>
        <div className={`hour-bar ${hours >= 15 ? "active" : ""}`}></div>
        <div className={`hour-bar ${hours >= 20 ? "active" : ""}`}></div>
        {/* 1 hour a bar */}
        <div className={`hour-bar ${hours % 5 >= 1 ? "active" : ""}`}></div>
        <div className={`hour-bar ${hours % 5 >= 2 ? "active" : ""}`}></div>
        <div className={`hour-bar ${hours % 5 >= 3 ? "active" : ""}`}></div>
        <div className={`hour-bar ${hours % 5 >= 4 ? "active" : ""}`}></div>
      </div>

      <div className="container__minutes-5">
        <div className={`minute-bar ${minutes >= 5 ? "active" : ""}`}></div>
        <div className={`minute-bar ${minutes >= 10 ? "active" : ""}`}></div>
        <div
          className={`minute-bar minute-bar--gray ${
            minutes >= 15 ? "active" : ""
          }`}
        ></div>
        <div className={`minute-bar ${minutes >= 20 ? "active" : ""}`}></div>
        <div className={`minute-bar ${minutes >= 25 ? "active" : ""}`}></div>
        <div
          className={`minute-bar minute-bar--gray ${
            minutes >= 30 ? "active" : ""
          }`}
        ></div>
        <div className={`minute-bar ${minutes >= 35 ? "active" : ""}`}></div>
        <div className={`minute-bar ${minutes >= 40 ? "active" : ""}`}></div>
        <div
          className={`minute-bar minute-bar--gray ${
            minutes >= 45 ? "active" : ""
          }`}
        ></div>
        <div className={`minute-bar ${minutes >= 50 ? "active" : ""}`}></div>
        <div className={`minute-bar ${minutes >= 55 ? "active" : ""}`}></div>
      </div>

      <div className="container__minutes-1">
        {/* 1 minute a bar */}
        <div className={`minute-bar ${minutes % 5 >= 1 ? "active" : ""}`}></div>
        <div className={`minute-bar ${minutes % 5 >= 2 ? "active" : ""}`}></div>
        <div className={`minute-bar ${minutes % 5 >= 3 ? "active" : ""}`}></div>
        <div className={`minute-bar ${minutes % 5 >= 4 ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default Clock;
