import React, { Component } from 'react';
import Hero from './Hero';
import Worklist from './Work/Worklist';
import Bio from './Bio';

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <Hero />
                <Bio />
                <Worklist />
            </div>
        );
    }
}

export default Main;