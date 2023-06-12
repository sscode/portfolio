import React, { Component } from 'react';
import Connect from './Connect';
import WorkItem from './WorkItem';
import WorkItemOlympics from './WorkItemOlympics';


const history = [
    {company: 'Fabrica', title: 'Head of Marketing', url: 'https://www.fabrica.land/'},
    {company: 'Sorse', title: 'Head of Sales & Marketing', url: 'https://sorsetech.com/'},
]

const projects = [
    {company: 'Dreamchat', title: 'Full Stack Development', url: 'https://dreamchat.xyz/'},
    {company: 'TrainingStats', title: 'Full Stack Development', url: 'https://trainingstats.xyz/'},
    {company: 'ErgBase', title: 'Full Stack Development', url: 'https://ergbase.com/'},
]

class Worklist extends Component {

    render() {
        return (
            <div className='worklist_container'>
                <p className='worklist_text'>Work History</p>
                {history.map((item, index) => {
                    return <WorkItem
                    type='history' 
                    key={index} company={item.company} title={item.title} url={item.url} />
                })}
                <p className='worklist_text'>Dev Projects</p>
                {projects.map((item, index) => {
                    return <WorkItem 
                    type='projects'
                    key={index} company={item.company} title={item.title} url={item.url} />
                })}
                <p className='worklist_text'>Achievements</p>
                <WorkItemOlympics />
                <p className='worklist_text'>More</p>
                <Connect />
            </div>
        );
    }
}

export default Worklist;