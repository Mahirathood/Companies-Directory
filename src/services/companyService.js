import companiesData from '../data/companies.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchCompanies = async () => {
  try {
    await delay(500);
    return { data: companiesData, error: null };
  } catch (error) {
    console.error('Error fetching companies:', error);
    return { data: null, error: 'Failed to fetch companies. Please try again later.' };
  }
};

export const getUniqueIndustries = (companies) => {
  if (!companies) return [];
  return [...new Set(companies.map(company => company.industry))].sort();
};

export const getUniqueLocations = (companies) => {
  if (!companies) return [];
  return [...new Set(companies.map(company => company.location))].sort();
};

export const filterCompanies = (companies, filters) => {
  if (!companies) return [];
  
  return companies.filter(company => {
    if (filters.searchTerm && !company.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }
    
    if (filters.industry && company.industry !== filters.industry) {
      return false;
    }
    
    if (filters.location && company.location !== filters.location) {
      return false;
    }
    
    if (filters.employeeRange) {
      if (filters.employeeRange === 'small' && company.employees >= 200) {
        return false;
      }
      if (filters.employeeRange === 'medium' && (company.employees < 200 || company.employees > 500)) {
        return false;
      }
      if (filters.employeeRange === 'large' && company.employees <= 500) {
        return false;
      }
    }
    
    return true;
  });
};

export const sortCompanies = (companies, sortOption) => {
  if (!companies) return [];
  
  const sortedCompanies = [...companies];
  
  switch (sortOption) {
    case 'name-asc':
      return sortedCompanies.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sortedCompanies.sort((a, b) => b.name.localeCompare(a.name));
    case 'employees-asc':
      return sortedCompanies.sort((a, b) => a.employees - b.employees);
    case 'employees-desc':
      return sortedCompanies.sort((a, b) => b.employees - a.employees);
    case 'founded-asc':
      return sortedCompanies.sort((a, b) => a.founded - b.founded);
    case 'founded-desc':
      return sortedCompanies.sort((a, b) => b.founded - a.founded);
    default:
      return sortedCompanies;
  }
};

export const paginateCompanies = (companies, page, itemsPerPage) => {
  if (!companies) return [];
  const startIndex = (page - 1) * itemsPerPage;
  return companies.slice(startIndex, startIndex + itemsPerPage);
};