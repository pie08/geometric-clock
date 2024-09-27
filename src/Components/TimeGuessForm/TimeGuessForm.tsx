import { FC } from "react";
import "./TimeGuessForm.scss";

interface TimeGuessFormProps {}

const TimeGuessForm: FC<TimeGuessFormProps> = ({}) => {
  return (
    <form className="time-guess-form">
      <input type="text" placeholder="Guess the time" />
      <button>Check!</button>
    </form>
  );
};

export default TimeGuessForm;
