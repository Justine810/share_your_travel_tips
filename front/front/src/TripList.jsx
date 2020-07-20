import React, { useState, useEffect } from 'react';

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('api/trips')
    .then(res => res.json())
    .then(data => setTrips(data));
  }, []);
}

  return (
    <div>
     <ul>
       {
         trips.map((trip) => (
          <li key={trip.id}>
            {trip.destination}
            {trip.picture}
            {trip.tips}
            {trip.continent_id}
          </li>
         ))
       }
     </ul>
    </div>
  );

export default TripList;
