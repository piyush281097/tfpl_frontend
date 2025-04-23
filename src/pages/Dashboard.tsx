

import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import MetricsView from '../components/Tabs/MetricsView';
import AnalyticsView from '../components/Tabs/AnalyticsView';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box p={2}>
      <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)}>
        <Tab label="Metrics View" />
        <Tab label="Analytics View" />
      </Tabs>
      {activeTab === 0 && <MetricsView />}
      {activeTab === 1 && <AnalyticsView />}
    </Box>
  );
};

export default Dashboard;
