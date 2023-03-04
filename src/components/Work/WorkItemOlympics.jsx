import React from 'react';
import rings from '../../assets/ringswhite 2.png';


export default function WorkItemOlympics({company, title, description}) {
    return (
        <div className='workitem_container workitem_container-olympics'>
            <img src={rings} alt='rings' className='workitem_image' />
        </div>
    );
}