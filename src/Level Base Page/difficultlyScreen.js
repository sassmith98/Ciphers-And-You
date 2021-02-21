import '../App.js';
import difficulty from './images/Difficulty.png';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={difficulty} className="App-difficulty" alt="difficulty" />
          <p>
            CHOOSE YOUR DIFFICULTY
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            EASY
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            MEDIUM
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            HARD
          </a>
        </header>
      </div>
    );
  }
  
  export default App;