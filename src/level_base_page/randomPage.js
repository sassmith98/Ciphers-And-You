import React, {useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Button} from "react-bootstrap";
import DifficultyScreen from './difficultlyScreen';
import {randomPageData} from './randomPageData';
import {randomPageDataAnswers} from './randomPageDataAnswers';
import '../App.css';
import Popup from '../popup/popup';

function RandomPage({name}) {
  const [questions, setQuestions] = React.useState(randomPageData);
  const openClosepopUp = (index, status = true) => {
    console.log("234");
    let questionsArr = [ ...questions ];
    questionsArr[index]["show"] = status;
    setQuestions(questionsArr);
  };

  const randomElement = questions[Math.floor(Math.random() * questions.length)];
  const index = questions.indexOf(randomElement);

  return (
    <Router>
      <Switch>
        <Route path="/randomPage" exact> <p></p>
          <Button> 
            <Link to="/diff" style={{textDecoration: 'none'}}>Choose Your Difficulty</Link>
          </Button> <p> </p>
          <h1>{name}</h1> <p> </p>
            <div key={index}>
              <h2>{randomElement.val}</h2> <p> </p>
              <input onChange={(e) => {
                let questionsArr = [...questions];
                questionsArr[index]["ans"] = e.target.value
                setQuestions(questionsArr)
              }} className="textField"/> <p> </p>
              <button className="btn-css" onClick={() => {
                if (randomElement.ans && randomPageDataAnswers[index].val === randomElement.ans) {
                  alert("You got the answer right. \n        Good job!")
                } else {
                  alert("You got the answer wrong. \n        Please try again")
                }
              }}>Check Answer (Lowercase only) 
              </button><p> </p>
              {randomElement.hasOwnProperty('show') && randomElement["show"] && <Popup image={randomElement.img} closePopup={() => openClosepopUp(index, false)}/>}
              <a href="javaScript:void(0)" style={{textDecoration: 'none'}} onClick={() => openClosepopUp(index)}>Need Some Help?</a> <p> </p>
            </div>
        </Route>
        <Route path="/diff" exact component={DifficultyScreen}/>
      </Switch>
    </Router>
  )
}

export default RandomPage