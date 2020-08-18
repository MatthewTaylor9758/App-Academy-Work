import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

(async () => {
  const res = await fetch('https://polar-beach-08187.herokuapp.com/api/pets/2');
  if (res.ok) {
    const pet = await res.json();
    console.log(pet);

    ReactDOM.render(
      <React.StrictMode>
        <App pet={pet} /> {/* Now, with data */}
      </React.StrictMode>,
      document.getElementById('root')
    )
  }
})();
