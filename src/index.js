import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// First Component 
const App = () => {

	return (
		<div>
		<h1>Hello Maaz Munir</h1>
		<p> I am an Informatics Student </p>
		</div>


		)
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
