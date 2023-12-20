import './BMICalculator.css';

const InputField = ({label, value, onChange,error}) => {
  return (
    <div> 
        <label >{label}:</label>
        <input className="input-field" 
            type='number' value={value}  
            onChange={(e)=>{ onChange(e.target.value);}}
        />
        {error && <span className='error-message'>{error}</span>}
    </div>
  )
}

export default InputField;