// Récupérez le divet console.log it
let myDiv = document.getElementsByTagName('div');
    console.log(myDiv);

// Changez le nom "Pete" en "Richard".
let element = document.querySelector("ul > li:last-child");
    element.textContent = "Richard";

// Remplacez chaque prénom des deux <ul>'spar votre nom.
let lists = document.querySelectorAll(".list");
    lists.forEach(list => list.firstElementChild.textContent = "Kone");

// Supprimez le <li>qui contient le nœud de texte "Sarah".
    lists[1].children[1].remove();

    // astuce
    // Ajoutez une classe appelée student_list aux deux <ul>'s
lists.forEach(list => list.classList.add("student_list"));

// Ajoutez les classes universityet attendance au premier <ul>.
let firstUl = document.querySelector("ul .list .student_list");
    firstUl.classList.add("university", "attendance");