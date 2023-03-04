import React from 'react';


export default function WorkItem({company, title, description}) {
    return (
        <div className='workitem_container'>
            <h2>{company.toUpperCase()}</h2>
        </div>
    );
}