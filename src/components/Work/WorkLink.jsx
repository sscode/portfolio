import React from 'react'

function WorkLink({url}) {
  return (
    <div className='darkbg-text link-container'>
        {/* <p>hi</p> */}
        <a 
        target='_blank'
        rel='noopener noreferrer'
        href={url}>
            <p className='work-link'>View Company</p>
        </a>
    </div>
  )
}

export default WorkLink