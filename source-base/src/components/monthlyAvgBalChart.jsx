import React, { useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarController, Filler } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarController, Filler);

const MonthlyAverageBalanceChart = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const yearlyData = {
    2024: [37000, 32000, 26000, 39000, 34000],
    2023: [40000, 31000, 27000, 38000, 33000],
    2022: [35000, 30000, 28000, 37000, 32000],
  };
  
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Avg Balance (NPR)',
        data: yearlyData[selectedYear],
        backgroundColor: '#9E8DFF',
        border: '10px solid #9E8DFF',
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
      <h3>Monthly avg balance (NPR)</h3>
      <select style={{width: '75px', height: '35px', borderRadius: '10px'}} value={selectedYear} onChange={handleYearChange}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
      </div>
      <Chart type='bar' data={data} options={chartOptions} />
    </div>
  );
};

export default MonthlyAverageBalanceChart;
