import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form.css'; 
const Form1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    months_as_customer: '',
    policy_annual_premium: '',
    policy_csl: '',
    policy_deductable: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/form2'); 
  };

  return (
    <div className="form-container">
      <h2>Car Insurance Policy Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="months_as_customer">Months as Customer</label>
          <input
            type="text"
            id="months_as_customer"
            name="months_as_customer"
            value={formData.months_as_customer}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="policy_annual_premium">Policy Annual Premium</label>
          <input
            type="text"
            id="policy_annual_premium"
            name="policy_annual_premium"
            value={formData.policy_annual_premium}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="policy_csl">Policy CSL</label>
          <input
            type="text"
            id="policy_csl"
            name="policy_csl"
            value={formData.policy_csl}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="policy_deductable">Policy Deductable</label>
          <input
            type="text"
            id="policy_deductable"
            name="policy_deductable"
            value={formData.policy_deductable}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-submit">Next</button>
      </form>
    </div>
  );
}

export default Form1;
