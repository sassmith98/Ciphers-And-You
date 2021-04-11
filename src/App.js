import title from './images/Cipher-and-you-title-transparent.png';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './App.css';
import difficultyScreen from './level_base_page/difficultlyScreen';
import aboutScreen from './aboutScreen'

function App() {
  return (
    <Router>
      <div className="App">

      {/* Pages you want to switch between acc to the path */}
      <Switch>

        {/* Everything you want to render in '/' path */}
        <Route path="/" exact>
        <header className="App-header">
          <img src={title} className="App-title" alt="title" />
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/diff">difficultlyScreen</Link>
            </li>
            <li>
              <Link to="/about">aboutScreen</Link>
            </li>
          </ul>
        </nav>
        </Route>

          {/* component you want to render in '/diff' path */}
          <Route path="/diff" exact component={difficultyScreen} />
          
          {/* component you want to render in '/about' path */}
          <Route path="/about" component={aboutScreen} />

        </Switch>
      </div>

    </Router>
  );
}

export default App;
