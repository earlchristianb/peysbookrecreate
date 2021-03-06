/** @format */

import React from "react";
import { MockPostObject, Names } from "../mockdata/mockdata.js";
import { ReactComponent as VidCamIcon } from "../../assets/vidcam.svg";
import { ReactComponent as PictureIcon } from "../../assets/picture.svg";
import { ReactComponent as SmileyIcon } from "../../assets/smiley.svg";
import { ReactComponent as GlobeIcon } from "../../assets/globe.svg";
import { ReactComponent as LikeIcon } from "../../assets/like.svg";
import { ReactComponent as CommentIcon } from "../../assets/comment.svg";
import { ReactComponent as ShareIcon } from "../../assets/share.svg";
import { ReactComponent as AvatarIcon } from "../../assets/avatar.svg";

const TimelineMiddleComponents = () => {
	return (
		<div className=' w-full md:w-4/5 lg:w-6/12 flex-col  mx-1 mt-1 space-y-3 overflow-y-scroll scrollbar '>
			{/* story */}
			<StoryComponent />
			{/*What's on your mind*/}
			<PostForm />
			{/*Create Room*/}
			<CreateRoom />
			{/*POST COMPONENT*/}
			{MockPostObject.map(({ userImage, userName, time, body, tags }) => (
				<PostComponent
					name={userName}
					time={time}
					body={body}
					image={userImage}
					tags={tags}
				/>
			))}
		</div>
	);
};

export default TimelineMiddleComponents;

const StoryComponent = () => {
	return (
		<div className='w-full sm:px-4 md:px-8  '>
			<div className='flex items-center  space-x-2 overflow-scroll scrollbar-hide scroll-auto'>
				<CreateStory />
				{Names.map((name, i) => (
					<FriendStory key={i} name={name} />
				))}
			</div>
		</div>
	);
};

const CreateStory = () => {
	return (
		<section className='flex space-x-2 h-36 md:h-48 cursor-pointer hover:scale-95'>
			<div className='h-full w-24 md:w-32 rounded-xl bg-gray-400 relative'>
				<div className='absolute h-10 w-10 rounded-full border-gray-700 border-4 bottom-6 right-1/3 left-1/3 bg-sky-400  z-10'>
					<p className='text-white text-center text-xl items-center font-bold '>
						+
					</p>
				</div>
				<div className='bg-gray-700 absolute bottom-0 h-12 w-full rounded-b-xl text-xs md:text-sm p-4'>
					<p className='text-slate-100 font-medium text-center'>Create Story</p>
				</div>
			</div>
		</section>
	);
};

const FriendStory = ({ name }) => {
	return (
		<section className='flex h-36 md:h-48 cursor-pointer hover:scale-95 '>
			<div className='h-full w-24 md:w-32 rounded-xl bg-gray-400 relative'>
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
		<div className='w-full sm:px-4 md:px-8'>
			<div className=' flex flex-col divide-y-2 bg-slate-800 divide-slate-700 rounded-lg p-4 h-28 justify-center '>
				<div className='p-1 flex space-x-2'>
					<img
						src='https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/149634387_4147253648692889_8645341590660095983_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFhGM7Gm9gD1CokOi6oV6aSIWzTTil4_bIhbNNOKXj9svv98aaw4zrlybqui-WI5mPdyY6jb5f01XOhTfEp83lf&_nc_ohc=R2qRc6SqbjUAX93yKV0&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT-ycdy211JKuY_8rKOF2rK_v1izpSQd06fmVItAwDyDFQ&oe=625440EB'
						alt='user'
						className='h-10 w-10 rounded-full'
					/>
					<input
						type='search'
						className=' w-full outline-none rounded-2xl bg-transparent bg-slate-700 px-3 placeholder-gray-300'
						placeholder="What's on your mind Earl?"
					/>
				</div>
				<div className='h-full w-full py-1 px-2 flex space-x-2 items-center justify-evenly text-gray-300 text-xs md:text-sm  '>
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

const CreateRoom = () => {
	return (
		<section className='w-full sm:px-4 md:px-8 '>
			<div className='p-4 bg-slate-800 rounded-md text-gray-300 flex justify-start items-center space-x-2  w-full'>
				<div className='px-2 py-1  flex justify-evenly items-center text-xs md:text-sm font-medium space-x-2 rounded-2xl  text-center border-blue-400 border'>
					<div className='w-32 flex space-x-2'>
						<VidCamIcon fill='blue' />
						<p>Create a room</p>
					</div>
				</div>
				<div className='flex space-x-3 w-auto overflow-x-scroll scrollbar-hide'>
					{Names.map((name, i) => (
						<div
							key={i}
							className='h-8 w-8 p-4 rounded-full flex justify-center items-center bg-slate-600 '>
							{name[0]}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

//MINI COMPONENTS FOR POST STARTING FROM TOP TO BOTTOM

//Name COmponent
const PostNameComponent = ({ name, time, image }) => {
	return (
		<article className='flex items-center justify-between  w-full p-2 space-x-2'>
			<div className='flex space-x-2'>
				<img
					alt='Poster'
					src={image}
					className='h-8 w-8 rounded-full cursor-pointer'
				/>
				<div className=' flex-col justify-center'>
					<div className='text-xs font-medium hover:underline hover:cursor-pointer'>
						{name}
					</div>
					<div className='flex justify-start space-x-1 items-center'>
						<p className='text-xs font-light'>{time} ago</p>
						<GlobeIcon
							fill='whitesmoke'
							className='h-3 w-3 place-self-end  hover:animate-spin'
						/>
					</div>
				</div>
			</div>
			<svg
				class='w-6 h-6 cursor-pointer'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
					d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'></path>
			</svg>
		</article>
	);
};

//POST BODY

const PostBody = ({ postbody, tags }) => {
	return (
		<article className='p-2 text-left text-xs w-full'>
			<div>{postbody}</div>
			<div className='flex space-x-2'>
				{tags.map((tag, i) => (
					<p className='text-blue-400 hover:underline cursor-pointer' key={i}>
						#{tag}
					</p>
				))}
			</div>
		</article>
	);
};

//Post Actions //lower Part of Post

const PostActions = () => {
	return (
		<section className=' flex flex-col divide-y divide-gray-600'>
			<div className='flex items-center p-2 w-full text-sm justify-between px-4 md:px-12'>
				<div className='flex items-center space-x-2 cursor-pointer'>
					<LikeIcon className='h-4 w-4 ' fill='whitesmoke' />
					<p>Like</p>
				</div>
				<div className='flex items-center space-x-2 cursor-pointer'>
					<CommentIcon className='h-4 w-4 ' fill='whitesmoke' />
					<p>Comment</p>
				</div>
				<div className='flex items-center space-x-2 cursor-pointer'>
					<ShareIcon className='h-4 w-4 ' fill='whitesmoke' />
					<p>Share</p>
				</div>
			</div>
			<div className='flex justify-start items-center p-2 w-full space-x-2'>
				<img
					className='h-8 w-8 rounded-full'
					src='https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/149634387_4147253648692889_8645341590660095983_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFhGM7Gm9gD1CokOi6oV6aSIWzTTil4_bIhbNNOKXj9svv98aaw4zrlybqui-WI5mPdyY6jb5f01XOhTfEp83lf&_nc_ohc=R2qRc6SqbjUAX93yKV0&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT-ycdy211JKuY_8rKOF2rK_v1izpSQd06fmVItAwDyDFQ&oe=625440EB'
					alt='user'
				/>
				<div className='rounded-2xl bg-slate-600 w-full flex items-center justify-between px-2'>
					<input
						className='w-full placeholder-gray-200 bg-transparent px-2 py-1 text-sm outline-none'
						type='search'
						placeholder='Write a comment'
					/>
					<div className='flex space-x-2'>
						<AvatarIcon className='h-4 w-4 cursor-pointer' fill='whitesmoke' />
						<PictureIcon className='h-4 w-4 cursor-pointer' fill='whitesmoke' />
						<SmileyIcon className='h-4 w-4 cursor-pointer' fill='whitesmoke' />
					</div>
				</div>
			</div>
		</section>
	);
};

const PostComponent = ({ name, time, body, image, tags }) => {
	return (
		<section className='w-full sm:px-4 md:px-8 text-gray-300 '>
			<div className='flex flex-col w-full px-4 bg-slate-800 rounded-md'>
				{/*Top part of Post component*/}
				<PostNameComponent name={name} time={time} image={image} />
				<div className='divide-y divide-gray-600'>
					<PostBody postbody={body} tags={tags} />
					<PostActions />
				</div>
			</div>
		</section>
	);
};
