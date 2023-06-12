import React from 'react';
import { useState } from 'react';
import WorkDescription from './WorkDescription';
import WorkLink from './WorkLink';
import WorkoutButton from './WorkoutButton';
import WorkTag from './WorkTag';


export default function WorkItem({company, companyTag, title, url, description, type}) {

    const [visible, setVisible] = useState(false);

    return (
        <div className={''}
        >
            <WorkoutButton 
            show={setVisible}
            visible={visible}
            company={company} type={type}/>
            {visible && 
            <div className='work-details'>
                <WorkTag companyTag={companyTag} />
                <WorkDescription description={description} />
                <WorkLink url={url} />
            </div>
            }
        </div>
    );
}