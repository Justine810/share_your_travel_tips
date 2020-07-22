import React, { useEffect, useState } from 'react';

function TripList() {
  const [trips, setTrips] = useState(null);

  useEffect(() => {
    fetch('/api/trips')
      .then(res => res.json())
      .then(data => setTrips(data));
  }, []);

  if (!trips) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {
        trips.map((trip) => (
          <div>
          <h2>{trip.destination}</h2>
          <img src={trip.picture} alt="img"/>
          <p>{trip.tips}</p>
          <p>{trip.continent_name}</p>
          </div>
        ))
      }
    </div>
  );
}

export default TripList;