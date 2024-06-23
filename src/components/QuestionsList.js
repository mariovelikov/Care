<<<<<<< HEAD
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

=======
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

>>>>>>> 659ff1546195ba73f5ae4e7d241f07029f17dfc2
export default QuestionsList