import React from "react";
import "./style.css";

function Header() {
  return (
    <header>
      <div className="navbar">
        <img src="./images/logo.svg" alt="logo" />
        <button className="btn">Try it Free</button>
      </div>
      <div className="community--wrapper">
        <div className="text--wrapper">
          <h1 className="heading">Build the Community Your Fans Will Love</h1>
          <p className="desc">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="start">Get Started for Free</button>
        </div>
        <div className="img--wrapper">
          <img src="./images/illustration-mockups.svg" alt="mockup" />
        </div>
      </div>
    </header>
  );
}

export default Header;
