import React, { useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarController, Filler } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarController, Filler);

const DepositsAndWithdrawalsChart = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const yearlyData1 = {
    2024: [28000, 22000, 28000, 24000, 23000],
    2023: [26000, 20000, 26000, 25000, 20000],
    2022: [24000, 24000, 24000, 26000, 22000],
  };
  const yearlyData2 = {
    2024: [25000, 18000, 32000, 19000, 17000], 
    2023: [26000, 18000, 34000, 16000, 15000],
    2022: [24000, 16000, 30000, 14000, 12000],
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Deposits (NPR)',
        data: yearlyData1[selectedYear],
        backgroundColor: '#9E8DFF',
        border: '10px solid #9E8DFF',
        borderWidth: 0,
        borderRadius: 5,
        barThickness: 10, 
        maxBarThickness: 10, 
      },
      {
        label: 'Withdrawals (NPR)',
        data: yearlyData2[selectedYear],
        backgroundColor: '#CF6FFB', 
        border: '10px solid #CF6FFB',
        borderWidth: 0,
        borderRadius: 5, 
        barThickness: 10, 
        maxBarThickness: 10, 
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
      x: {
        type: 'category', 
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
  };

  return (
    <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
      <div className='d-flex justify-content-between'>        
      <div className='d-flex'>        
        <div className='d-flex align-items-center mx-2'>
          <span style={{ width: '10px', height: '10px', backgroundColor: '#9E8DFF', borderRadius: '50%', marginRight: '5px' }}>
            </span> Deposits &
        </div>
        <div className='d-flex align-items-center mx-2'>
          <span style={{ width: '10px', height: '10px', backgroundColor: '#CF6FFB', borderRadius: '50%', marginRight: '5px' }}>
            </span> Withdrawals (NPR)
        </div>
      </div>
      <div className=''>        
      <select style={{width: '75px', height: '35px', borderRadius: '10px'}}  value={selectedYear} onChange={handleYearChange}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
      </div>
      </div>
      <Chart type='bar' data={data} options={chartOptions} />
    </div>
  );
};

export default DepositsAndWithdrawalsChart;