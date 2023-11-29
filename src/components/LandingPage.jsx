import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
        <h1>Shubham </h1>
        <p>June-2023</p>
        <p>React, JavaScript, C++, Python, Git</p>
        <a href="/Ag7tDGud7W7iyQFk/Resume.pdf" download>
            Download Resume
        </a>   
        <br/>
        <br/>
        <Link to='/bmi'>BMI Calculator</Link>
        <br/>
        <br/>
        <iframe src={'/Ag7tDGud7W7iyQFk/Resume.pdf'} width='50%' height='1050px' />
    </div>
  )
}

export default LandingPage;
