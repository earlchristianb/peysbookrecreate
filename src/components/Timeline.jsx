/** @format */

import React from "react";
import { ReactComponent as VidCamIcon } from "../assets/vidcam.svg";
import { ReactComponent as PictureIcon } from "../assets/picture.svg";
import { ReactComponent as SmileyIcon } from "../assets/smiley.svg";

const Timeline = () => {
	return (
		<div className='w-full flex bg-slate-900 '>
			<div className='sticky w-3/12 h-screen hidden lg:block '></div>
			<div className='h-auto w-full md:w-3/5 lg:w-6/12 flex-col  mx-1 mt-2 space-y-3 '>
				{/* story */}
				<div className='w-full flex items-center space-x-2 overflow-scroll scrollbar-hide scroll-auto '>
					<CreateStory />
					{names.map((name, i) => (
						<FriendStory key={i} name={name} />
					))}
				</div>
				{/*What's on your mind*/}
				<PostForm />
			</div>
			<div className='sticky md:w-2/5 lg:w-3/12 h-screen   hidden md:block  '></div>
		</div>
	);
};

export default Timeline;

const names = [
	"Juan Dela Cruz",
	"Ankol Jerry",
	"Tita Tom",
	"Donald Pato",
	"Tanduay Jerry",
	"Loki highkey",
];

const CreateStory = () => {
	return (
		<section className='flex space-x-2 h-48 cursor-pointer hover:scale-95'>
			<div className='h-full w-32 rounded-xl bg-gray-200 relative'>
				<div className='absolute h-10 w-10 rounded-full border-gray-700 border-4 bottom-6 right-1/3 left-1/3 bg-slate-400  z-10'>
					<p className='text-white text-center text-xl items-center font-bold '>
						+
					</p>
				</div>
				<div className='bg-gray-700 absolute bottom-0 h-12 w-full rounded-b-xl text p-4'>
					<p className='text-slate-100 font-medium text-center'>Create Story</p>
				</div>
			</div>
		</section>
	);
};

const FriendStory = ({ name }) => {
	return (
		<section className='flex h-48 cursor-pointer hover:scale-95 '>
			<div className='h-full w-32 rounded-xl bg-gray-400 relative'>
				<div className='absolute h-10 w-10 rounded-full border-gray-700 border-4 top-4 left-4 bg-slate-400  z-10'></div>
				<div className=' absolute bottom-2 h-12 w-full rounded-b-xl text p-1 text-ellipsis'>
					<p className='text-white font-medium text-center'>{name}</p>
				</div>
			</div>
		</section>
	);
};

const PostForm = () => {
	return (
		<div className='w-full sm:px-4 md:px-20'>
			<div className=' flex flex-col divide-y-2 bg-slate-800 divide-slate-700 rounded-lg p-4 h-32 justify-center '>
				<div className='p-1 flex space-x-2'>
					<img
						src='https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/149634387_4147253648692889_8645341590660095983_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFhGM7Gm9gD1CokOi6oV6aSIWzTTil4_bIhbNNOKXj9svv98aaw4zrlybqui-WI5mPdyY6jb5f01XOhTfEp83lf&_nc_ohc=R2qRc6SqbjUAX93yKV0&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT-ycdy211JKuY_8rKOF2rK_v1izpSQd06fmVItAwDyDFQ&oe=625440EB'
						alt='user'
						className='h-10 w-10 rounded-full'
					/>
					<input
						type='search'
						className=' w-full outline-none rounded-2xl bg-transparent bg-slate-700'
					/>
				</div>
				<div className='h-full w-full py-1 px-6 flex space-x-2 items-center justify-evenly text-gray-300 text-xs md:text-sm  '>
					<div className='h-4 flex space-x-1'>
						<VidCamIcon fill='maroon' />
						<p>Live video</p>
					</div>
					<div className='h-4 flex space-x-1'>
						<PictureIcon fill='green' />
						<p>Photo/video</p>
					</div>
					<div className='h-4 flex space-x-1'>
						<SmileyIcon fill='yellow' />
						<p>Feeling/activity</p>
					</div>
				</div>
			</div>
		</div>
	);
};
