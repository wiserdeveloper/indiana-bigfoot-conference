import React from "react";

import './lodging.css'

const ItemList = ({ items }) => {
     return (
       <div>
         {items.map((item, index) => (
           <div className="lodging-list" key={index}>
             <h3>{item.name}</h3>
             <img src={item.picture} alt={item.name} />
             <p>{item.description}</p>
             <a href={item.address}>{item.address}</a>
           </div>
         ))}
       </div>
     );
   };

export default ItemList;