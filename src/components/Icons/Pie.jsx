import React from 'react';

const Pie = (props) => {
  return (
    <svg
      width='100'
      height='100'
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_8_105)'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M50 8.33334C73.0125 8.33334 91.6666 26.9875 91.6666 50C91.6666 73.0125 73.0125 91.6667 50 91.6667C26.9875 91.6667 8.33331 73.0125 8.33331 50C8.33331 26.9875 26.9875 8.33334 50 8.33334ZM50 16.6667V50H83.3333C83.3333 41.1595 79.8214 32.681 73.5702 26.4298C67.319 20.1786 58.8405 16.6667 50 16.6667Z'
          fill='#1B998B'
        />
      </g>
      <defs>
        <clipPath id='clip0_8_105'>
          <rect width='100' height='100' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Pie;
