import React from "react";
import { NavLink } from "react-router-dom";

import "./success.css";

const Cancel = () => {
     return (
          <div className="cancel-page">
               <h1>Sorry to see you cancelled your payment!</h1>
               <h3>We hope to see you at the Indiana Bigfoot Conference</h3>
               <NavLink className="back-btn" to="/#">Go back to home</NavLink>
          </div>
     )
}

export default Cancel;