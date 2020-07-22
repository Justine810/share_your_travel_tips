import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import AdminPostForm from './AdminPostForm';
import AdminTab from './AdminTab';
import axios from 'axios';
import './admin.scss';

const AdminPage = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const [tripIdToUpdate, setTripIdToUpdate] = useState(null);
  const [tripsData, setTripsData] = useState([]);

  // get trips data
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/trips')
      .catch(error => {
        return console.log(error.toJSON());
      });
      return setTripsData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="admin-animator">
      <>
        <Container>
          <Paper elevation={2}>
            <AdminPostForm
              updateMode={updateMode}
              tripIdToUpdate={tripIdToUpdate}
              tripsData={tripsData}
            />
          </Paper>
          <Paper elevation={2}>
            <AdminTab
              setUpdateMode={setUpdateMode}
              tripIdToUpdate={tripIdToUpdate}
              setTripIdToUpdate={setTripIdToUpdate}
              tripsData={tripsData}
            />
          </Paper>
        </Container>
      </>
    </div>
  );
};

AdminPage.propTypes = {};

export default AdminPage;
