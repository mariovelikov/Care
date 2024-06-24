import React from 'react'
import './QuestionsList.css'
import QuestionComponent from './QuestionComponent';
import Pagination from './Pagination';

function QuestionsList(props) {
  const questions = props.questions;
    
  return (
    <div className='question-list-box'>
      <form>
        {questions.map((question) => (
          <div key={question.id} id={question.id}>
            <QuestionComponent question = {question}/>
          </div>
        ))}
      </form>
      
      <Pagination setCurrentPage ={props.setCurrentPage} currentPage = {props.currentPage} lastQuestion={props.lastQuestion}/>
    </div>
  )
}

export default QuestionsList