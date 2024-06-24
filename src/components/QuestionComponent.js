import {useDispatch, useSelector} from "react-redux"
import React from 'react'
import './QuestionComponent.css'
import { addAnswer } from "../state/reducers/AnswersSlice";


function QuestionComponent(props) {
  const question = props.question;
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answers)
  

  const handleCheck = (event, option) => {
    const data = {
      questionId: question.id,
      option: option,
      optionText: question[option]
    }

    dispatch(addAnswer(data))
    
  }

  return (
    <div className="question-component">
          <div className='quetion-title-box'>
            <p>{question.question}</p>
          </div>
          <div className='options-box'>
            {Object.keys(question).slice(2).map((option) => (
              <div key={option} className="checkbox-button">
                <input type="radio" id={option} name="option" checked={answers[question.id] ? Object.keys(answers[question.id])[0] === option : false} value={question[option]} onChange={(event) => handleCheck(event, option)}/>
                <label htmlFor={option}>{option}: {question[option]} </label>
              </div>
            ))}
          </div>
    </div>
  )
}

export default QuestionComponent
