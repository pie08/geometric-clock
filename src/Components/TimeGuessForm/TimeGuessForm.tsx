import { FC, FormEventHandler, useEffect, useState } from "react";
import "./TimeGuessForm.scss";

interface TimeGuessFormProps {
  time: number;
}

const TimeGuessForm: FC<TimeGuessFormProps> = ({ time }) => {
  const [guessValue, setGuessValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const regex = new RegExp(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/);

  useEffect(() => {
    // validate on value change
    setIsValid(regex.test(guessValue));
  }, [guessValue]);

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    // reuturn if input not valid
    if (!isValid) return;

    // check if corrects
    const [guessHours, guessMinutes] = guessValue
      .split(":")
      .map((val) => Number(val));
    if (guessHours === hours && guessMinutes === minutes) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <form className="time-guess-form" onSubmit={onSubmit}>
      <div className="form__group">
        <input
          className={`${isCorrect ? "correct" : ""}`}
          type="text"
          placeholder="Guess the time"
          value={guessValue}
          onChange={(e) => setGuessValue(e.target.value)}
        />
        <p className={`error-text ${!isValid ? "active" : ""}`}>
          That time is not valid!
        </p>
      </div>
      <button>Check!</button>
    </form>
  );
};

export default TimeGuessForm;
