import React from 'react';
import './App.css';
import TopBar from './components/TopBar.js';
import NavBar from './components/NavBar.js';

function App(){
  return (
		<div className="bg-neutral-900 h-screen flex flex-col">
			<TopBar />
			<div className="absolute flex items-center justify-center h-screen w-screen">
				<p className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white font-medium tracking-widest">COMING SOON</p>
			</div>
			<NavBar />
		</div>
  );
}

export default App;
