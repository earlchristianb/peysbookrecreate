/** @format */

import React from "react";

import TimelineMiddleComponents from "./TimelineMiniComponents/TimelineMiddleComponent";
import RightTimelineMainComponent from "./TimelineMiniComponents/LeftTimelineMainComponent";
import LeftTimelineMainComponent from "./TimelineMiniComponents/RightTimelineMainComponent";

const Timeline = () => {
	return (
		<div className='w-full flex bg-slate-900  relative pb-5 h-auto '>
			<RightTimelineMainComponent />
			<TimelineMiddleComponents />
			<LeftTimelineMainComponent />
		</div>
	);
};

export default Timeline;

