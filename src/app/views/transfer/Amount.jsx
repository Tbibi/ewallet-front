import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Amount = () => {
  const [amount, setAmount] = useState('');

  const handleChange = (event) => {
    let newValue = event.target.value;
    
    // Ensure that the input only contains numeric characters and the decimal point
    newValue = newValue.replace(/[^0-9.]/g, '');
    setAmount(newValue);
  };

  return (
    <TextField
      label="Montant à prélever en DH"
      variant="outlined"
      fullWidth
      value={amount}
      onChange={handleChange}
      sx={{ marginTop: '16px' }}
    />
  );
};

export default Amount;