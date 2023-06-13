import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

function WorkLink({url}) {
  return (
    <div className='darkbg-text link-container'>
        {/* <p>hi</p> */}
        <a 
        target='_blank'
        rel='noopener noreferrer'
        href={url}>
            <BiLinkExternal className='work-link' />
        </a>
    </div>
  )
}

export default WorkLink