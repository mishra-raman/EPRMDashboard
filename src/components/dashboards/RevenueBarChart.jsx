import { Bar } from 'react-chartjs-2';

const RevenueBarChart = ({ selected, compare }) => {
  const data = {
    labels: ['Annual Revenue'],
    datasets: [
      {
        label: selected?.Company_Name,
        data: [selected.Annual_Revenue], // Scale the data
        backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
      {
        label: compare?.Company_Name,
        data: [compare?.Annual_Revenue], // Scale the data
        backgroundColor: ['rgba(153, 102, 255, 0.6)'],
        borderColor: ['rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: 'right',
      },
    },
    scales: {
      y: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 20, // Set the maximum suggested value of the y-axis to 20
          },
        },
      ],
      x: [
        {
          barThickness: 0.1,
          barPercentage: 0.4,
        },
      ],
    },
  };

  return (
    <div className='flex  w-full  justify-center items-center  '>
      <div className='h-60 w-full'>

        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default RevenueBarChart;