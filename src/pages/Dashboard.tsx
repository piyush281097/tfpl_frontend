
import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

import useFilterData from '../hooks/useFilterData';
import MetricsView from '../components/Tabs/MetricsView';
import AnalyticsView from '../components/Tabs/AnalyticsView';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [user, setUser] = useState(null);

  const {
    filters,
    setFilters,
    filteredData,
  } = useFilterData(user);

  return (
    <Box p={2}>
      <Tabs value={activeTab} onChange={(_e, v) => setActiveTab(v)}>
        <Tab label="Metrics View" />
        <Tab label="Analytics View" />
      </Tabs>

      {activeTab === 0 && (
        <MetricsView
          user={user}
          setUser={setUser}
          filters={filters}
          setFilters={setFilters}
          filteredData={filteredData}
        />
      )}

      {activeTab === 1 && (
        <AnalyticsView user={user}/>
      )}
    </Box>
  );
};

export default Dashboard;
