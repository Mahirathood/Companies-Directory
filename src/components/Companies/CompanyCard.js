import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Link, Chip } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LanguageIcon from '@mui/icons-material/Language';

const CompanyCard = ({ company }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={company.logo}
        alt={`${company.name} logo`}
        sx={{ objectFit: 'contain', bgcolor: '#f5f5f5', p: 2 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {company.name}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <BusinessIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
          <Chip label={company.industry} size="small" color="primary" variant="outlined" />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {company.location}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <CalendarTodayIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            Founded: {company.founded}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <PeopleIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {company.employees} employees
          </Typography>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {company.description}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LanguageIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
          <Link href={company.website} target="_blank" rel="noopener" underline="hover">
            Visit Website
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;