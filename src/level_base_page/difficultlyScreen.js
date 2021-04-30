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
          <Switch>
        <Route path="/diff" style={{ textDecoration: 'none' }} exact>
          <h4>
              CHOOSE YOUR DIFFICULTY    
          </h4> <p></p>
            <nav> <p></p>
              <Button><Link to="/easy" style={{ textDecoration: 'none' }}>EASY</Link></Button>    
              <Button><Link to="/medium" style={{ textDecoration: 'none' }}>MEDIUM</Link></Button>      
              <Button><Link to="/hard" style={{ textDecoration: 'none' }}>HARD</Link></Button>  <p> </p>
            </nav> <p></p>
              <Button><Link to="/" style={{ textDecoration: 'none' }} exact>HOME</Link></Button> <p> </p> 
        </Route>

        <Route path="/" component={App} exact/>

        {/* Another way of declaring Route if you want to pass props inside the component */}
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
      </Router>
    );
  }
  
  export default difficultyScreen;