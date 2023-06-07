import React, { Component } from 'react';
import Hero from './Hero';
import MainConnect from './Work/MainConnect';

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <Hero />
                <MainConnect />
            </div>
        );
    }
}

export default Main;