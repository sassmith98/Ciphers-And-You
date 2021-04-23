import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DifficultyScreen from './difficultlyScreen'
import {hardData} from './hardData'
import '../App.css';

function Hard({name}){
  return(
    <Router>
      <Switch>
        
        <Route path="/hard" exact>
        <div className="hard-page">
        <Button><Link to="/diff" style={{ textDecoration: 'none' }}>Choose Your Difficulty</Link></Button>  
          
          <h1>{name}</h1>

            {hardData.map((data, key) => {
                return(
                  <div key={key}>
                    <h2>{data.val}</h2>
                  </div>
                )
            })}
        </div>
        </Route>

        <Route path="/diff" exact component={DifficultyScreen}/>

        
      </Switch>
    </Router>
  )
}

export default Hard