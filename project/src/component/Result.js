import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import 'chart.js/auto';
import '../css/result.css';

const Result = () => {
  const navigate = useNavigate();
  const Value = 20; // example value

  const data = {
    labels: ['Reported', 'Not Reported'],
    datasets: [
      {
        data: [Value, 100 - Value],
        backgroundColor: ['#3A5AFE', '#d9d9d9'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    rotation: -90,
    circumference: 180,
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <div className="link-container">
      <h2>Fraud Reported</h2>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
        <div className="chart-text">
          {Value}%
        </div>
        <button type="button" className="btn-home">
          Detail
        </button>
      </div>
      {/* <button type="button" className="home-button" onClick={handleHomeClick}>
        Home
      </button> */}
    </div>
  );
};

export default Result;
