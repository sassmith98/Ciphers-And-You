import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DifficultyScreen from './difficultlyScreen'
import {medium_data} from './medium_data'
import '../App.css';

function Medium({name}){
  return(
    <Router>
      <Switch>
        
        <Route path="/medium" exact>
        <Button><Link to="/diff">Choose Your Difficulty</Link></Button>  

          <h1>{name}</h1>

          {medium_data.map((data, key) => {
              return(
                <div key={key}>
                  <h2>{data.val}</h2>
                </div>
              )
          })}
        </Route>

        <Route path="/diff" exact component={DifficultyScreen}/>

        
      </Switch>
    </Router>
  )
}

export default Medium