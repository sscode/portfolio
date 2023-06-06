import React from 'react'
import RunsChart from './RunsChart'
import WorkoutItem from './WorkoutItem'

function WorkoutList({workouts}) {

    //filter to only runs
    const runs = workouts.filter(workout => workout.sport_type === 'Run')

    runs.forEach(run => {
        const distanceInKm = run.distance / 1000; // Convert distance to kilometers
        const paceInSeconds = run.moving_time / distanceInKm; // Calculate pace in seconds per kilometer
      
        const minutes = Math.floor(paceInSeconds / 60); // Extract minutes
        const seconds = Math.round(paceInSeconds % 60); // Extract seconds

        run.minutes = minutes
        run.seconds = seconds
      
        run.pace = `${minutes}:${seconds.toString().padStart(2, '0')}`; // Format pace as "minutes:seconds"
      });

    const fastRuns = runs.filter(run => run.minutes < 6)

    console.log(fastRuns)

  return (
    <>
    <div>
        {/* <h1
        className='strava-h1'
        >Workout List</h1> */}
    </div>
    <RunsChart runs={fastRuns.reverse()} />
    {/* {runs.map((workout) => (
        <WorkoutItem workout={workout} />
    ))} */}
    </>
    )
}

export default WorkoutList