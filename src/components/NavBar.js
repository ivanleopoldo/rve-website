import React from 'react';
import styled from 'styled-components';
import { Home } from '@styled-icons/boxicons-solid';
import { PersonFill } from '@styled-icons/bootstrap';

const WhiteHome = styled(Home)`
	color:white;
	&:hover {
		color: #26292c;
	}
`

const WhitePerson = styled(PersonFill)`
	color:white;
	&:hover {
		color: #26292c;
	}
`

const NavBar = () => {
	return (
		<div className="absolute lg:bottom-11 md:bottom-9 sm:bottom-7 bottom-5 flex flex-row w-screen justify-center">
			<div className="border-2 border-neutral-800 rounded-full w-auto px-4 py-3">
				<ul className="flex flex-row list-none font-white">
					<li className="w-7 mr-2 ml-1">
						<div>
							<WhiteHome />
						</div>
					</li>
					<li className="w-7 mr-1 ml-2">
						<div>
							<WhitePerson />	
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
