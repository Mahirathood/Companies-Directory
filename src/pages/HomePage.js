import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Alert } from '@mui/material';
import CompanyList from '../components/Companies/CompanyList';
import FilterPanel from '../components/Filters/FilterPanel';
import SortControl from '../components/Sorting/SortControl';
import PaginationControl from '../components/Pagination/PaginationControl';
import { 
  fetchCompanies, 
  getUniqueIndustries, 
  getUniqueLocations, 
  filterCompanies, 
  sortCompanies,
  paginateCompanies
} from '../services/companyService';

const HomePage = () => {
  // State for companies data
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [displayedCompanies, setDisplayedCompanies] = useState([]);
  
  // State for filters
  const [filters, setFilters] = useState({
    searchTerm: '',
    industry: '',
    location: '',
    employeeRange: ''
  });
  
  // State for sorting
  const [sortOption, setSortOption] = useState('name-asc');
  
  // State for pagination
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(0);
  
  // State for loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Derived state for filter options
  const [industries, setIndustries] = useState([]);
  const [locations, setLocations] = useState([]);

  // Fetch companies data
  useEffect(() => {
    const getCompanies = async () => {
      setLoading(true);
      const { data, error } = await fetchCompanies();
      
      if (error) {
        setError(error);
        setLoading(false);
        return;
      }
      
      setCompanies(data);
      setFilteredCompanies(data);
      setIndustries(getUniqueIndustries(data));
      setLocations(getUniqueLocations(data));
      setLoading(false);
    };
    
    getCompanies();
  }, []);
  
  // Apply filters and sorting
  useEffect(() => {
    if (!companies.length) return;
    
    // Apply filters
    const filtered = filterCompanies(companies, filters);
    
    // Apply sorting
    const sorted = sortCompanies(filtered, sortOption);
    
    setFilteredCompanies(sorted);
    setTotalPages(Math.ceil(sorted.length / itemsPerPage));
    
    // Reset to first page when filters change
    setPage(1);
  }, [companies, filters, sortOption, itemsPerPage]);
  
  // Apply pagination
  useEffect(() => {
    if (!filteredCompanies.length) {
      setDisplayedCompanies([]);
      return;
    }
    
    const paginatedCompanies = paginateCompanies(filteredCompanies, page, itemsPerPage);
    setDisplayedCompanies(paginatedCompanies);
  }, [filteredCompanies, page, itemsPerPage]);
  
  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Companies Directory
        </Typography>
        
        <FilterPanel 
          filters={filters} 
          setFilters={setFilters} 
          industries={industries} 
          locations={locations} 
        />
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', md: 'center' },
          flexDirection: { xs: 'column', md: 'row' },
          mb: 2 
        }}>
          <Typography variant="h6" component="h2">
            {filteredCompanies.length} Companies Found
          </Typography>
          
          <SortControl 
            sortOption={sortOption} 
            setSortOption={setSortOption} 
          />
        </Box>
        
        <CompanyList 
          companies={displayedCompanies} 
          loading={loading} 
          error={error} 
        />
        
        {filteredCompanies.length > itemsPerPage && (
          <PaginationControl 
            count={totalPages} 
            page={page} 
            onChange={handlePageChange} 
          />
        )}
      </Box>
    </Container>
  );
};

export default HomePage;