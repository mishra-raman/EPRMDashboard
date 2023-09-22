import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      position: 'right',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      min: 0,
      max: 100,
    },
  },
};

export default function BarChart({ selected = {}, compare = {} }) {
  const labels = [
    selected && selected.Company_Name ? selected.Company_Name : 'Vendor 1',
    compare && compare.Company_Name ? compare.Company_Name : 'Vendor 2',
  ];

  const sumOfRiskFactors =
    (selected && selected.Geographic_Risk ? 0.1 * selected.Geographic_Risk : 0) +
    (selected && selected.Inventory_Visibility ? 0.1 * (100 - selected.Inventory_Visibility) : 0) +
    (selected && selected.Dependency_Risk ? 0.3 * (100 - selected.Dependency_Risk) : 0) +
    (selected && selected.Supply_Chain_Incidents ? 0.2 * selected.Supply_Chain_Incidents : 0) +
    (selected && selected.Annual_Revenue ? 0.3 * selected.Annual_Revenue : 0);

  const sumOfRiskFactorsCompare =
    (compare && compare.Geographic_Risk ? 0.1 * compare.Geographic_Risk : 0) +
    (compare && compare.Inventory_Visibility ? 0.1 * (100 - compare.Inventory_Visibility) : 0) +
    (compare && compare.Dependency_Risk ? 0.3 * (100 - compare.Dependency_Risk) : 0) +
    (compare && compare.Supply_Chain_Incidents ? 0.2 * compare.Supply_Chain_Incidents : 0) +
    (compare && compare.Annual_Revenue ? 0.3 * compare.Annual_Revenue : 0);

  const calculateRisk = (SCI = 1, sum = sumOfRiskFactors) => {
    return ((0.2 * SCI) / sum) * 100;
  };

  const calculateRisk1 = (IV = 1, sum = sumOfRiskFactors) => {
    return ((0.1 * (100 - IV)) / sum) * 100;
  };

  const calculateRisk2 = (GR = 1, sum = sumOfRiskFactors) => {
    return ((0.1 * GR) / sum) * 100;
  };

  const calculateRisk3 = (DR = 1, sum = sumOfRiskFactors) => {
    return ((0.3 * (100 - DR)) / sum) * 100;
  };

  const calculateRisk4 = (RS = 1, sum = sumOfRiskFactors) => {
    return ((0.3 * RS) / sum) * 100;
  };

  const datasets = [
    {
      label: 'Dependency Risk',
      data: [
        selected && selected.Dependency_Risk
          ? calculateRisk3(selected.Dependency_Risk)
          : 0,
        compare && compare.Dependency_Risk
          ? calculateRisk3(compare.Dependency_Risk, sumOfRiskFactorsCompare)
          : 0,
      ],
      backgroundColor: 'rgb(173, 216, 155)',
    },
    {
      label: 'Inventory Visibility',
      data: [
        selected && selected.Inventory_Visibility
          ? calculateRisk1(selected.Inventory_Visibility)
          : 0,
        compare && compare.Inventory_Visibility
          ? calculateRisk1(compare.Inventory_Visibility, sumOfRiskFactorsCompare)
          : 0,
      ],
      backgroundColor: 'rgb(221, 160, 221)',
    },
    {
      label: 'Geographic Risk',
      data: [
        selected && selected.Geographic_Risk
          ? calculateRisk2(selected.Geographic_Risk)
          : 0,
        compare && compare.Geographic_Risk
          ? calculateRisk2(compare.Geographic_Risk, sumOfRiskFactorsCompare)
          : 0,
      ],
      backgroundColor: 'rgb(255, 191, 128)',
    },
    {
      label: 'Supply Chain Incidents',
      data: [
        selected && selected.Supply_Chain_Incidents
          ? calculateRisk(selected.Supply_Chain_Incidents)
          : 0,
        compare && compare.Supply_Chain_Incidents
          ? calculateRisk(compare.Supply_Chain_Incidents, sumOfRiskFactorsCompare)
          : 0,
      ],
      backgroundColor: 'rgb(128, 0, 128)',
    },
    {
      label: 'Annual Revenue',
      data: [
        selected && selected.Annual_Revenue
          ? calculateRisk4(selected.Annual_Revenue)
          : 0,
        compare && compare.Annual_Revenue
          ? calculateRisk4(compare.Annual_Revenue, sumOfRiskFactorsCompare)
          : 0,
      ],
      backgroundColor: 'rgb(64, 224, 208)',
    },
  ];

  datasets.sort((a, b) => b.data[0] - a.data[0]);

  const data = {
    labels,
    datasets,
  };

  useEffect(() => {
    // Add any logic here that should run when `selected` or `compare` changes
  }, [selected, compare]);

  return (
    <div className='flex justify-center  w-full h-64 '>
      <Bar options={options} data={data} />
    </div>
  );
}
