import React from "react"
import { NavLink } from "react-router-dom";

import "./success.css";

const Success = () => {
     return (
          <div className="success-page">
               <h1>Thank you for your purchase!</h1>
               <h3>We look forward to seeing you at the Indiana Bigfoot Conference!</h3>
               <NavLink className="back-btn" to="/#">Go back to home</NavLink>
          </div>
     )
}

export default Success;