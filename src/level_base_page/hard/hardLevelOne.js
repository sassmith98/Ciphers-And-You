import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import difficultyScreen from './level_base_page/difficultlyScreen';

function hardLevelOne() {
    <Router>
        <div className="hard-level">
            <h1>Hard</h1>
                <h2>Level 1: Vigenegravere Cipher</h2>

                <p>Put First val from hardData.js here</p>
                <p>Put hint button for help</p>
                <form>
                    <label>Answer:</label>
                        <input type="text" value="hardAnswerOne" />
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

