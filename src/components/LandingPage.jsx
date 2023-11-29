import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
        <h1>Shubham </h1>
        <p>June-2023</p>
        <p>React, JavaScript, C++, Python, Git</p>
        <a href="/Resume.pdf" download>
            Download Resume
        </a>   
        <br/>
        <br/>
        <Link to='/bmi'>BMI Calculator</Link>
        <br/>
        <br/>
        <iframe src={'/Resume.pdf'} width='50%' height='1050px' />
    </div>
  )
}

export default LandingPage;