import React, { useState } from 'react'

function Filters({ filters, onFilterChange }) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocalFilters({
      ...localFilters,
      [name]: value
    });
  };

  const handleSaveClick = () => {
    onFilterChange(localFilters);
  };

  return (
    <div className='filter-container'>
            <h2 className='filter-titles'>Distance Bands (meters)</h2>
        <div className='filter'>
            <input className='filter-input' type='text' id='distanceMin' name='distanceMin' value={localFilters.distanceMin} onChange={handleInputChange} />
            <input className='filter-input' type='text' id='distanceMax' name='distanceMax' value={localFilters.distanceMax} onChange={handleInputChange} />
        </div>
        <h2 className='filter-titles'>Speed Bands</h2>
        <div className='filter'>
            <input className='filter-input' type='text' id='speedMin' name='speedMin' value={localFilters.speedMin} onChange={handleInputChange} />
            <input className='filter-input' type='text' id='speedMax' name='speedMax' value={localFilters.speedMax} onChange={handleInputChange} />
        </div>
        <button 
        className='button'
        onClick={handleSaveClick}>Update Chart</button>
    </div>
  )
}

export default Filters