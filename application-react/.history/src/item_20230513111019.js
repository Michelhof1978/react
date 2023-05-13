//Creation d un composant, lors de la création du fichier, on mets une majuscule au debut du nom de fichier par convention
function Item(props){//On crée un composant avec la propriété props et cela va nous retourner un objet avec des propriété
    console.log(props);
    
    return <h1>Hello World depuis Item</h1>//Pas besoins de mettre des paranthèses pour return quand il y a qu'un seul élément
    
}

export default Item; //Toujours exporter le composant et on va par la suite l importer ds App.js, pas besoin de mettre le .js, react détecte automatiquement