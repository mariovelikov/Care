import React from 'react'
import './Pagination.css'
import { Link } from "react-router-dom";


function Pagination({setCurrentPage, currentPage, lastQuestion}) {
  
  return (
        <div className="back-next-btns">
            {currentPage === 1 ? 
            (<Link to={"/"}><p className='back-button'>Back</p></Link>) 
            : 
            (<p className='back-button' onClick={() => setCurrentPage(currentPage - 1)}>Back</p>)}
            {currentPage !== lastQuestion ?
              (<div className='next-button' onClick={() => setCurrentPage(currentPage + 1)}>Next Question<ion-icon name="arrow-forward-outline"></ion-icon></div>)
              : 
              (<Link to={"/results"}><div className='next-button'><p>Discover your results</p></div></Link>)
            }
        </div>
  )
}
  


export default Pagination
