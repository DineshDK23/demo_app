import React, { useState, useEffect } from 'react';

const EffectState = () => {
  const [states] = useState([
    { id: 'TN', name: 'Tamil Nadu' },
    { id: 'KL', name: 'Kerala' },
    { id: 'AP', name: 'Andhra Pradesh' },
    { id: 'DL', name: 'Delhi' },
  ]);

  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const districtsData = {
    TN: [
      { id: 101, name: 'Namakkal' },
      { id: 102, name: 'Karur' },
      { id: 103, name: 'Salem' },
    ],
    AP: [
      { id: 201, name: 'Vizag' },
      { id: 202, name: 'Trupadhi' },
      { id: 203, name: 'Gundoor' },
    ],
    KL: [
      { id: 301, name: 'Alappi' },
      { id: 302, name: 'Cochin' },
      { id: 303, name: 'Thekadi' },
    ],
    DL: [
      { id: 401, name: 'New Delhi' },
      { id: 402, name: 'North Delhi' },
      { id: 403, name: 'South Delhi' },
    ],
  };

  useEffect(() => {
    if (selectedState !== '') {      
      setDistricts(districtsData[selectedState]);
    } else {
      setDistricts([]);
    }
  }, [selectedState]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    //setSelectedDistrict('');
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div>
      <h2>State:</h2>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select a state</option>
        {states.map(state => (
          <option value={state.id}>{state.name}</option>
        ))}
      </select>

      <h2>District:</h2>
      <select value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="">Select a district</option>
        {districts.map(district => (
          <option value={district.id}>{district.name}</option>
        ))}
      </select>
    </div>
  );
};

export default EffectState;
