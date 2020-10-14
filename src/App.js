import React, { Component} from 'react';      // moteur de gestion
//import logo from './logo.svg';    // image vectorielle du logo
import {FicheList} from './components/fiche-list/fiche-list.component.jsx'; // pour tester notre nouveau composant FicheList

import { ZoneRecherche } from "./components/zoneRecherche/zone-recherche.component.jsx" ;

import './App.css';               // pour la mise en forme CSS

/*function App() {           // fonction qui retourne un bloc HTML
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
class App extends Component{   // importation de la Clase Componend
  constructor() {

    super()



    this.state = {              // objet state
      monstres: [ ],            // dans un array  ici on initialise l'array monstres à vide
      champsRecherche: ''          
/*
        {

          nom: 'Frankenstein',
          id: 'm1'                // ajout d'un id pour clé unique

        },

        {

          nom: 'Dracula',
          id: 'm2'

        },

        {

          nom: 'Zombie',
          id: 'm3'

        }

      ]*/
      

    }
    //this.gererChangement = this.gererChangement.bind(this)

  }

  componentDidMount() {   // méthode de cycle ou nous allons pouvoir attendre la réponse du serveur avec la fonction JavaScript fetch()

    fetch('https://jsonplaceholder.typicode.com/users')

      .then(response => response.json())
      .then(users => this.setState({ monstres: users}))
  
  }

  gererChangement = (e) => {

    this.setState({ champsRecherche: e.target.value })

}


  // AFFICHAGE à L'ECRAN:
  render() {     // méthode qui retourne le code HTML => met à jour le dom viruel automatiquement
    
    const { monstres, champsRecherche } = this.state  // création d' une copie du tableau et variable dans la méthode render() :
      const monstresFiltre = monstres.filter(monstre => 

    monstre.name.toLowerCase().includes(champsRecherche.toLowerCase())

    )
    return (

      <div className="App">
        <h1> Monstres carroussel </h1>
        <ZoneRecherche

          placeholder="Cherche monstres"

            gererChangement = {this.gererChangement}

          />
        <FicheList monstres={monstresFiltre}/>
        </div>/*{


          this.state.monstres.map(monstre => (   // map() qui retourne le nom du monstres en titre niveau 1 et cela pour tout les éléments de l'array state.monstres

            <h1 key={ monstre.id }> {monstre.name }</h1>  // React doit savoir identifier tous les éléments du DOM afin de pouvoir gérer les modifications individuel.
                                              // Maintenant il est possible de changer une valeur, et seul, celle-ci sera rendue dans le DOM.
          ))  

          }
          </FicheList>

      </div>*/

    )
      
  }
  

  }

  


export default App;


  
