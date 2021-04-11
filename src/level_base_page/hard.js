import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import DifficultyScreen from './difficultlyScreen'
import {hard_data} from './hard_data'

function Hard({name}){
  return(
    <Router>
      <Switch>
        
        <Route path="/hard" exact>
          <Link to="/diff">DifficultyScreen</Link>
          
          <h1>{name}</h1>

            {hard_data.map((data, key) => {
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

export default Hard