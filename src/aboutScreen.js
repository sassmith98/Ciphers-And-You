import App from './App.js';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './App.css';

function aboutScreen() {
    return (
      <Router>
      <div className="aboutScreenTextOne">
           <h1> ABOUT ME </h1> 
           <p> My Name is Steven Smith and this is my first website application!</p>
           <p> First time really using Javascript, Html, and CSS together in React</p>
      </div>

      <div className="aboutScreenTextTwo">
           <h1> ABOUT THE REASON </h1> 
           <p> This application is being used for my Senior Project!</p>
           <p> Excited to put it together and get it running</p>
      </div>

      <div className="aboutScreenTextThree">
           <h1> THANKS FOR READING </h1> 
           <p> Thanks for looking through the site</p>
           <p> And hopefully it was good!</p>
      </div>


      </Router>
    );
  }
  
  export default aboutScreen;