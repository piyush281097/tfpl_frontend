import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import useFilterData from '../../hooks/useFilterData';
import MembersModal from '../MembersModal';
import Filters from '../Filters';
import DataTable from '../DataTable';
import BarChart from '../BarChart';

const MetricsView: React.FC = () => {
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const {
    filters,
    setFilters,
    filteredData
  } = useFilterData(user);

  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="contained" onClick={() => setModalOpen(true)}>
          My Members
        </Button>
      </Box>
      <MembersModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectUser={(u) => {
          setUser(u);
          setModalOpen(false);
        }}
      />
      <Filters filters={filters} setFilters={setFilters} />
      <DataTable data={filteredData} filters={filters} />
      <BarChart data={filteredData} metricKeys={filters.metricSelector} />
    </Box>
  );
};

export default MetricsView;