//COMPOSANT
//Le state sont les données des composants
//Pas besoins d importer React seul, on import uniquement les méthode utilisés comme useSatte par exemple
import Item from './Item' 
import {useState} from 'react'//On importe useState de la librairie react pour pourvoir stocker et utiliser  des données

function App() {//Cette fonction est un composant
  
  // console.log(useState());

  const [monState, setMonState] = useState(10);//On appelle cela du destructuring, ici on crée une constante entre crochets à partir de ce que retourne useState en tableau monState à l index 0 et setMonState à l'index 1
    console.log(setMonState);//Si on mets entre la parenthèses monState, il retournera 10 mais si on mets setMonState, il retournera une fonction

    return (
     <div className="App">  {/* Ce n est pas du html mais du jsx, ici on ne mets pas class mais className pour du jsx*/}
      <h1>Hello</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio at pariatur ab nulla, architecto quaerat ullam recusandae voluptates, autem accusantium sed laboriosam inventore magnam dicta, iste ad aliquam! Saepe, animi?</p>
      <Item />  {/*On récupére le composant Item de Item.js */}

      {monState} {/*on affiche les données */}
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
