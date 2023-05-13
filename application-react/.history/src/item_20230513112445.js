//Creation d un composant affichage, lors de la création du fichier, on mets une majuscule au debut du nom de fichier par convention
function Item(props){//On crée un composant avec la propriété props et cela va nous retourner un objet avec des propriétés avec l élément parent qui est App.js
    console.log(props);
    
    return <h1>{props.txt}</h1>//Pas besoins de mettre des paranthèses pour return quand il y a qu'un seul élément
    // return <h2>{props.number}</h2>
}

export default Item; //Toujours exporter le composant et on va par la suite l importer ds App.js, pas besoin de mettre le .js, react détecte automatiquement