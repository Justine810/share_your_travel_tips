import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import {
  Input,
  TextField,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Button,
  FormControl,
  Chip
} from '@material-ui/core';

const AdminPostForm = props => {
  const { handleSubmit, register, control } = useForm();
  const { updateMode, tripIdToUpdate, tripsData } = props;

  const onSubmit = data => {
    // ajouté un tip
    if (!updateMode) {
      const dataForms = {
        ...data
      };

      axios
        .post('/api/trip', dataForms)
        .then(res => res.data)
        .then(res => {
          alert(`Le tip a été ajouté`);
        })
        .catch(e => {
          console.error(e);
          alert(`Erreur concernant l'ajout du tip ${e.message}`);
        });
        


    }

    // mettre à jour un tip
    const dataForms = {
      ...data
    };
    axios
      .put(`/api/trip/${tripIdToUpdate}`, dataForms)
      .then(res => res.data)
      .then(res => {
        alert(`Tip modifié avec succès !`);
      })
      .catch(e => {
        console.error(e);
        alert(`Erreur concernant la modification du tip ${e}`);
      });
  };

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              name="destination"
              inputRef={register}
              id="outlined-basic"
              label="Pays"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="continent_name"
              type="text"
              label="Continent"
              inputRef={register}
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="tips"
              inputRef={register}
              id="outlined-multiline-static"
              label="Votre tip"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="picture"
              inputRef={register}
              id="outlined-basic"
              label="Photo de votre voyage"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {updateMode ? "Mettre à jour" : 'Ajouter'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AdminPostForm;
