/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput, Typography } from '@mui/material';
import mockData from '../data/mockData';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const attributes = ['Country', 'State', 'City', 'Sector', 'Category'];
const metrics = ['My Spend', 'Same Store Spend', 'New Store Spend', 'Lost Store Spend'];
const sectors = ['Retail', 'Food', 'Industrial'];
const categories = ['Juice', 'Snacks', 'Frozen Foods', 'Beverages'];

const Filters = ({ filters, setFilters }: any) => {
  const [availableValues, setAvailableValues] = useState({
    countries: [] as string[],
    states: [] as string[],
    cities: [] as string[],
    sectors: [] as string[],
    categories: [] as string[]
  });
  
  useEffect(() => {
    const countries = Array.from(new Set(mockData.map((item) => item.country)));
    const states = Array.from(new Set(mockData.map((item) => item.state)));
    const cities = Array.from(new Set(mockData.map((item) => item.city)));
    const sectors = Array.from(new Set(mockData.map((item) => item.sector)));
    const categories = Array.from(new Set(mockData.map((item) => item.category)));
    setAvailableValues({ countries, states, cities, sectors, categories });
  }, []);
  
  const handleChange = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  return (

    
    <Box display="flex" flexWrap="wrap" gap={2} mb={2}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box display="flex" gap={2} mb={2}>
                <DatePicker
                label="Start Date"
                value={filters.dateRange.start}
                onChange={(newValue) => handleChange('dateRange', { ...filters.dateRange, start: newValue })}
                maxDate={new Date()}
                minDate={new Date(new Date().setMonth(new Date().getMonth() - 12))}
                slotProps={{ textField: { variant: 'outlined', size: 'small' } }}
                />
                <DatePicker
                label="End Date"
                value={filters.dateRange.end}
                onChange={(newValue) => handleChange('dateRange', { ...filters.dateRange, end: newValue })}
                maxDate={new Date()}
                minDate={new Date(new Date().setMonth(new Date().getMonth() - 12))}
                slotProps={{ textField: { variant: 'outlined', size: 'small' } }}
                />
            </Box>
        </LocalizationProvider>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Sector</InputLabel>
        <Select
          value={filters.sector}
          onChange={(e) => handleChange('sector', e.target.value)}
          input={<OutlinedInput label="Sector" />}
        >
          {sectors.map((sector) => (
            <MenuItem key={sector} value={sector}>{sector}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
          input={<OutlinedInput label="Category" />}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Country</InputLabel>
        <Select
          value={filters.country || ''}
          onChange={(e) => handleChange('country', e.target.value)}
          input={<OutlinedInput label="Country" />}
        >
          {availableValues.countries.map((value) => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>State</InputLabel>
        <Select
          value={filters.state || ''}
          onChange={(e) => handleChange('state', e.target.value)}
          input={<OutlinedInput label="State" />}
        >
          {availableValues.states.map((value) => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>City</InputLabel>
        <Select
          value={filters.city || ''}
          onChange={(e) => handleChange('city', e.target.value)}
          input={<OutlinedInput label="City" />}
        >
          {availableValues.cities.map((value) => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Metrics</InputLabel>
        <Select
          multiple
          value={filters.metricSelector}
          onChange={(e) => handleChange('metricSelector', e.target.value)}
          input={<OutlinedInput label="Metrics" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {metrics.map((metric) => (
            <MenuItem key={metric} value={metric}>
              <Checkbox checked={filters.metricSelector.indexOf(metric) > -1} />
              <ListItemText primary={metric} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
