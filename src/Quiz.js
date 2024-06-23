<<<<<<< HEAD
import React, { useState } from 'react'
import QuestionsList from './components/QuestionsList'
import ProgressCircle from './components/ProgressCircle';
import { useSelector } from 'react-redux';

function Quiz() {
    const questions = useSelector(state => state.questions)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(1); 
    
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = questions.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='quiz-page'>
            <QuestionsList questions = {currentPosts} setCurrentPage = {setCurrentPage} currentPage = {currentPage} lastQuestion ={questions.length} />
            <ProgressCircle currentPage = {currentPage} lastQuestion ={questions.length}/>
        </div>
    )
}

=======
import React, { useState } from 'react'
import QuestionsList from './components/QuestionsList'
import ProgressCircle from './components/ProgressCircle';
import { useSelector } from 'react-redux';

function Quiz() {
    const questions = useSelector(state => state.questions)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(1); 
    
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = questions.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='quiz-page'>
            <QuestionsList questions = {currentPosts} setCurrentPage = {setCurrentPage} currentPage = {currentPage} lastQuestion ={questions.length} />
            <ProgressCircle currentPage = {currentPage} lastQuestion ={questions.length}/>
        </div>
    )
}

>>>>>>> 659ff1546195ba73f5ae4e7d241f07029f17dfc2
export default Quiz