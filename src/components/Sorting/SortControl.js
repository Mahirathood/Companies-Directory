import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const SortControl = ({ sortOption, setSortOption }) => {
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200, ml: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 } }}>
      <FormControl fullWidth size="small">
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          id="sort-select"
          value={sortOption}
          label="Sort By"
          onChange={handleSortChange}
        >
          <MenuItem value="name-asc">Name (A-Z)</MenuItem>
          <MenuItem value="name-desc">Name (Z-A)</MenuItem>
          <MenuItem value="employees-asc">Employees (Low to High)</MenuItem>
          <MenuItem value="employees-desc">Employees (High to Low)</MenuItem>
          <MenuItem value="founded-asc">Founded (Oldest First)</MenuItem>
          <MenuItem value="founded-desc">Founded (Newest First)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortControl;