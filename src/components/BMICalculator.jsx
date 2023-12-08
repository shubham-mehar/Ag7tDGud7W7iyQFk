import { useState } from "react";
import './BMICalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('0');
  const [height, setHeight] = useState('0');
  const [validationErrors, setValidationErrors] = useState({});
  let calculatedBMI = null; 
  
  const validateInput = () => {
    const errors = {};
    const validWeight = parseFloat(weight);
    const validHeight = parseFloat(height);
    if(isNaN(validWeight) || validWeight < 1.0 || validWeight > 300.0){
      errors.weight = "Valid weight value ranges from 1.0-300.0";
    }
    if(isNaN(validHeight) || validHeight < 0.1 || validHeight > 3.0){
      errors.height = "Valid height value ranges from 0.1-3.0";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const calculateBMI = () => {
    const validWeight = parseFloat(weight);
    const validHeight = parseFloat(height);
    if(validateInput()){
      calculatedBMI = (validWeight / (validHeight * validHeight)).toFixed(1);
    } else{
      calculatedBMI = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
    if (calculatedBMI !== null) {
      const resultElement = document.getElementById("calculated-bmi");
      resultElement.innerText = `Your BMI is: ${calculatedBMI}`;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bmi-container">
        <h1 className="bmi-heading">BMI Calculator</h1>
        <div className="input-container">
        <label className="input-label">Weight(kg): </label>
        <input className="input-field" type="number" value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              setValidationErrors((errors) => ({ ...errors, weight: '' }));
            }}/>
        {validationErrors.weight && (
          <span className="error-message">{validationErrors.weight}</span>
        )}
        <label className="input-label">Height(m): </label>
        <input className="input-field" type="number" value={height}
            onChange={(e) => { 
              setHeight(e.target.value);
              setValidationErrors((errors) => ({ ...errors, height: '' }));
          }}/>
          {validationErrors.height && (
            <span className="error-message">{validationErrors.height}</span>
        )}
        </div>
        <button className="calculate-button">Calculate BMI</button>
        <p id="calculated-bmi" className="result-text"></p>
      </form>
    </div>
  );
};

export default BMICalculator;