/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

import { parseISO, format } from 'date-fns';
import useFilterData from '../../hooks/useFilterData';


const AnalyticsView = ({user}: any) => {
  const { filteredData } = useFilterData(user);

  // Group data by month and sum spend
  const spendByMonth: Record<string, number> = {};
  filteredData.forEach((entry:any) => {
    const date = parseISO(entry.startDate);
    const month = format(date, 'MMM');
    const spend = entry?.mySpend?.current || 0;
    spendByMonth[month] = (spendByMonth[month] || 0) + spend;
  });

  const data = [
    {
      id: 'My Spend',
      data: Object.entries(spendByMonth).map(([month, value]) => ({ x: month, y: value })),
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