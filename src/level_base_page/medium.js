import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DifficultyScreen from './difficultlyScreen'
import {mediumData} from './mediumData'
import '../App.css';

function Medium({name}){
  return(
    <Router>
      <Switch>
        
        <Route path="/medium" exact>

        <Button><Link to="/diff" style={{ textDecoration: 'none' }}>Choose Your Difficulty</Link></Button>  

          <h1>{name}</h1>

          {mediumData.map((data, key) => {
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