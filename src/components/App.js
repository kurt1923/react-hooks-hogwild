import React from "react";
import Nav from "./Nav";
import Filter from "./Filter"
import HogList from "./Hoglist"


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
				<Filter hogsGreased= {hogs}/>
			</div>
			<div>
				<HogList hogs={hogs}/>
			</div>
		</div>
	);
}

export default App;
