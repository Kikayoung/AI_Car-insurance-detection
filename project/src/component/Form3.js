import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form.css'; 

const Form3 = () => {
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
    navigate('/form4');
  };

  return (
    <div className="form-container">
      <h2>Form 3 Title</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="input1">Input 1</label>
          <input
            type="text"
            id="input1"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="input2">Input 2</label>
          <input
            type="text"
            id="input2"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="input3">Input 3</label>
          <select
            id="input3"
            name="input3"
            value={formData.input3}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Next</button>
      </form>
    </div>
  );
}

export default Form3;
