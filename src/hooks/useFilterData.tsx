/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import mockData from '../data/mockData';
import { isAfter, isBefore, parseISO } from 'date-fns';

type FilterType = {
    dateRange: {
      start: Date | null;
      end: Date | null;
    };
    country: string;
    state: string;
    city: string;
    sector: string;
    category: string;
    attributeSelector: string[];
    groupingAttributes: string[];
    metricSelector: string[];
};

const defaultFilters: FilterType = {
    dateRange: {
      start: null,
      end: null,
    },
    country: '',
    state: '',
    city: '',
    sector: '',
    category: '',
    attributeSelector: [],
    groupingAttributes: [],
    metricSelector: [],
};

const useFilterData = (user: any) => {
    const [filters, setFilters] = useState<FilterType>(defaultFilters);

    const filteredData = mockData.filter((entry: any) => {
      const keys: (keyof FilterType)[] = ['country', 'state', 'city', 'sector', 'category'];
      const matchesAttributes = keys.every((key) => {
        return !filters[key] || entry[key] === filters[key];
      });

      const matchesDateRange = (() => {
          if (!filters.dateRange.start || !filters.dateRange.end) return true;
          try {
              const entryStart = parseISO(entry.startDate);
              const entryEnd = parseISO(entry.endDate);
              const filterStart = new Date(filters.dateRange.start);
              const filterEnd = new Date(filters.dateRange.end);
           // Overlapping date range logic
          return (
              !isBefore(entryEnd, filterStart) &&
              !isAfter(entryStart, filterEnd)
            );
          } catch {
            return false;
          }
        })();

        const matchesUser = user?.id ? entry.userID === user.id : true;
  
        return matchesAttributes && matchesDateRange && matchesUser;
    }); 


    return {
        filters,
        setFilters,
        filteredData,
    };
};

export default useFilterData;