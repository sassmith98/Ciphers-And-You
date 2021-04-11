import App from '../App.js';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
// import difficulty from './images/Difficulty.png';
import '../App.css';

//  Pages to render
import Easy from './easy'
import Medium from './medium'
import Hard from './hard'


function difficultyScreen() {
    return (
      <Router>
        
      
      <div className="difficultyScreen">
          
          {/* <a
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
          </a> */}
          <Switch>
        <Route path="/diff" exact>
        <p>
            CHOOSE YOUR DIFFICULTY
          </p>

        <Link to="/" exact>HOME</Link>
        <nav>
          <ul>
            <li>
              <Link to="/easy">EASY</Link>
            </li>
            <li>
              <Link to="/medium">MEDIUM</Link>
            </li>
            <li>
              <Link to="/hard">HARD</Link>
            </li>
          </ul>
        </nav>
        </Route>

        <Route path="/" component={App} exact/>


        {/* Another of declaring Route if you want to pass props inside the component */}
        <Route
          path='/easy'
          render={(props) => (
            <Easy {...props} name={"easy"} />
          )}
          exact
        />

          <Route
          path='/medium'
          render={(props) => (
            <Medium {...props} name={"medium"} />
          )}
          exact
        />
        
        
        <Route
          path='/hard'
          render={(props) => (
            <Hard {...props} name={"hard"} />
          )}
          exact
        />
        </Switch>
      </div>

      
      </Router>
    );
  }
  
  export default difficultyScreen;