import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DifficultyScreen from './difficultlyScreen'
import {easy_data} from './easy_data'
import '../App.css';

function Easy({name}){
  return(
    <Router>
      <Switch>

        <Route path="/easy" exact>
        <div className="easy-page">
        <Button><Link to="/diff" style={{ textDecoration: 'none' }}>Choose Your Difficulty</Link></Button> 
            
            <h1>{name}</h1>

            {/* map method to iterate over the data & map them inside div element */}
            {easy_data.map((data, key) => {
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

export default Easy