import React from 'react';
import logo from '../assets/images/logo.svg';

const Preview = ({status}) => {
	return (
		<div className="bg-white flex items-center justify-center h-screen flex-col">
			<img src={logo} alt="raven" className="h-64 w-64"/>
			<p className="text-6xl font-bold">raven wiki</p>
			<p className="text-2xl font-bold">{status}</p>
		</div>
	);
}

export default Preview;
