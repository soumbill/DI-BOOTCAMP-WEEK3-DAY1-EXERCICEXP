//2) Ajoutez une couleur d'arrière-plan "bleu clair" et un peu de rembourrage au fichier <div>.
let myDiv = document.querySelector('div');
    myDiv.style.backgroundColor = "lightblue";
    myDiv.style.padding = "20px";

//3) Ne pas afficher le <li>qui contient le nœud de texte "John".
let John = document.querySelectorAll('li')[0];
    John.style.display = "none";


//4) Ajoutez une bordure au <li>qui contient le nœud de texte "Pete".
let myLi = document.querySelectorAll('li')[1];
    myLi.style.border = "2px solid gray";

//5) Modifiez la taille de la police de tout le corps.
    document.body.style.fontSize = "2em";

//6) Bonus : Si la couleur de fond du div est "bleu clair", alertez "Bonjour x et y" (x et y sont les utilisateurs dans la div).
    const divBackground = getComputedStyle(mydiv).backgroundColor;
    if(divBackground === "rgb(173, 216, 230)")
    {
        console.log("Good morning X and Y");
    }