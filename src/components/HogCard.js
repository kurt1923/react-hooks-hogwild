import React, { useState } from "react";
import HogDetails from "./HogDetails";


function HogCard({ hog }) {

    const [showDetails, setShowDetails] = useState(false)
    const [isHidden, setIsHidden] = useState(false);

    function handleShowDetails() {
        setShowDetails((prevShowDetails) => !prevShowDetails)
    }

    const { image, name } = hog;

    if (isHidden) return null

    return (
        <div className="ui card eight wide column pigTile">
            <h1>{name}</h1>
            <div className="image">
                <img src={image} alt="hogPic" />
            </div>
            <div className="extra details">
                {showDetails ? <HogDetails hog={hog} /> : null}
                <button className="ui button" onClick={handleShowDetails}>
                    {showDetails ? "Less Info" : "More Info"}
                </button>
                <button className="ui button" onClick={() => setIsHidden(true)}>
                    Hide Me
                </button>
            </div>
        </div>
    )
}

export default HogCard