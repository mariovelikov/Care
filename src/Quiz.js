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

export default Quiz