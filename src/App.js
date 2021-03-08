import title from './images/Cipher-and-you-title-transparent.png';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './App.css';
import difficultyScreen from './level_base_page/difficultlyScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={title} className="App-title" alt="title" />
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">difficultlyScreen</Link>
            </li>
            <li>
              <Link to="/about">aboutScreen</Link>
            </li>
          </ul>
        </nav>
        <Switch>

          <Route path="/level_base_page" component={difficultyScreen} />
          <Route path="/" component={aboutScreen} />

        </Switch>
      </div>

    </Router>
  );
}

export default App;
