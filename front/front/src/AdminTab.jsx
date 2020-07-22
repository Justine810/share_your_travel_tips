import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const AdminTab = props => {
  const {
    setUpdateMode,
    tripIdToUpdate,
    setTripIdToUpdate,
    tripsData,
    setTripsData
  } = props;

  const classes = useStyles();

  // Supprimer un tip
  const DeleteTrip = id => {
    axios.delete(`/api/trip/${id}`).then(response => {
      alert('Tip supprimé avec succès !');
    });
  };

  return (
    <Box mx="auto" mt={5}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Destination</TableCell>
              <TableCell align="center">Continent</TableCell>
              <TableCell align="center">Tips</TableCell>
              <TableCell align="center">Supprimer</TableCell>
              <TableCell align="center">Mettre à jour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tripsData.map(trip => (
              <TableRow key={trip.id}>
                <TableCell component="th" scope="row">
                  {trip.id}
                </TableCell>
                <TableCell align="center">
                  <div
                    className="coverAnimator"
                    style={{
                      backgroundImage: `url(${
                        trip.picture
                      })`
                    }}
                  />
                </TableCell>
                <TableCell align="center">{trip.destination}</TableCell>
                <TableCell align="center">{trip.continent_name}</TableCell>
                <TableCell align="center">{trip.tips}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => DeleteTrip(trip.id)}
                  >
               <DeleteIcon fontSize="large" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    className={classes.margin}
                    onClick={() => {
                      setTripIdToUpdate(trip.id);
                      setUpdateMode(true);
                    }}
                  >
               <EditIcon fontSize="large" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminTab;
