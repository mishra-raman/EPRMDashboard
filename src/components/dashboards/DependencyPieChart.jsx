import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

const DependencyPieChart = ({ selectedVendor, compare }) => {
  const [s, setData] = useState(0);
  const [d, setCompare] = useState(0);
  useEffect(() => {
    setData(selectedVendor?.Dependency_Risk);
    setCompare(compare?.Dependency_Risk);
    console.log(selectedVendor.Dependency_Risk);
  }, [selectedVendor, compare]);

  const chartData = {
    borderColor: 'rgba(0, 0, 0, 0)',
    datasets: [
      {
        data: [s, 100 - s],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(200, 200, 200, 0.6)',
        ],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(200, 200, 200, 1)'],
        borderWidth: 1,
      },
    ],
  };
  const compareData = {
    borderColor: 'rgba(0, 0, 0, 0)',
    datasets: [
      {
        data: [d, 100 - d],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(200, 200, 200, 0.6)',
        ],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(200, 200, 200, 1)'],
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  };
  if (!selectedVendor) {
    return <div>Please select a vendor to display the Dependency Risk.</div>;
  }
  return (
    <>
    <div className='flex flex-col items-center'>
      <div className='flex justify-evenly w-full items-center'>

        <div className='   h-44 '>
          <Pie data={chartData} options={chartOptions} />
          <div className='text-center'>{selectedVendor.Company_Name}</div>
        </div>

        {compare?.Company_Name && (
          <div className='   h-44 '>
            <Pie data={compareData} options={chartOptions} />
            <div className='text-center'>{compare.Company_Name}</div>
          </div>
        )}
      
      </div>
      <div className="flex  items-start gap-2 mb-2 my-10">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4" style={{ backgroundColor: 'rgb(75, 192, 192)' }}></div>
              <div>Single Supplier</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4" style={{ backgroundColor: 'rgb(200, 200, 200)' }}></div>
              <div>Multiple Supplier</div>
            </div>
          </div>

          

      </div>
    

    </>
  );
};

export default DependencyPieChart;
