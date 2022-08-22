import React from 'react';
import logo from '../assets/images/logo.svg';

const Preview = ({status}) => {
	return (
		<div className="flex flex-col items-center">
			<img src={logo} alt="raven" className="h-64 w-64"/>
			<p className="text-6xl font-bold">raven wiki</p>
			<p className="text-3xl font-bold">{status}</p>
		</div>
	);
}

export default Preview;
