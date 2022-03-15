/** @format */

import "./App.css";
import Nav from "./components/Nav";
import Timeline from "./components/Timeline";

function App() {
	return (
		<div className='h-screen overflow-y-scroll'>
			<Nav />
			<Timeline />
		</div>
	);
}

export default App;
