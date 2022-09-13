import React from 'react';
import Logo from '../assets/images/dark_logo.svg';

const TopBar = () => {
	return (
		<div className="sticky w-screen top-0 bg-neutral-900 border-b-2 border-neutral-800 rounded-b-3xl">
			<div className="lg:w-36 md:w-28 sm:w-24 w-16 m-2">
				<img src={Logo} alt="Logo" />
			</div>
		</div>
	);
}

export default TopBar;
