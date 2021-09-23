import React from "react";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import "./homeComponent.css";

const HomeComponent = () => {
  return (
    <div className="homeComponent">
      <div className="homeComponent__title">
        Welcome to Effectus SpreadSheet
      </div>
      <Link className="homeComponent__button" to="/spreadSheet">
        <AwesomeButton type="primary"> Get Started</AwesomeButton>
      </Link>
    </div>
  );
};

export default HomeComponent;
