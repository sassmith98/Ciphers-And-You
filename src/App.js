import title from './images/Cipher-and-you-title-transparent.png';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
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
          CIPHERS AND YOU!
        </header>
        <header className="App-subheader">
          Site by Steven Smith
        </header>
        <nav className="App-navigation">
              <Button><Link to="/diff">Choose Your Difficulty</Link></Button>
              <Button><Link to="/about">About The Site</Link></Button>
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
