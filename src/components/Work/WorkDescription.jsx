import React from 'react'

function WorkDescription({description}) {
  return (
    <div className='darkbg-text'>
          {description.split('\n').map((line, index) => (
              <p key={index} className='work-description'>{line}</p>
            ))}
    </div>
  )
}

export default WorkDescription