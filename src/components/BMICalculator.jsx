import { useState } from "react";
import './BMICalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('0');
  const [height, setHeight] = useState('0');
  const [bmi, setBMI] = useState();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const validWeight = parseFloat(weight);
        const validHeight = parseFloat(height);
        
        if (isNaN(validWeight) || isNaN(validHeight) || 
            validWeight < 1.0 || validWeight > 300.0 ||
             validHeight < 0.1 || validHeight > 3.0) {
            alert("Please enter valid weight and height values. \nValid weight value ranges from 1.0-300.0 \nValid height value ranges from 0.1-3.0");
            return;
        }
        const bmiResult = (validWeight / (validHeight*validHeight)).toFixed(1);
        setBMI(bmiResult);
    }

    return (
    <div>
        <form onSubmit={handleSubmit} className="bmi-container">
        <h1 className="bmi-heading">BMI Calculator</h1>
            <div className="input-container">
                <label className="input-label">Weight(kg): </label>
                <input className="input-field" type="number" value={weight} onChange={(e) => { setWeight(e.target.value) }} />
                <label className="input-label">Height(m): </label>
                <input className="input-field" type="number" value={height} onChange={(e) => { setHeight(e.target.value) }} />
            </div>
            <button className="calculate-button">Calculate BMI</button>
            {bmi && <p className="result-text">Your BMI is: {bmi} </p>}
        </form>
    </div>
  )
}

export default BMICalculator;