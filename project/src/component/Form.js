import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form.css'; 

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    months_as_customer: '',
    policy_annual_premium: '',
    policy_csl: '',
    policy_deductable: '',
    incident_severity: '',
    vehicle_damage: '',
    insured_occuptation: '',
    witness: '',
    incident_state: '',
    insured_sex: '',
    collision_type: '',
    property_claim: '',
    number_of_vehicle_involved: '',
    total_claim_amount: '',
    authorities_contacted: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/result'); 
  };

  const handleCurrencyChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatCurrency(value);
    setFormData({ ...formData, [name]: formattedValue });
  };

  const formatCurrency = (value) => {
    const numberValue = value.replace(/[^0-9.]/g, '');
    const parts = numberValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  return (
    <div className="form-container">
      <h2>Car Insurance Policy Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="incident_severity">Incident Severity</label>
          <div className="form-check">
            <input
              type="radio"
              id="major_damage"
              name="incident_severity"
              value="Major Damage"
              checked={formData.incident_severity === "Major Damage"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="major_damage" className="form-check-label">Major Damage</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="minor_damage"
              name="incident_severity"
              value="Minor Damage"
              checked={formData.incident_severity === "Minor Damage"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="minor_damage" className="form-check-label">Minor Damage</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="total_loss"
              name="incident_severity"
              value="Total Loss"
              checked={formData.incident_severity === "Total Loss"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="total_loss" className="form-check-label">Total Loss</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="trivial_damage"
              name="incident_severity"
              value="Trivial Damage"
              checked={formData.incident_severity === "Trivial Damage"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="trivial_damage" className="form-check-label">Trivial Damage</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="policy_deductable">Policy Deductable</label>
          <input
            type="text"
            id="policy_deductable"
            name="policy_deductable"
            value={formData.policy_deductable}
            onChange={handleCurrencyChange}
            className="form-control"
            pattern="^\d{1,3}(,\d{3})*(\.\d{0,2})?$"
            placeholder="Only Number"
          />
        </div>

        {/* ?? */}
        <div className="form-group">
          <label htmlFor="vehicle_damage">Vehicle Damage</label>
          <input
            type="text"
            id="vehicle_damage"
            name="vehicle_damage"
            value={formData.vehicle_damage}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="insured_occuptation">Insured Occupation</label>
          <select
            id="insured_occuptation"
            name="insured_occuptation"
            value={formData.insured_occuptation}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Occupation</option>
            <option value="craft-repair">Craft Repair</option>
            <option value="machine-op-inspct">Machine Operation/Inspection</option>
            <option value="sales">Sales</option>
            <option value="armed-forces">Armed Forces</option>
            <option value="tech-support">Tech Support</option>
            <option value="prof-specialty">Professional Specialty</option>
            <option value="other-service">Other Service</option>
            <option value="priv-house-serv">Private Household Service</option>
            <option value="exec-managerial">Executive/Managerial</option>
            <option value="protective-serv">Protective Service</option>
            <option value="transport-moving">Transport/Moving</option>
            <option value="handlers-cleaners">Handlers/Cleaners</option>
            <option value="adm-clerical">Administrative/Clerical</option>
            <option value="farming-fishing">Farming/Fishing</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="witness">Witness</label>
          <input
            type="number"
            id="witness"
            name="witness"
            value={formData.witness}
            onChange={handleChange}
            className="form-control"
            min="0"
            max="3"
          />
        </div>


        <div className="form-group">
          <label htmlFor="incident_state">Incident State</label>
          <select
            id="incident_state"
            name="incident_state"
            value={formData.incident_state}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select State</option>
            <option value="SC">South Carolina (SC)</option>
            <option value="WV">West Virginia (WV)</option>
            <option value="NC">North Carolina (NC)</option>
            <option value="NY">New York (NY)</option>
            <option value="VA">Virginia (VA)</option>
            <option value="PA">Pennsylvania (PA)</option>
            <option value="OH">Ohio (OH)</option>
            <option value="CA">California (CA)</option>
            <option value="TX">Texas (TX)</option>
            <option value="FL">Florida (FL)</option>
            <option value="IL">Illinois (IL)</option>
            <option value="MI">Michigan (MI)</option>
            <option value="GA">Georgia (GA)</option>
            <option value="NJ">New Jersey (NJ)</option>
            <option value="WA">Washington (WA)</option>
            <option value="AZ">Arizona (AZ)</option>
            <option value="MA">Massachusetts (MA)</option>
            <option value="MD">Maryland (MD)</option>
            <option value="MN">Minnesota (MN)</option>
            <option value="CO">Colorado (CO)</option>
            <option value="OR">Oregon (OR)</option>
            <option value="NV">Nevada (NV)</option>
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="insured_sex">Insured Sex</label>  
          <div className="form-check">
            <input
              type="radio"
              id="female"
              name="insured_sex"
              value="FEMALE"
              checked={formData.insured_sex === "FEMALE"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="female" className="form-check-label">Female</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="male"
              name="insured_sex"
              value="MALE"
              checked={formData.insured_sex === "MALE"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="male" className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="unspecified"
              name="insured_sex"
              value="unspecified"
              checked={formData.insured_sex === "unspecified"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="unspecified" className="form-check-label">Unspecified</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="collision_type">Collision Type</label>
          <select
            id="collision_type"
            name="collision_type"
            value={formData.collision_type}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Collision Type</option>
            <option value="Single Vehicle Collision">Single Vehicle Collision</option>
            <option value="Multi Vehicle Collision">Multi Vehicle Collision</option>
            <option value="Vehicle Theft">Vehicle Theft</option>
            <option value="Parked Car">Parked Car</option>
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="property_claim">Property Claim</label>
          <input
            type="text"
            id="property_claim"
            name="property_claim"
            value={formData.property_claim}
            onChange={handleCurrencyChange}
            className="form-control"
            pattern="^\d{1,3}(,\d{3})*(\.\d{0,2})?$"
            placeholder="Only Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="number_of_vehicle_involved">Number of Vehicle Involved</label>
          <input
            type="number"
            id="number_of_vehicle_involved"
            name="number_of_vehicle_involved"
            value={formData.number_of_vehicle_involved}
            onChange={handleChange}
            className="form-control"
            min="1"
            max="10"
          />
        </div>


        <div className="form-group">
          <label htmlFor="total_claim_amount">Total Claim Amount</label>
          <input
            type="text"
            id="total_claim_amount"
            name="total_claim_amount"
            value={formData.total_claim_amount}
            onChange={handleCurrencyChange}
            className="form-control"
            pattern="^\d{1,3}(,\d{3})*(\.\d{0,2})?$"
            placeholder="Only Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="authorities_contacted">Authorities Contacted</label>
          <select
            id="authorities_contacted"
            name="authorities_contacted"
            value={formData.authorities_contacted}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Authorities</option>
            <option value="None">None</option>
            <option value="Police">Police</option>
            <option value="Ambulance">Ambulance</option>
            <option value="Fire">Fire</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">Show Result!</button>
      </form>
    </div>
  );
}

export default Form;
