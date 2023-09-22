import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const InventoryDonutChart = ({ selected, compare }) => {
  const [s, setSelected] = useState(0);
  const [c, setCompare] = useState(0);

  useEffect(() => {
    // Inventory_Visibility
    setSelected(selected?.Inventory_Visibility || 0);
    setCompare(compare?.Inventory_Visibility || 0);
  }, [selected, compare]);

  const data = {
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
    datasets: [
      {
        data: [c, 100 - c],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(200, 200, 200, 0.6)',
        ],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(200, 200, 200, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
    <div className='flex flex-col items-center'>

     
  
    <div className='h-72 flex items-center gap-9'>

      <div className='w-40 h-40'>
        <Doughnut data={data} />
        <div className='text-center'>{selected.Company_Name}</div>
      </div>
      {compare && (
        <div className='w-40 h-40'>
          <Doughnut data={compareData} />{' '}
          <div className='text-center'>{compare.Company_Name}</div>
        </div>
      )}
    </div>
    <div className="flex items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4" style={{ backgroundColor: 'rgb(75, 192, 192)' }}></div>
              <div>Visible Inventory</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4" style={{ backgroundColor: 'rgb(200, 200, 200)' }}></div>
              <div>Invisible Inventory</div>
            </div>
          </div>
    </div>

    </>
  );
};

export default InventoryDonutChart;
