//COMPOSANT
import React from 'react' 

function App() {//Cette fonction est un composant
  // return (
  //    <div className="App">  {/* Ce n est pas du html mais du jsx, ici on ne mets pas class mais className pour du jsx*/}
  //     <h1>Hello</h1>
  //    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio at pariatur ab nulla, architecto quaerat ullam recusandae voluptates, autem accusantium sed laboriosam inventore magnam dicta, iste ad aliquam! Saepe, animi?</p>
  //   </div>
  // );

  //AUTRE FACON DE FAIRE LE CODE CI DESSUS MAIS CE N EST PAS DU JSX MAIS DU JS
  return React.createElement(
    'div',
    {className: 'App'},
    React.createElement('h1', null,
    'Hello')
  )
}

export default App;
