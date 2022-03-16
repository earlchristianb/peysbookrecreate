/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimelineMiddleComponents from "./TimelineMiniComponents/TimelineMiddleComponent";
import RightTimelineMainComponent from "./TimelineMiniComponents/RightTimelineMainComponent";

const Timeline = () => {
	return (
		<div className='w-full flex bg-slate-900 h-auto pb-5 '>
			<RightTimelineMainComponent />
			<TimelineMiddleComponents />
			<div className='sticky md:w-2/5 lg:w-3/12 h-screen hidden md:block'></div>
		</div>
	);
};

export default Timeline;
