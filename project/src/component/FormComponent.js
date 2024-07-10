import React from 'react';

const FormComponent = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObject = Object.fromEntries(formData.entries());
        onSubmit(formDataObject);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="months_as_customer">Months as Customer:</label>
                <input type="number" id="months_as_customer" name="months_as_customer" required />
            </div>
            <div className="form-group">
                <label htmlFor="policy_annual_premium">Policy Annual Premium:</label>
                <input type="number" id="policy_annual_premium" name="policy_annual_premium" required />
            </div>
            <div className="form-group">
                <label htmlFor="policy_csl">Policy CSL:</label>
                <input type="text" id="policy_csl" name="policy_csl" required />
            </div>
            <div className="form-group">
                <label htmlFor="policy_deductable">Policy Deductable:</label>
                <input type="number" id="policy_deductable" name="policy_deductable" required />
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default FormComponent;
