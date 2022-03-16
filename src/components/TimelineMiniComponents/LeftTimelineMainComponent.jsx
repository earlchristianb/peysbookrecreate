/** @format */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as ShopIcon } from "../../assets/shop.svg";
import {
	faBookmark,
	faUsers,
	faUser,
	faVideoCamera,
	faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { MockGroupData } from "../mockdata/mockdata";

const LeftTimelineMainComponent = () => {
	return (
		<section className='sticky top-0 left-0 w-3/12 h-screen overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-gray-400 hidden lg:block '>
			<div className='flex flex-col items-start justify-center px-4 mt-4 space-y-2 text-gray-300 font-medium divide-y divide-gray-400 '>
				<LeftTimelineTopComponents />
				<LeftTimelineBottomComponents />
			</div>
		</section>
	);
};

const LeftTimelineTopComponents = () => {
	return (
		<div className='space-y-1 mt-4'>
			<section className='flex items-center space-x-2 cursor-pointer'>
				<div className='flex w-12 h-12 justify-start items-center '>
					<img
						className='h-10 w-10 rounded-full'
						src='https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/149634387_4147253648692889_8645341590660095983_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFhGM7Gm9gD1CokOi6oV6aSIWzTTil4_bIhbNNOKXj9svv98aaw4zrlybqui-WI5mPdyY6jb5f01XOhTfEp83lf&_nc_ohc=R2qRc6SqbjUAX93yKV0&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT-ycdy211JKuY_8rKOF2rK_v1izpSQd06fmVItAwDyDFQ&oe=625440EB'
						alt='user'
					/>
				</div>
				<p>Earl Bernardo</p>
			</section>
			<section className='flex items-center space-x-2 cursor-pointer'>
				<div className='flex w-12 h-12 justify-start items-center'>
					<FontAwesomeIcon icon={faUser} className='h-6 w-6 text-sky-500' />
				</div>
				<p>Friends</p>
			</section>
			<section className='flex items-center space-x-2 cursor-pointer'>
				<div className='flex w-12 h-12 justify-start items-center'>
					<FontAwesomeIcon
						icon={faBookmark}
						className='h-6 w-6 text-purple-700'
					/>
				</div>
				<p>Saved</p>
			</section>
			<section className='flex items-center space-x-2 cursor-pointer'>
				<div className='flex w-12 h-12 justify-start items-center'>
					<FontAwesomeIcon icon={faUsers} className='h-6 w-6 text-gray-300' />
				</div>

				<p>Groups</p>
			</section>
			<section className='flex items-center justify-start space-x-2 cursor-pointer'>
				<div className='flex w-12 h-12 justify-start items-center'>
					<ShopIcon className='h-6 w-6 ' fill='blue' />
				</div>

				<p>Marketplace</p>
			</section>
			<section className='flex items-center justify-start space-x-2 cursor-pointer '>
				<div className='flex w-12 h-12 justify-start items-center'>
					<FontAwesomeIcon
						className='h-6 w-6 text-blue-400'
						icon={faVideoCamera}
					/>
				</div>

				<div className='space-x-2 cursor-pointer'>
					<p>Watch</p>
					<ul>
						<li className='text-sm font-thin list-disc text-blue-600'>
							9 new videos
						</li>
					</ul>
				</div>
			</section>
			<section className='flex items-center justify-start space-x-2 cursor-pointer'>
				<div className='flex w-12 h-12 justify-center items-center'>
					<FontAwesomeIcon className='h-6 w-6' icon={faCircleChevronDown} />
				</div>

				<p>See More</p>
			</section>
		</div>
	);
};

const LeftTimelineBottomComponents = () => {
	return (
		<div className='space-y-2 mt-4'>
			<p className='text-left text-lg'>Your Shortcuts</p>
			{MockGroupData.map(({ groupName, id }) => (
				<section className='flex items-center ' id={id}>
					<div className='flex h-12 justify-start items-center space-x-2 cursor-pointer text-sm font-normal '>
						<div className='rounded-full h-8 w-8 flex justify-center bg-gray-500 items-center'>
							<p>{groupName[0]}</p>
						</div>
						<p>{groupName}</p>
					</div>
				</section>
			))}
			<section className='flex items-center justify-start space-x-2 cursor-pointer'>
				<div className='flex w-12 h-12 justify-center items-center'>
					<FontAwesomeIcon className='h-8 w-8' icon={faCircleChevronDown} />
				</div>

				<p>See More</p>
			</section>
		</div>
	);
};

export default LeftTimelineMainComponent;
