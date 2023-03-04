import React, { Component } from 'react';
import Hero from './Hero';
import Worklist from './Work/Worklist';

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <Hero />
                <Worklist />
            </div>
        );
    }
}

export default Main;