import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import styled from 'styled-components';
import { Home } from '@styled-icons/boxicons-solid';
import { PersonFill } from '@styled-icons/bootstrap';

const WhiteHome = styled(Home)`
	color:white;
	opacity: 0.25;
	&:hover {
		color: #26292c;
	}
`

const WhitePerson = styled(PersonFill)`
	color:white;
	opacity:0.25;
	&:hover {
		color: #26292c;
	}
`

const active = {
	opacity: 1 
}

const inactive = {
	opacity: 0.25
}

function App(){
	const [index, setIndex] = useState(0);
	const	[scroll, setScroll] = useState(false);

	const hideNav = () => {
		if (window.scrollY < 100){
			setScroll(false);
		} else {
			setScroll(true);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', hideNav);
		return () => {
			window.removeEventListener('scroll', hideNav);
		}
	}, []);

  return (
		<div className="bg-neutral-900 h-screen flex flex-col">
			<TopBar />
			
			{/* Tabs Content */}
			<div className="absolute flex items-center justify-center h-screen w-screen">
				<div hidden={index !== 0}>
					<HomePage />
				</div>
			</div>
			<div hidden={index !== 1}>
				<div>
					<AboutPage />
				</div>
			</div>

			{/* NavBar */}
			<div className="ease-in transition-opacity bottom-8 flex flex-row w-screen justify-center" style={(scroll) ? {position: "fixed", opacity: 0} : {position: "fixed", opacity: 1}}>
				<div className="bg-neutral-900 border-2 border-neutral-800 rounded-full w-auto px-4 py-3">
					<ul className="flex flex-row list-none font-white">
						<li className="w-7 mr-2 ml-1">
							<div onClick={() => setIndex(0)} style={(index === 0) ? active : inactive}>
								<WhiteHome />
							</div>
						</li>
						<li className="w-7 mr-1 ml-2">
							<div onClick={() => setIndex(1)} style={(index === 1) ? active : inactive}>
								<WhitePerson />	
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
  );
}

export default App;
