import React from 'react';
import './App.css';
import Preview from './components/Preview.js';

function App(){
  return (
		<div className="bg-white flex items-center justify-center h-screen w-screen flex-col">
			<Preview status={"in development"}/>
		</div>
  );
}

export default App;
