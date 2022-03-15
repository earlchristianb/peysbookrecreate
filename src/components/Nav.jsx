/** @format */

import React, { useState } from "react";
import facebook_icon from "../assets/facebook_icon.png";
import search from "../assets/search.png";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as PeopleIcon } from "../assets/people.svg";
import { ReactComponent as GamingIcon } from "../assets/gaming.svg";
import { ReactComponent as ShopIcon } from "../assets/shop.svg";
import { ReactComponent as VideoIcon } from "../assets/video.svg";
import { ReactComponent as ArrowdownIcon } from "../assets/arrowdown.svg";
import { ReactComponent as NotifBellIcon } from "../assets/notifbell.svg";
import { ReactComponent as MessengerIcon } from "../assets/messenger.svg";
import { ReactComponent as MenuIcon } from "../assets/menu1.svg";

const Nav = () => {
	return (
		<div className='w-full bg-zinc-800 h-11 sticky'>
			<div className='py-2 px-8 md:px-4 flex items-center justify-between md:justify-evenly h-full relative'>
				<LeftNavSection />
				<MiddleNavSection />
				<RightNavSection />
			</div>
		</div>
	);
};

export default Nav;

const LeftNavSection = () => {
	const [iconState, setIconState] = useState(true);
	return (
		<div className='flex items-center justify-center space-x-2 w-1/5'>
			<img
				src={facebook_icon}
				alt='icon'
				className='h-8 w-8 rounded-full cursor-pointer '
			/>
			<div className='flex items-center h-full rounded-3xl bg-zinc-700 p-1 w-36'>
				<input
					type='search'
					className='bg-transparent focus:border-white focus:outline-none w-full'
					onFocus={() => {
						setIconState(false);
					}}
					onBlur={() => {
						setIconState(true);
					}}></input>
				<img
					onClick={(e) => {
						e.preventDefault();
					}}
					src={search}
					alt='search'
					className={`h-5 w-5 rounded-full
                            ${iconState ? "block" : "hidden"}
                            transition-transform duration-700`}></img>
			</div>
		</div>
	);
};

const MiddleNavSection = () => {
	return (
		<div className='hidden md:flex h-full w-3/5 relative justify-center items-center'>
			<div className=' flex justify-evenly space-x-4 items-center w-3/4'>
				<HomeIcon className='h-6 w-5 cursor-pointer ' fill='gray' />
				<VideoIcon className='h-6 w-5 cursor-pointer ' fill='gray' />
				<ShopIcon className='h-6 w-5 cursor-pointer' fill='gray' />
				<PeopleIcon className='h-6 w-5 cursor-pointer' fill='gray' />
				<GamingIcon className='h-6 w-5 cursor-pointer' fill='gray' />
			</div>
		</div>
	);
};

const RightNavSection = () => {
	return (
		<div className='flex items-center justify-center space-x-1 w-1/5'>
			<div className='hidden md:flex justify-center items-center space-x-1 mr-5'>
				<img
					src='https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/149634387_4147253648692889_8645341590660095983_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFhGM7Gm9gD1CokOi6oV6aSIWzTTil4_bIhbNNOKXj9svv98aaw4zrlybqui-WI5mPdyY6jb5f01XOhTfEp83lf&_nc_ohc=R2qRc6SqbjUAX93yKV0&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT-ycdy211JKuY_8rKOF2rK_v1izpSQd06fmVItAwDyDFQ&oe=625440EB'
					alt='prof pic'
					className='h-8 w-8 rounded-full p-1 cursor-pointer'
				/>
				<p className='text-slate-300 font-semibold text-xs'>Earl</p>
			</div>
			<div className='rounded-full bg-neutral-700 p-1 cursor-pointer'>
				<MenuIcon className='h-5 w-5 rounded-full' fill='whitesmoke' />
			</div>
			<div className='rounded-full bg-neutral-700 p-1 cursor-pointer'>
				<MessengerIcon className='h-5 w-5 rounded-full' fill='whitesmoke' />
			</div>
			<div className='rounded-full bg-neutral-700 p-1 cursor-pointer'>
				<NotifBellIcon className='h-5 w-5 rounded-full' fill='whitesmoke' />
			</div>
			<div className='rounded-full bg-neutral-700 p-1 cursor-pointer '>
				<ArrowdownIcon className='h-5 w-5 rounded-full' fill='whitesmoke' />
			</div>
		</div>
	);
};
