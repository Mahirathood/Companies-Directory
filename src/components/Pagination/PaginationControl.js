import React from 'react';
import { Pagination, Box } from '@mui/material';

const PaginationControl = ({ count, page, onChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
      <Pagination 
        count={count} 
        page={page} 
        onChange={onChange} 
        color="primary" 
        showFirstButton 
        showLastButton
      />
    </Box>
  );
};

export default PaginationControl;