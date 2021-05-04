import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DifficultyScreen from './difficultlyScreen'
import {testPageData} from './testPageData'
import {testPageDataAnswers} from './testPageDataAnswers'
import '../App.css';
import Popup from '../popup/popup'

function TestPage({name}){
  const [questions ,setQuestions] = React.useState(testPageData);
  const openClosepopUp = (index , status = true) => {
    console.log("234")
    let questionsArr = [...questions];
    questionsArr[index]["show"] = status
    setQuestions(questionsArr)
  }

  // let randomArray = questionsArr[Math.floor(Math.random() * questionsArr.length)];
  // console.log(randomArray);

  return(
    <Router>
      <Switch>

        <Route path="/test" exact><p></p>
        
        <Button><Link to="/diff" style={{ textDecoration: 'none' }}>Choose Your Difficulty</Link></Button> <p></p>
            
            <h1>{name}</h1>
            {/* Map to iterate over the data & map them inside div element */}
            {questions.map((data, key) => {
                return(
                  <div key={key}>
                    <h2>{data.val}</h2> <p></p>
                    <input onChange={(e) => {
                      let questionsArr = [...questions];
                      questionsArr[key]["ans"] = e.target.value
                      setQuestions(questionsArr)
                    }} className="textField" /> <p> </p>
                    <button className="btn-css" onClick={() => {
                      if(data.ans && testPageDataAnswers[key].val === data.ans){
                        alert("You got the answer right. \n        Good job!")
                      }else {
                        alert("You got the answer wrong. \n        Please try again")
                      }
                    }}>Check Answer (Lowercase only)</button>
                    <p> </p>
                    {data.hasOwnProperty('show') && data["show"] &&<Popup image={data.img} closePopup={() => openClosepopUp(key ,false)} />}
                    <a href="javaScript:void(0)" style={{ textDecoration: 'none' }} onClick={() => openClosepopUp(key)}>Need Some Help?</a> <p></p>
                  </div>
                )
            })}   
        </Route>

        <Route path="/diff" exact component={DifficultyScreen}/>

        
      </Switch>
      
    </Router>
  )
}

export default TestPage