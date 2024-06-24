import React from 'react'
import "./DailyRoutine.css"

function DailyRoutine({dailyDetails}) {
  return (
    <div className='daily-routine-box'>
        <div className='text-box'>
            <p className='daily-routine-title'>{dailyDetails?.title}</p>
            <p className='daily-routine-text'>{dailyDetails?.text}</p>
        </div>
    </div>
  )
}

export default DailyRoutine