import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
        <h1>Shubham </h1>
        <p>June-2023</p>
        <p>React, JavaScript, C++, Python, Git</p>
        <a href="../src/assets/Resume_Shubham.pdf" download>
            Download Resume
        </a>   
        <br/>
        <br/> 
        <Link to='/bmi'>BMI Calculator</Link>
    </div>
  )
}

export default LandingPage;