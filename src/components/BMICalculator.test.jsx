import { render, fireEvent} from '@testing-library/react';
import BMICalculator from './BMICalculator';
import '@testing-library/jest-dom'

test('renders BMI Calculator', () => {
  const { getByText, getByLabelText } = render(<BMICalculator />);
  
  expect(getByText('BMI Calculator')).toBeInTheDocument();
  expect(getByLabelText('Weight(kg):')).toBeInTheDocument();
  expect(getByLabelText('Height(m):')).toBeInTheDocument();
  expect(getByText('Calculate BMI')).toBeInTheDocument();
});

test('calculates BMI correctly', () => {
  const { getByLabelText, getByText } = render(<BMICalculator />);

  fireEvent.change(getByLabelText('Weight(kg):'), { target: { value: '70' } });
  fireEvent.change(getByLabelText('Height(m):'), { target: { value: '1.8' } });

  fireEvent.click(getByText('Calculate BMI'));
  expect(getByText('Your BMI is: 21.6')).toBeInTheDocument();
});

test('handles invalid input and displays error messages', () => {
  const { getByLabelText, getByText } = render(<BMICalculator />);

  // Input invalid weight and height
  fireEvent.change(getByLabelText('Weight(kg):'), { target: { value: '0' } });
  fireEvent.change(getByLabelText('Height(m):'), { target: { value: '0' } });

  fireEvent.click(getByText('Calculate BMI'));

  // Check if error messages are displayed
  expect(getByText('Valid weight value ranges from 1.0-300.0')).toBeInTheDocument();
  expect(getByText('Valid height value ranges from 0.1-3.0')).toBeInTheDocument();
});