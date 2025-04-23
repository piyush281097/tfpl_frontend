/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ResponsiveBar } from '@nivo/bar';
import { Box, Typography } from '@mui/material';

const BarChart = ({ data }: any) => {
  const chartDataMap = new Map<string, Record<string, any>>();
  const metricSet = new Set<string>();

  data.forEach((entry: any) => {
    const category = entry.category || 'Unknown';
    if (!chartDataMap.has(category)) {
      chartDataMap.set(category, { category });
    }

    const categoryGroup = chartDataMap.get(category);
    if (!categoryGroup) return; // Skip if undefined

    Object.entries(entry).forEach(([key, value]) => {
      // Only include keys that have a `.current` and are not common fields like 'category'
      if (
        typeof value === 'object' &&
        value !== null &&
        'current' in value &&
        !['category', 'date', 'country', 'state', 'city', 'sector'].includes(key)
      ) {
        categoryGroup[key] = (categoryGroup[key] || 0) + (value.current || 0);
        metricSet.add(key);
      }
    });
  });

  const chartData = Array.from(chartDataMap.values());
  const dynamicMetricKeys = Array.from(metricSet);

  return (
    <Box height={400} mt={4}>
      <Typography variant="h6">Spend per Category</Typography>
      <ResponsiveBar
        data={chartData}
        keys={dynamicMetricKeys}
        indexBy="category"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisBottom={{ tickRotation: -45 }}
        axisLeft={{ tickSize: 5, tickPadding: 5 }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate
      />
    </Box>
  );
};

export default BarChart;