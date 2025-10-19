import React from 'react';
import { 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Grid,
  Typography,
  Paper
} from '@mui/material';

const FilterPanel = ({ filters, setFilters, industries, locations }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Filter Companies
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Search by Name"
            name="searchTerm"
            value={filters.searchTerm}
            onChange={handleFilterChange}
            margin="normal"
            variant="outlined"
            size="small"
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth margin="normal" size="small">
            <InputLabel id="industry-label">Industry</InputLabel>
            <Select
              labelId="industry-label"
              id="industry"
              name="industry"
              value={filters.industry}
              label="Industry"
              onChange={handleFilterChange}
            >
              <MenuItem value="">
                <em>All Industries</em>
              </MenuItem>
              {industries.map((industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth margin="normal" size="small">
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              id="location"
              name="location"
              value={filters.location}
              label="Location"
              onChange={handleFilterChange}
            >
              <MenuItem value="">
                <em>All Locations</em>
              </MenuItem>
              {locations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth margin="normal" size="small">
            <InputLabel id="employees-label">Company Size</InputLabel>
            <Select
              labelId="employees-label"
              id="employeeRange"
              name="employeeRange"
              value={filters.employeeRange}
              label="Company Size"
              onChange={handleFilterChange}
            >
              <MenuItem value="">
                <em>All Sizes</em>
              </MenuItem>
              <MenuItem value="small">Small (&lt; 200)</MenuItem>
              <MenuItem value="medium">Medium (200-500)</MenuItem>
              <MenuItem value="large">Large (&gt; 500)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FilterPanel;