import title from './images/Cipher-and-you-transparent.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={title} className="App-title" alt="title" />
        <p>
          Site by Steven Smith
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
