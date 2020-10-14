import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(          // librairie reactDom Qui appelle la méthode render() qui va rendre la fonction App et remplace l'élément root de la page index.html qui se trouve dans le dossier public
                          // Tout le projet sera inséré dans cette <div id="root"> de la page.
                          
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
