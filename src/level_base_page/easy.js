import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import DifficultyScreen from './difficultlyScreen'
import {easy_data} from './easy_data'

function Easy({name}){

  return(
    <Router>
      <Switch>
        
        <Route path="/easy" exact>
          <Link to="/diff">DifficultyScreen</Link>
            
            <h1>{name}</h1>

            {/* map method to iterate over the data & map them inside div element */}
            {easy_data.map((data, key) => {
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

export default Easy