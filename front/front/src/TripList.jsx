import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import './TripList.scss';

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
       <Container maxWidth="lg">
          <Grid container spacing={5}>
      {
        trips.map((trip) => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
          <h2>{trip.destination}</h2>
          <h3>{trip.continent_name}</h3>
          <img className="img-voyage" src={trip.picture} alt="img"/>
          <p className="texte-voyage">{trip.tips}</p>
          </Grid>
        ))
      }
      </Grid>
      </Container>
    </div>
  );
}

export default TripList;