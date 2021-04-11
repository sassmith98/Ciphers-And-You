import './App.js';
import {Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';

function aboutScreen() {
    return (
      <Router>
      <div className="aboutScreen">
            ABOUT
      </div>
      </Router>
    );
  }
  
  export default aboutScreen;