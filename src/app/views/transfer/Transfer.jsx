import React from 'react';
import { Autocomplete,Grid, Card, styled, Icon, Button,TextField} from '@mui/material';
import { useState } from 'react';
import Amount from './Amount';


const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));



const suggestions = [
  { label: 'Compte courant' },
  { label: 'Compte epargne' },
  
];
const suggestions2 = [
  { label: 'ahmed tbibi' },
  { label: 'wissal abada' },
  
];



const Transfer = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const handleOptionChange2 = (_, newValue) => {
    setSelectedOption2(newValue);
  };
  const handleOptionChange = (_, newValue) => {
    setSelectedOption(newValue);
  };

  return (
    <ContentBox>
      <Grid container spacing={3}>
        <Grid item lg={4} md={4} xs={12}>
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
                <Amount/>
              </Grid>
              
              <Grid item lg={2} md={2} xs={2}>
                <p style={{ fontWeight: 'bold', fontSize: '22px',marginLeft:'15px' }}>DH</p>
              </Grid>
              <TextField
                label="motif"
                variant="outlined"
                fullWidth
                sx={{ marginTop: '16px' }}
              />
              
            </Grid>
            
          </Card>
        </Grid>
        <Grid item lg={2} md={2} xs={12}>
          <StyledButton variant="contained" color="secondary" sx={{ px: 9, py: 2, mt: 10, }}>
            <Icon>swap_horiz</Icon>
            Transferer
          </StyledButton>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Card sx={{ px: 3, py: 2,  }}>
            <h3>Beneficiaire</h3>
            <Autocomplete
              options={suggestions2}
              getOptionLabel={(option) => option.label}
              value={selectedOption2}
              onChange={handleOptionChange2}
              renderInput={(params) => (
                <TextField {...params} label="Compte à créditer" variant="outlined" fullWidth />
              )}
              sx={{paddingBottom:13,paddingTop:5}}
            />
            
          </Card>
        </Grid>
      </Grid>
    </ContentBox>
  );
};

export default Transfer;