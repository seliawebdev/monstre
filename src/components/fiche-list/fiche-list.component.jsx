import React from 'react'   // notre composant importe la libriairie React

import { Fiche } from '../fiche/fiche.component'

import './fiche-list-styles.css'   // pour utiliser notte feuille de style css dans notre composant


export const FicheList = props => {    // et exporte une fonction qui reçoit des paramètres nommés props et retourne du JSX

  //console.log(props)

  return <div className='fiche-list'>
      {
          props.monstres.map(monstre => (

            <Fiche key={monstre.id} monstre={monstre}/>
    
          ))
      }
  </div>

}