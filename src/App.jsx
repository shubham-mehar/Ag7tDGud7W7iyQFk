import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BMICalculator from './components/BMICalculator';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/bmi' element={<BMICalculator/>} />
    </Routes>
  )
}

export default App;