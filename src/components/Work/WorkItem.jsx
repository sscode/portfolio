import React from 'react';


export default function WorkItem({company, title, url, type}) {
    return (
        <a 
        className={`workitem_container workitem_container-${type}`}
        target='_blank'
        rel='noopener noreferrer'
        href={url}>
                <h2>{company.toUpperCase()}</h2>
        </a>
    );
}