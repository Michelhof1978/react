//COMPOSANT
//Le state sont les données des composants
//Pas besoins d importer React 
import Item from './Item' ;
import { useState } from 'react';//On importe useState de la librairie react pour pourvoir stocker et utiliser  des données

function App() {//Cette fonction est un composant
  return (
     <div className="App">  {/* Ce n est pas du html mais du jsx, ici on ne mets pas class mais className pour du jsx*/}
      <h1>Hello</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio at pariatur ab nulla, architecto quaerat ullam recusandae voluptates, autem accusantium sed laboriosam inventore magnam dicta, iste ad aliquam! Saepe, animi?</p>
      <Item />  {/*On récupére le composant Item de Item.js */}
    </div>
  );

  //AUTRE FACON DE FAIRE LE CODE CI DESSUS MAIS BEAUCOUP MOINS COMPREHENSIBLE CE N EST PAS DU JSX MAIS DU JS
  // return React.createElement(
  //   'div',
  //   {className: 'App'},
  //   React.createElement('h1', null,
  //   'Hello')
  // )
}

export default App;
