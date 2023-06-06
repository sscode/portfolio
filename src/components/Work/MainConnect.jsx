import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import WorkoutList from './WorkoutList';

function MainConnect() {
  const clientId = '102647'; // Replace with your Strava app's Client ID
  const clientSecret = '64874b0b18b796f1a8a8630cba507e52d1cf8eea'; // Replace with your Strava app's Client Secret
  const redirectUri = 'http://localhost:3000/'; // Replace with your app's redirect URI
  
  const stravaOAuthUrl = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=read_all,activity:read_all`;

  const buttonHandler = () => {
    window.location = stravaOAuthUrl;
  }

  const [accessToken, setAccessToken] = useState(null)
  const [workouts, setWorkouts] = useState(null)

  const getAccessToken = async (code) => {
    const response = await axios.post(`https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`);
    console.log(response.data);
    setAccessToken(response.data.access_token);

  }

    useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
        getAccessToken(code);
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
        const getActivities = async () => {
            const response = await axios.get(`https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`);
            setWorkouts(response.data);
        }
        getActivities();
    }
    }, [accessToken]);


  return (
    <div>
      {workouts ? 
      <>
        <WorkoutList workouts={workouts} />
      </>
      : 
      <>
        <h1 className='strava-h1'>Access Token: {accessToken}</h1>
          <div 
          onClick={buttonHandler}
          className='button'>
              <p className='button-text'>Connect</p>
          </div> 
      </>
      
      }
    </div>
  )
}

export default MainConnect;
