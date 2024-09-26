function App() {
  return (
    <div className="clock">
      <div className="seconds"></div>

      <div className="container__hours">
        {/* 5 hours a bar */}
        <div className="hour-bar"></div>
        <div className="hour-bar"></div>
        <div className="hour-bar"></div>
        <div className="hour-bar"></div>
        {/* 1 hour a bar */}
        <div className="hour-bar"></div>
        <div className="hour-bar"></div>
        <div className="hour-bar"></div>
        <div className="hour-bar"></div>
      </div>

      <div className="container__minutes-5">
        <div className="minute-bar"></div>
        <div className="minute-bar"></div>
        <div className="minute-bar minute-bar--gray"></div>
        <div className="minute-bar"></div>
        <div className="minute-bar"></div>
        <div className="minute-bar minute-bar--gray"></div>
        <div className="minute-bar"></div>
        <div className="minute-bar"></div>
        <div className="minute-bar minute-bar--gray"></div>
        <div className="minute-bar"></div>
        <div className="minute-bar"></div>
      </div>

      <div className="container__minutes-1">
        {/* 1 minute a bar */}
        <div className="minute-bar"></div>
        <div className="minute-bar"></div>
        <div className="minute-bar"></div>
        <div className="minute-bar"></div>
      </div>
    </div>
  );
}

export default App;
