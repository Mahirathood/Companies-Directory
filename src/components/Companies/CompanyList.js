import React from 'react';
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import CompanyCard from './CompanyCard';

const CompanyList = ({ companies, loading, error }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography color="error" variant="h6">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  if (!companies || companies.length === 0) {
    return (
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h6">No companies found matching your criteria.</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {companies.map((company) => (
        <Grid item key={company.id} xs={12} sm={6} md={4}>
          <CompanyCard company={company} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyList;