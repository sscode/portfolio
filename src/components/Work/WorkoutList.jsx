import React from 'react'
import { useState } from 'react';
import Filters from './Filters';
import RunsChart from './RunsChart'
import RunsTable from './RunsTable';
import WorkoutItem from './WorkoutItem'

function WorkoutList({workouts}) {

  const [filters, setFilters] = useState({
    distanceMin: 0,
    distanceMax: 20000,
    speedMin: '3:10',
    speedMax: '5:40'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

    //filter to only runs and distance
    const runs = workouts.filter(workout => workout.sport_type === 'Run' && workout.distance >= filters.distanceMin && workout.distance <= filters.distanceMax);


    //get pace
    runs.forEach(run => {
        const distanceInKm = run.distance / 1000; // Convert distance to kilometers
        const paceInSeconds = run.moving_time / distanceInKm; // Calculate pace in seconds per kilometer
      
        const minutes = Math.floor(paceInSeconds / 60); // Extract minutes
        const seconds = Math.round(paceInSeconds % 60); // Extract seconds

        run.minutes = minutes
        run.seconds = seconds
        run.paceSeconds = paceInSeconds
      
        run.pace = `${minutes}:${seconds.toString().padStart(2, '0')}`; // Format pace as "minutes:seconds"
      });

      //filter by pace
      const stringToSeconds = (time) => {
        const [minutes, seconds] = time.split(':').map(Number);
        return minutes * 60 + seconds;
      };

      const calculatePace = (moving_time, distance) => {
        const pace = moving_time / (distance / 1000); // pace in seconds per kilometer
        return pace;
      };
      

      const speedMinInSeconds = stringToSeconds(filters.speedMin);
      const speedMaxInSeconds = stringToSeconds(filters.speedMax);

      const fastRuns = runs.filter(run => {
        const runPaceInSeconds = calculatePace(run.moving_time, run.distance);
        return runPaceInSeconds >= speedMinInSeconds && runPaceInSeconds <= speedMaxInSeconds;
      });
      

    // const fastRuns = runs.filter(run => run.minutes < 6)
    

    console.log(fastRuns)

  return (
    <div className='data-container'>
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <RunsTable runs={fastRuns} />
      {/* <RunsChart 
      distanceMin={filters.distanceMin}
      distanceMax={filters.distanceMax}
      speedMin={filters.speedMin}
      speedMax={filters.speedMax}
      runs={fastRuns.reverse()} /> */}
    </div>
    )
}

export default WorkoutList