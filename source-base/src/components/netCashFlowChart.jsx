import React, { useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, PointElement, LineController, Filler } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, LineController, Filler);


export default function NetCashFlowChart() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const yearlyData1 = {
    2024: [15000, 20000, 25000, 30000, 28000, 32000, 27000, 35000, 30000, 38000, 40000],
    2023: [15000, 20000, 25000, 30000, 28000, 32000, 27000, 35000, 30000, 38000, 40000],
    2022: [15000, 20000, 25000, 30000, 28000, 32000, 27000, 35000, 30000, 38000, 40000],
  };
  const yearlyData2 = {
    2024: [10000, 12000, 15000, 18000, 16000, 19000, 17000, 20000, 18000, 22000, 25000],
    2023: [10000, 12000, 15000, 18000, 16000, 19000, 17000, 20000, 18000, 22000, 25000],
    2022: [10000, 12000, 15000, 18000, 16000, 19000, 17000, 20000, 18000, 22000, 25000],
  };
  const data = {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Net Cash Flow',
        data: yearlyData1[selectedYear],
        borderColor: '#4F46E5',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#4F46E5', 
        pointBorderColor: '#4F46E5',
        pointRadius: 5, 
      },
      {
        label: 'Net Biz Cash Flow',
        data: yearlyData2[selectedYear],
        borderColor: '#FF4000',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#FF4000', 
      pointBorderColor: '#FF4000',
      pointRadius: 5, 
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}k`,
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true, 
          pointStyle: 'circle', 
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y}k`,
        },
      },
    },
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  return (
    <div className='col-12 p-2 m-2'> 
    <div className='d-flex justify-content-between'>
      <h3>Net Cash flow</h3>
      <select style={{width: '75px', height: '35px', borderRadius: '10px'}} value={selectedYear} onChange={handleYearChange}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
      </div>
      <Chart type="line" data={data} options={options} height={'80px'} />
    </div>
  );
}