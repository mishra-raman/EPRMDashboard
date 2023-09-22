import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const Card = ({ title, value, children }) => {
  return (
    <div className='border  px-2  w-full  bg-white rounded-xl h-80 flex justify-center items-center flex-col relative'>
      <div className='text-sm text-center w-fit  absolute top-5  font-bold'>
        {title}
      </div>
      <div className='flex items-center justify-between px-4'>
        <div className='  flex '>{children}</div>
      </div>
      {/* <div className='text-2xl text-orange-500 font-bold'>{value}</div> */}
    </div>
  );
};

export default Card;
