import React, { Component } from 'react';
import Connect from './Connect';
import WorkItem from './WorkItem';
import WorkItemOlympics from './WorkItemOlympics';


const history = [
    {company: 'Fabrica', 
    companyTag: 'Fabrica makes real estate transactions as easy as buying NFTs.',
    description: `Venture backed crypto startup. I worked on branding, positioning, messaging, content and partnerships.`,
    title: 'Head of Marketing', url: 'https://www.fabrica.land/'},
    {company: 'Sorse', 
    companyTag: 'Food Science Company for Cannabis Brands',
    description: `Built sales and marketing team from the ground up while being #1 revenue driver
    Assisted in capital fundraising of [redacted].
    Led product team responsible for the launch of 6 consumer brands responsible for $[redacted] in sales.
    Opened b2b channel and took that program $0 to $[redacted] in sales in less than 6 months.`,
    title: 'Head of Sales & Marketing', url: 'https://sorsetech.com/'},
]

const projects = [
    {company: 'Finlister', 
    companyTag: 'Weekly portfolio updates straight to your inbox.',
    description: `
    This is a saas app for tracking the stock market.
    I designed this in Figma and used no design kits.
    The front-end is built with React, and Redux for statemanagement.
    The back-end is NodeJS and Firebase and emails are sent through Sendgrid.
    `,
    title: 'Full Stack Development', url: 'https://finlister.com/'},

    {company: 'Prolift', 
    companyTag: 'Track Lifts. Get Strong.',
    description: `
    This is an iOS app to track gym workouts. Currently live in the Appstore.
    I designed this in Figma and used no design kits.
    The front-end is built with ReactNative.
    The back-end is serverless through Firebase.
    `,
    title: 'Full Stack Development', url: 'https://www.proliftapp.com/'},

    {company: 'Dreamchat', 
    companyTag: 'A web3 wallet-to-wallet messaging platform',
    description: `
    I designed this in Figma and used no design kits.
    The front-end is built with React, and Redux for statemanagement.
    The back-end is serverless and built exclusively on Firebase.
    `,
    title: 'Full Stack Development', url: 'https://dreamchat.xyz/'},
    
    {company: 'ErgBase', 
    companyTag: 'Converts rowing maching workouts into data',
    description: `
    This is a live and published iOS app + supporting website.
    I designed this in Figma and used no design kits.
    The front-end of the website is built with React and the App is built with React Native. I managed the builds and submission to the App Store through Expo.
    The back-end is data is serverless and built on Firebase with photos stored on Cloudinary. Additionally I have a python server to manage the photo manipulation functions through AWS.
    `,    title: 'Full Stack Development', url: 'https://ergbase.com/'},
    
    {company: 'TrainingStats', 
    companyTag: 'Analyze your Strava workouts',
    description: `
    I designed this in Figma and used no design kits.
    The front-end is built with React and gets data from Strava's API.
    I introduced an Express server to create several custom endpoints for analytics that the client can interact with.
    `,    title: 'Full Stack Development', url: 'https://trainingstats.xyz/'},
]

class Worklist extends Component {

    render() {
        return (
            <div className='worklist_container'>
                <p className='worklist_text'>Work History</p>
                {history.map((item, index) => {
                    return <WorkItem
                    type='history' 
                    key={index} companyTag={item.companyTag} description={item.description} company={item.company} title={item.title} url={item.url} />
                })}
                <p className='worklist_text'>Dev Projects</p>
                {projects.map((item, index) => {
                    return <WorkItem 
                    type='projects'
                    key={index} companyTag={item.companyTag} description={item.description} company={item.company} title={item.title} url={item.url} />
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