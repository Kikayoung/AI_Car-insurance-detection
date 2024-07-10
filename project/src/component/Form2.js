import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form.css'; 

const Form2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/form3');
  };

  return (
    <div className="form-container">
      <h2>Form 2 Title</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="input1">Input 1 (1~12)</label>
          <select
            id="input1"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
            className="select-control"
          >
            <option value="">Select</option>
            {[...Array(12).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="input2">Input 2 (Text)</label>
          <input
            type="text"
            id="input2"
            name="input2"
            placeholder="Enter text..."
            value={formData.input2}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="input3">Input 3 (Gender)</label>
          <select
            id="input3"
            name="input3"
            value={formData.input3}
            onChange={handleChange}
            className="select-control"
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="unspecified">Unspecified</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Next</button>
      </form>
    </div>
  );
}

export default Form2;
