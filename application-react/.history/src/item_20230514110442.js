import {useState} from 'react'

//Creation d un composant pour soit affichage, faire un calcul, appel à des APIS ou de la logique ..., lors de la création du fichier, on mets une majuscule au debut du nom de fichier par convention
function Item(props){//On crée un composant avec la propriété props et cela va nous retourner un objet avec des propriétés qui lui sera donné par l élément parent qui est App.js ds ce cas là
    
    const [itemState, setItemState] = useState('Item State !!!!!!!!!')
    
    //console.log(props);//Indiquer props ds les paramètre, c'est mieux
    
    return (//Quand on retour du jsx, il faut le retourner en bloc important!!!
    <div> 
        {/* On met une div qu on appelle un bloc lorsqu il y a plusieurs lignes de codes */}

    <h1>{props.txt}</h1> 
    <h1>{props.number}</h1>
    {/*On veut que les Item props.txt affiché ds l élément parent App.js soient en H1
    /Pas besoins de mettre des paranthèses pour return quand il y a qu'un seul élément */}
     {/* // return <h2>{props.number}</h2> */}
   
     {/* <button onClick={props.func}>Change state</button>  */}
     <button onClick={() => props.func(itemState)}>Change state</button>{/* //Ici, on a réussi à remonter le state à l élément enfant à l'élément parent.
     {/* On ajoute un événement au bouton, par contre en jsx, on rajoute on suivi de la majuscule, entre les accolades, on attents une fonction ici modifyState */}
    
    </div>
)}

export default Item; //Toujours exporter le composant et on va par la suite l importer ds App.js, pas besoin de mettre le .js, react détecte automatiquement