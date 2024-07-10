import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/form1');
  };

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to Home</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="home-button">Let's Test!</button>
      </form>
    </div>
  );
}

export default Home;
