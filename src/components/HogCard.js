import React from "react";
//import HogDetails from "./HogDetails";

function HogCard({hog}){
console.log(hog)

const { image } = hog;
 return (
  
      <div className="image">
        <img src={image} alt="hogPic" />
      </div>
 )
}

export default HogCard