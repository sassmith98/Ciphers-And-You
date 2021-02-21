import '../App.js';
import difficulty from './images/Difficulty.png';
import './App.css';

function difficultyScreen() {
    return (
      <div className="difficultyScreen">
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
      </div>
    );
  }
  
  export default difficultyScreen;