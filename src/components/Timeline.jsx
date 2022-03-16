/** @format */

import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimelineMiddleComponents from "./TimelineMiniComponents/TimelineMiddleComponent";
import RightTimelineMainComponent from "./TimelineMiniComponents/RightTimelineMainComponent";
// import { faBookmark, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
const Timeline = () => {
	return (
		<div className='w-full flex bg-slate-900 h-auto pb-5 '>
			<RightTimelineMainComponent />
			<TimelineMiddleComponents />
			<section className='sticky top-0 left-0 w-3/12 h-screen overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-gray-400 hidden lg:block '>
				{/* <div className='flex flex-col items-start justify-center px-4 mt-4 space-y-2 text-gray-300 font-medium divide-y divide-gray-400 w-full '>
					<div className='space-y-2 mt-4 w-full'>
						<section className='flex w-full justify-between'>
							<p>Contacts</p>
							<div>
								<FontAwesomeIcon icon={faVideoCamera} />
							</div>
						</section>
						<section className='flex items-center space-x-2'>
							<div className='flex w-12 h-12 justify-start items-center'>
								<FontAwesomeIcon
									icon={faBookmark}
									className='h-10 w-10 text-purple-700'
								/>
							</div>
							<p>Saved</p>
						</section>
					</div>
				</div> */}
			</section>
		</div>
	);
};

export default Timeline;
