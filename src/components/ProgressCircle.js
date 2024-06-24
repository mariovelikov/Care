import React from 'react'
import './ProgressCircle.css'

function ProgressCircle({currentPage, lastQuestion}) {
    const progressPercent = currentPage / lastQuestion;
    document.documentElement.style.setProperty('--percent', progressPercent)
    
  return (
    <div className='counter-box'>
        <div className='percent'>
            <div className='skill'>
                <div className='outer'>
                    <div className='inner'>
                        <div className='number'>
                            <p>{currentPage}/{lastQuestion}</p>
                        </div>
                    </div>
                </div>
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="47" transform="rotate(-90 50 50)"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default ProgressCircle



/*
<svg>
                <circle cx="52.5" cy="52.5" r="40"></circle>
                <circle cx="52.5" cy="52.5" r="40"></circle>
            </svg>
*/