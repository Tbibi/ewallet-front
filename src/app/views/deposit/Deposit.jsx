import React from 'react';
import { Autocomplete, Grid, Card, TextField } from '@mui/material';
import { useState } from 'react';
import Amount from '../transfer/Amount';

const suggestions = [
    {label: 'Compte courant' },
     { label: 'Compte epargne' }];

const Deposit = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (_, newValue) => {
    setSelectedOption(newValue);
  };
  return (
    <Card sx={{ px: 3, py: 2, mb: 3 }}>
      <h3>Vous</h3>
      <Autocomplete
        options={suggestions}
        getOptionLabel={(option) => option.label}
        value={selectedOption}
        onChange={handleOptionChange}
        renderInput={(params) => (
          <TextField {...params} label="Compte à débiter" variant="outlined" fullWidth />
        )}
      />
      <Grid container spacing={0}>
        <Grid item lg={10} md={10} xs={10}>
          <Amount 
          />
        </Grid>

        <Grid item lg={2} md={2} xs={2}>
          <p style={{ fontWeight: 'bold', fontSize: '22px', marginLeft: '15px' }}>DH</p>
        </Grid>
        <TextField label="motif" variant="outlined" fullWidth sx={{ marginTop: '16px' }} />
      </Grid>
    </Card>
  );
};
export default Deposit;
