import React from 'react';
import rings from '../../assets/ringswhite 2.png';


export default function WorkItemOlympics({company, title, description}) {
    return (
        <a 
        href='https://en.wikipedia.org/wiki/Stuart_Sim_(rower)'
        target='_blank'
        rel='noopener noreferrer'
        className='workitem_container workitem_container-olympics'>
            <img src={rings} alt='rings' className='workitem_image' />
        </a>
    );
}