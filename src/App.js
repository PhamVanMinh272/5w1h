import './App.css';
import QuestionDetail from './components/questionDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        5W1H
      </header>
      <div className="content">
        <div className="method-5w1h-container">
          <div className="method-5w1h"></div>
          <div className="what-container question-container">
            <QuestionDetail></QuestionDetail>
          </div>
          <div className="where-container question-container">
            <button>Where</button>
          </div>
          <div className="when-container question-container">
            <button>When</button>
          </div>
          <div className="who-container question-container">
            <button>Who</button>
          </div>
          <div className="why-container question-container">
            <button>Why</button>
          </div>
          <div className="how-container question-container">
            <button>How</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
