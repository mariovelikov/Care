<<<<<<< HEAD
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

=======
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

>>>>>>> 659ff1546195ba73f5ae4e7d241f07029f17dfc2
export default DailyRoutine