import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import difficultyScreen from './level_base_page/difficultlyScreen';

function easyLevelOne() {
    <Router>
        <div className="medium-level">
            <h1>MEDIUM</h1>
                <h2>Level 1: Permutation Cipher</h2>

                <p>Put First val from mediumData.js here</p>
                <p>Put hint button for help</p>
                <form>
                    <label>Answer:</label>
                        <input type="text" value="mediumAnswerOne" />
                        <input type="submit" value="Submit" />
                </form>
            <Route path="/" exact>
            <nav>
                <div className="difficulty-button">    
                    <Button><Link to="/diff" style={{ textDecoration: 'none' }}>Choose Your Difficulty</Link></Button>      
                </div>
            </nav>
            </Route>
        </div>
    </Router>

}

