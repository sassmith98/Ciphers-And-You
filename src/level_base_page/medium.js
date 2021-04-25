import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DifficultyScreen from './difficultlyScreen'
import {mediumData} from './mediumData'
import {mediumDataAnswers} from './mediumDataAnswers'
import '../App.css';
import Popup from '../popup/popup'

function Medium({name}){
  const [questions ,setQuestions] = React.useState(mediumData);
  const openClosepopUp = (index , status = true) => {
    console.log("234")
    let questionsArr = [...questions];
    questionsArr[index]["show"] = status
    setQuestions(questionsArr)

  }

  return(
    <Router>
      <Switch>
        
        <Route path="/medium" exact>
        <div className="medium-page">
        <Button><Link to="/diff" style={{ textDecoration: 'none' }}>Choose Your Difficulty</Link></Button>  

        <h1>{name}</h1>
            {/* map method to iterate over the data & map them inside div element */}
            {questions.map((data, key) => {
                return(
                  <div key={key}>
                    <h2>{data.val}</h2>
                    <input onChange={(e) => {
                      let questionsArr = [...questions];
                      questionsArr[key]["ans"] = e.target.value
                      setQuestions(questionsArr)

                    }} className="textField" />
                    <button className="btn-css" onClick={() => {
                      if(data.ans && mediumDataAnswers[key].val === data.ans){
                        alert("You got the answer right")
                      }else {
                        alert("You got the answer wrong")
                      }
                    }}>Check Answer (Lowercase only)</button>
                    {data.hasOwnProperty('show') && data["show"] &&<Popup image={data.img} closePopup={() => openClosepopUp(key ,false)} />}
                    <a href="javaScript:void(0)" onClick={() => openClosepopUp(key)}>?</a>
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

export default Medium