import React from 'react';
import './App.css';
import Preview from './components/Preview.js';

function App(){
  return (
		<div className="bg-white flex items-center justify-center h-screen flex-col">
			<Preview status={"coming soon..."}/>
		</div>
  );
}

export default App;
