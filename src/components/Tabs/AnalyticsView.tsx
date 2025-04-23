import React from 'react';
import { Box, Typography } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';



const AnalyticsView: React.FC = () => {
  const data = [
    {
      id: 'My Spend',
      data: [
        { x: 'Jan', y: 100 },
        { x: 'Feb', y: 120 },
        { x: 'Mar', y: 90 },
      ],
    },
  ];

  return (
    <Box>
      <Typography variant="h6" mb={2}>Spend Over Time</Typography>
      <Box height={400}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true }}
          axisBottom={{ legend: 'Month' }}
          axisLeft={{ legend: 'Spend' }}
          colors={{ scheme: 'category10' }}
          pointSize={10}
        />
      </Box>
    </Box>
  );
};

export default AnalyticsView;