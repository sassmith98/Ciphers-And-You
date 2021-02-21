import title from './images/Cipher-and-you-title-transparent.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={title} className="App-title" alt="title" />
        <p>
          Click START to begin
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          START
        </a>
      </header>
    </div>
  );
}

export default App;
