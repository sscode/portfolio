import React from 'react'

function WorkoutButton({company, type, show, visible}) {
  return (
    <div
    onClick={() => show(!visible)}
    className={`workitem_container workitem_container-${type}`}
    >{company.toUpperCase()}</div>
  )
}

export default WorkoutButton