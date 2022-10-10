import React from "react";
import HogCard from "./HogCard "

function Hoglist({ hogs }) {
    return (
          <div className="ui three stackable cards">
              {hogs.map(hog => (
                  <HogCard
                      key={hog.name}
                      hog={hog}
                  />
              ))}
          </div>
    );
  }

export default Hoglist