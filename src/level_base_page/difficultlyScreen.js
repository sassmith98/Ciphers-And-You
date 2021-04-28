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
        <Route path="/diff" style={{ textDecoration: 'none' }} exact>
          <h3>
            CHOOSE YOUR DIFFICULTY
          </h3>
           <nav>
            <div className="difficulty-button">
              <Button><Link to="/" style={{ textDecoration: 'none' }} exact>HOME</Link></Button>
              <Button><Link to="/easy" style={{ textDecoration: 'none' }}>EASY</Link></Button>      
              <Button><Link to="/medium" style={{ textDecoration: 'none' }}>MEDIUM</Link></Button>      
              <Button><Link to="/hard" style={{ textDecoration: 'none' }}>HARD</Link></Button>      
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