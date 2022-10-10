import React from "react";
import Nav from "./Nav";
import Filter from "./Filter"
import Hoglist from "./Hoglist"


import hogs from "../porkers_data";

function App() {

    const hogCard = hogs.map((hog) => {
		return (
 
		 <>
		 <h4>{hog.name}</h4>
		 <img src={hog.image} alt= "hog img">hog image</img>
		 </>
		)
	 })
	
	return (
		<div>
			<div className="App">
				<Nav />
			</div>
			<div>
				<Filter hogsGreased= {hogs.greased}/>
			</div>
			<div>
				<Hoglist hogs={hogCard}/>
			</div>
		</div>
	);
}

export default App;
