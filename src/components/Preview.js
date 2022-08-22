import React from 'react';
import logo from '../assets/images/logo.svg';

const Preview = ({status}) => {
	return (
		<div className="flex flex-col items-center">
			<img src={logo} alt="raven" className="lg:h-36 lg:w-36 md:h-36 md:w-36 h-24 w-24"/>
			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="hover:text-red-900">
				<p className="lg:text-3xl md:text-3xl text-2xl font-bold">
					raven wiki
				</p>
			</a>
			<p className="lg:text-lg md:text-lg text-sm font-bold">{status}</p>
		</div>
	);
}

export default Preview;
