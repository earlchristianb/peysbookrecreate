/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TimelineMiddleComponents from "./TimelineMiniComponents/TimelineMiddleComponent";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
	return (
		<div className='w-full flex bg-slate-900 h-auto pb-5 '>
			<section className='sticky w-3/12 h-screen hidden lg:block '>
				<div className='flex flex-col items-start justify-center px-4 mt-4 space-y-2 text-gray-300'>
					<section className='flex items-center space-x-4'>
						<img
							className='h-10 w-10 rounded-full'
							src='https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/149634387_4147253648692889_8645341590660095983_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFhGM7Gm9gD1CokOi6oV6aSIWzTTil4_bIhbNNOKXj9svv98aaw4zrlybqui-WI5mPdyY6jb5f01XOhTfEp83lf&_nc_ohc=R2qRc6SqbjUAX93yKV0&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT-ycdy211JKuY_8rKOF2rK_v1izpSQd06fmVItAwDyDFQ&oe=625440EB'
							alt='user'
						/>
						<p>Earl Bernardo</p>
					</section>
					<section className='flex items-center space-x-4'>
						<FontAwesomeIcon
							icon={faUsers}
							className='h-10 w-10 text-sky-500'
						/>
						<p>Friends</p>
					</section>
				</div>
			</section>
			<TimelineMiddleComponents />
			<div className='sticky md:w-2/5 lg:w-3/12 h-screen hidden md:block'></div>
		</div>
	);
};

export default Timeline;

