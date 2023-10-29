import './App.css';

function App() {
  return (
    <div className="App">

      <div className="Score">
        <p className="score__title">Your Result</p>
        <div className="score__digits">
          <h1 className="score__digit">76</h1>
          <p className="score__out-of">of 100</p>
        </div>
        <h3 className="score__paragraph">Great</h3>
        <p className="score__paragraph-desc">You scored higher than 65% of the people who have taken these tests.</p>
      </div>

      <div className="Summary">
        <p className="summary__title">Summary</p>
        <div className="summary__icon-texts">
          <p className="reactionColor">
            <span className="material-symbols-outlined">bolt</span>
            Reaction
          </p>
          <p className="summary__out-of"><span className="summary__score">80</span> / 100</p>
        </div>
        <div className="summary__icon-texts">
          <p className="memoryColor">
          <span className="material-symbols-outlined">neurology</span>
            Memory</p>
          <p className="summary__out-of"><span className="summary__score">92</span> / 100</p>
        </div>
        <div className="summary__icon-texts">
          <p className="verbalColor">
          <span className="material-symbols-outlined">chat</span>
            Verbal</p>
          <p className="summary__out-of"><span className="summary__score">61</span> / 100</p>
        </div>
        <div className="summary__icon-texts">
          <p className="visualColor">
          <span className="material-symbols-outlined">visibility</span>
            Visual</p>
          <p className="summary__out-of"><span className="summary__score">72</span> / 100</p>
        </div>
        <div className="Button">
        <button className="continue">Continue</button>
      </div>
      </div>
    </div>
  );
}

export default App;
