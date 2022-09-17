import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingPage.css";
import landingPageImage from "../../assets/images/landingPageImage.png";

const LandingPage = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/posts");
  };
  return (
    <>
      <div className="landing-page">
        <div className="landing-page-image">
          <img src={landingPageImage} alt="landing page image" />
        </div>
        <div className="landing-page-text">
          <div className="text">10x Team 04</div>
          <div className="button">
            <button onClick={handleClick}>Enter</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
