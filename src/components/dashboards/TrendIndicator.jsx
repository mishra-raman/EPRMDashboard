import React, { useEffect, useState } from 'react';

const TrendIndicator = ({ selectedVendor, compare }) => {
  const { Supply_Chain_Incidents } = selectedVendor;
  const [value, setValue] = useState(0);
  const [c, setCompare] = useState(0);
  useEffect(() => {
    if (Supply_Chain_Incidents) {
      const p = Supply_Chain_Incidents * 20;
      setValue(p);
    }
    if (compare?.Supply_Chain_Incidents) {
      const a = compare?.Supply_Chain_Incidents * 20;
      setCompare(a);
    }
  }, [Supply_Chain_Incidents, compare]);

  if (!selectedVendor) {
    return <div>Please select a vendor to display the Dependency Risk.</div>;
  }

  return (
    <div>
      <div className='flex justify-between relative my-5'>
        <div
          className='absolute h-full '
          style={{ width: `1px`, top: '8px', left: `${value}%` }}
        >
          <svg
            style={{
              transform: 'rotate(-90deg)',
              color: 'green',
            }}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path d='M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z' />
          </svg>
        </div>
        <div className='bg-green-400 w-full h-6'></div>
        <div className='bg-lime-400 w-full h-6'></div>
        <div className='bg-yellow-400 w-full h-6'></div>
        <div className='bg-orange-400 w-full h-6'></div>
        <div className='bg-red-500 w-full h-6'></div>
      </div>
      <div className='flex justify-center'>
      {(selectedVendor && selectedVendor?.Company_Name) || ""}
      </div>
      {/*  */}
      <div className='flex justify-between relative my-5'>
        <div
          className='absolute h-full '
          style={{ width: `1px`, top: '8px', left: `${c}%` }}
        >
          <svg
            style={{
              transform: 'rotate(-90deg)',
              color: 'green',
            }}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path d='M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z' />
          </svg>
        </div>
        <div className='bg-green-400 w-full h-6'></div>
        <div className='bg-lime-400 w-full h-6'></div>
        <div className='bg-yellow-400 w-full h-6'></div>
        <div className='bg-orange-400 w-full h-6'></div>
        <div className='bg-red-500 w-full h-6'></div>
      </div>
      <div className='flex justify-center'>
      {(compare  && compare?.Company_Name)||""}
      </div>
    </div>
  );
};

export default TrendIndicator;
