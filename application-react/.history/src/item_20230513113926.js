//Creation d un composant pour soit affichage, faire un calcul ou de la logique ..., lors de la création du fichier, on mets une majuscule au debut du nom de fichier par convention
function Item(props){//On crée un composant avec la propriété props et cela va nous retourner un objet avec des propriétés avec l élément parent qui est App.js
    console.log(props);//Indiquer props ds les paramètre, c'est mieux
    
    return (//Quand on retour du jsx, il faut le retourner en bloc important!!!
    <div> 
        {/* On met une div qu on appelle un bloc lorsqu il y a plusieurs instructions */}

    <h1>{props.txt}</h1> {/*//Pas besoins de mettre des paranthèses pour return quand il y a qu'un seul élément */}
    {/* // return <h2>{props.number}</h2> */}
    <button onClick={props.func}>Change state</button> 
    </div>
)}

export default Item; //Toujours exporter le composant et on va par la suite l importer ds App.js, pas besoin de mettre le .js, react détecte automatiquement