import './HomePage.css';
import { Link } from "react-router-dom";
import backGroundImg from "./media/Rectangle2.png"

function HomePage() {
  
  return (
    <div className="HomePage">
      <div className="HomeImgBox">
        <img src={backGroundImg} alt=""/>
      </div>
      <div className="info-box">
        <div className="home-text-box">
        <div className='big-text-info'>
          <p>Build a self care routine suitable for you</p>
        </div>
        <div className='little-text-info'>
          <p>Take out test to get a personalised self care routine based on your needs.</p>
        </div>
        </div>
        <Link to={'/quiz'}><button className='home-start-btn'><p>Start the quiz</p></button></Link> 
      </div>
  </div>
  );
}

export default HomePage;