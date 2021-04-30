import App from './App.js';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './App.css';
import home from './App';

function aboutScreen() {
    return (
      <div className="aboutScreenTextOne">
         
           <div className="aboutHeadersOne">
               <h1> ABOUT ME </h1>
           </div> 
               <p> My Name is Steven Smith and this is my website application!</p>
               <p> First time with using Javascript, Html, and CSS together in React</p>
      
           <div className="aboutHeadersTwo">
               <h1> REASON FOR THIS APP? </h1> 
           </div>
               <p> This application is being used for my Senior Project</p>
               <p> Glad to get this application running</p>
           
           <div className="aboutHeadersThree">
               <h1> THANKS FOR READING </h1> 
           </div>
               <p> Thanks for looking through the site</p>
               <p> And hopefully it was good!</p>   
       
            </div>
    );
  }
  
  export default aboutScreen;