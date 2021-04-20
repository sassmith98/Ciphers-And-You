import App from '../App.js';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
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
          <Switch>
        <Route path="/diff" exact>
          <p>
            CHOOSE YOUR DIFFICULTY
          </p>
           <nav>
            <div className="difficulty-button">
              <Button><Link to="/" exact>HOME</Link></Button>
              <Button><Link to="/easy">EASY</Link></Button>      
              <Button><Link to="/medium">MEDIUM</Link></Button>      
              <Button><Link to="/hard">HARD</Link></Button>      
             </div>
            </nav>
        </Route>

        <Route path="/" component={App} exact/>

        {/* Another of declaring Route if you want to pass props inside the component */}
        <Route
          path='/easy'
          render={(props) => (
            <Easy {...props} name={"Easy Level"} />
          )}
          exact
        />

          <Route
          path='/medium'
          render={(props) => (
            <Medium {...props} name={"Medium Level"} />
          )}
          exact
        />
        
        
        <Route
          path='/hard'
          render={(props) => (
            <Hard {...props} name={"Hard Level"} />
          )}
          exact
        />
        </Switch>
      </div>

      
      </Router>
    );
  }
  
  export default difficultyScreen;