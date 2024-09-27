import { useEffect, useState } from "react";
import Clock from "./Components/Clock/Clock";
import TimeGuessForm from "./Components/TimeGuessForm/TimeGuessForm";

function App() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    // update time every second
    const timer = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="layout">
      <Clock time={time} />

      <TimeGuessForm />
    </div>
  );
}

export default App;
