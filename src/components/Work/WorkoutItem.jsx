import React from 'react'

function WorkoutItem({workout}) {

    console.log("in item: ", workout)
  return (
    <div>
        <h1 className='strava-h1'>{workout.distance}</h1>
    </div>
  )
}

export default WorkoutItem