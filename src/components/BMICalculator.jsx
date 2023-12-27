import { useEffect, useState } from 'react';
import InputField from './InputField';
import './BMICalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('0');
  const [height, setHeight] = useState('0');
  const [validationErrors, setValidationErrors] = useState({});
  const [canShow, setCanShow] = useState(false);

  const validateInput = () => {
    const errors = {};
    const validWeight = parseFloat(weight);
    const validHeight = parseFloat(height);
    if (isNaN(validWeight) || validWeight < 1.0 || validWeight > 300.0) {
      errors.weight = "Valid weight value ranges from 1.0-300.0";
    }
    if (isNaN(validHeight) || validHeight < 0.1 || validHeight > 3.0) {
      errors.height = "Valid height value ranges from 0.1-3.0";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const calculateBMI = () => {
    const Weight = parseFloat(weight);
    const Height = parseFloat(height);
    return (Weight / (Height * Height)).toFixed(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      setCanShow(true);
    }
  };

  useEffect(() => {
    setCanShow(false);
  }, [weight, height]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="bmi-container">
        <h1 className="bmi-heading">BMI Calculator</h1>
        <div className="input-container">
          <InputField
            label="Weight(kg)"
            value={weight}
            onChange={setWeight}
            error={validationErrors.weight}
          />
          <InputField
            label="Height(m)"
            value={height}
            onChange={setHeight}
            error={validationErrors.height}
          />
        </div>
        <button className="calculate-button">Calculate BMI</button>
        {canShow && (
          <p data-testid="calculated-bmi" id="calculated-bmi" className="result-text">
            {`Your BMI is: ${calculateBMI()}`}
          </p>
        )}
      </form>
    </div>
  );
};

export default BMICalculator;