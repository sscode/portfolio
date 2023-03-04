import React, { Component } from 'react';
import WorkItem from './WorkItem';
import WorkItemOlympics from './WorkItemOlympics';


const history = [
    {company: 'Fabrica', title: 'Title 1', description: 'Description 1'},
    {company: 'Sorse', title: 'Title 2', description: 'Description 2'},
    {company: 'Dreamchat', title: 'Title 3', description: 'Description 3'},
]

class Worklist extends Component {

    render() {
        return (
            <div>
                {history.map((item, index) => {
                    return <WorkItem key={index} company={item.company} title={item.title} description={item.description} />
                })}
                <WorkItemOlympics />
            </div>
        );
    }
}

export default Worklist;