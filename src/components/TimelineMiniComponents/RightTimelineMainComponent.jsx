/** @format */

import React from "react";
import {
	faEllipsis,
	faMagnifyingGlass,
	faPlusCircle,
	faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { MockGroupConvoNames, Names } from "../mockdata/mockdata.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RightTimelineMainComponent = () => {
	return (
		<section className='sticky top-0 right-0 md:w-1/5 lg:w-3/12 h-screen overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-gray-400 hidden md:block'>
			<div className='flex flex-col items-start justify-center px-4 mt-4 space-y-2 text-gray-300 font-medium divide-y divide-gray-400  '>
				<RightTimelineContactComponent />
				<RightTimelineGroupConversationComponent />
			</div>
		</section>
	);
};

export default RightTimelineMainComponent;

const RightTimelineContactComponent = () => {
	return (
		<div className='space-y-3 mt-4 w-full'>
			<section className='flex w-full justify-between'>
				<p>Contacts</p>
				<div className='px-3 space-x-4'>
					<FontAwesomeIcon icon={faVideoCamera} className='cursor-pointer' />
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className='cursor-pointer'
					/>
					<FontAwesomeIcon icon={faEllipsis} className='cursor-pointer' />
				</div>
			</section>
			{Names.map((name, i) => (
				<section
					key={i}
					className='flex items-center space-x-2 text-sm font-normal'>
					<div className='flex w-8 h-8 justify-center items-center rounded-full bg-gray-500 '>
						<p>{name[0]}</p>
					</div>
					<p>{name}</p>
				</section>
			))}
		</div>
	);
};

const RightTimelineGroupConversationComponent = () => {
	return (
		<div className='space-y-3 mt-4 w-3/4'>
			<p>Group Conversations</p>
			{MockGroupConvoNames.map((convoNames, i) => (
				<div key={i} className='flex space-x-2 text-sm font-normal'>
					<div className='flex justify-center items-center rounded-full w-8 h-8 bg-gray-500'>
						{convoNames[0]}
					</div>
					<p>{convoNames}</p>
				</div>
			))}
			<div className='flex space-x-2'>
				<FontAwesomeIcon icon={faPlusCircle} className='h-8 w-8 rounded-full' />
				<p>Create New Group</p>
			</div>
		</div>
	);
};
