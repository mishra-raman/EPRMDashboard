import React from 'react';
import Card from '../Card/Card';
import BarChart from '../Bar/BarChart';
import DependencyPieChart from './DependencyPieChart';
import TrendIndicator from './TrendIndicator';
import InventoryDonutChart from './InventoryDonutChart';
import RevenueBarChart from './RevenueBarChart';
import RiskMap from './RiskMap';
import BarChartCard from '../Card/BarChartCard';

function CompareChart({ selected, compare }) {
  console.log(selected, compare);
  return (
    <div>
      <div className='text-center font-bold'>Risk Score Analysis</div>
      <div className='flex justify-between  mb-4  items-center gap-2 '>
        <BarChartCard title='Top Factors affecting Risk Score' className='bg-white w-full h-full
         flex  justify-center'>
          <BarChart selected={selected} compare={compare} />
        </BarChartCard>
        <Card title='Supplier Dependency Chart' value={selected.DependencyPieChart || ''}>
        
          <DependencyPieChart selectedVendor={selected} compare={compare} />
        </Card>
      </div>

      <div className='flex justify-between gap-2 mb-4'>
        <Card title='Supply Chain Incidents' value={selected.Supply_Chain_Incidents || ''} >
          <div className=' w-60'>
            <TrendIndicator selectedVendor={selected} compare={compare} />
          </div>
        </Card>
        <Card title='Inventory Visibility' value={selected.Inventory_Visibility || ''}>
       
          <InventoryDonutChart selected={selected} compare={compare} />
        </Card>
      </div>

      <div className='flex justify-between mb-4 items-center gap-2'>
        <BarChartCard className='bg-white w-full h-full
         flex  justify-center' title='Annual Revenue' value={selected.Annual_Revenue || ''}>
          <RevenueBarChart selected={selected} compare={compare} />
        </BarChartCard>

        <Card
          title='Geographic Risk Map'
          value={selected.Geographic_Risk || ''}
        >
          <RiskMap selectedState={selected} compareState={compare} />
        </Card>
      </div>
    </div>
  );
}

export default CompareChart;
