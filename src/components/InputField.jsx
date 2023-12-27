import './BMICalculator.css';

const InputField = ({label, value, onChange,error}) => {
  const inputId = label.toLowerCase();

  return (
    <div> 
        <label  htmlFor={inputId}>{label}:</label>
        <input className="input-field" 
                id={inputId}
            type='number' value={value}  
            onChange={(e)=>{ onChange(e.target.value);}}
        />
        {error && <span className='error-message'>{error}</span>}
    </div>
  )
}

export default InputField;