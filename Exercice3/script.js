//2) Dans le <div>, modifiez la valeur de l'attribut id de navBar à socialNetworkNavigation , à l'aide de la setAttribute méthode .
let myDiv = document.getElementById('navBar');
    myDiv.setAttribute('id', 'socialNetworkNavigation');

//3)
// Tout d'abord, créez une nouvelle <li>balise (utilisez la createElementméthode)
let newLi = document.createElement('li');

    //creation de la balise a
    newA = document.createElement('a');
    newA.href ='http://www.marlins.com';

    // Créez un nouveau nœud de texte avec "Déconnexion" comme texte spécifié
let newTextLi = document.createTextNode('Deconnexion');

    //mettre le newTextLi dans le newA
    newA.appendChild(newTextLi);

    // Ajoutez le nœud de texte au nœud de liste nouvellement créé ( <li>).
    newLi.appendChild(newA);


    // Enfin, ajoutez ce nœud de liste mis à jour à la liste non ordonnée ( <ul>), en utilisant la appendChildméthode.
let myUl = document.querySelector('ul') 
    myUl.appendChild(newLi);
    
    console.log(myUl);

//4)
let firstElem = myUl.firstElementChild.textContent;
    console.log(firstElem);

let lastElem = myUl.lastElementChild;
    
    console.log(lastElem);
