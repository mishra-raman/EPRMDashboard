import React from 'react';

const BarChartCard = ({ title, children }) => {
  return (
    <div className='border px-2 w-full bg-white rounded-xl h-80 flex justify-center items-center flex-col relative'>
      <div className='text-sm text-center w-full absolute top-5 font-bold'>
        {title}
      </div>
      <div className='flex items-center justify-between px-4 h-full w-full mt-10 mb-10'>
        <div className='flex h-full w-full'>{children}</div>
      </div>
    </div>
  );
};

export default BarChartCard;