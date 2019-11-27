var recipeBook;
var bookFull;
var img;
var back;
var selection1;

//de items voor de achtergronden van de recipebook en de inventory.
function items(optionNumber){
    var options = [
        "url('images/menu/recipeMenu.png')"
    ];
    document.body.style.background = options[optionNumber];
}
bookFull = document.createElement("div");
bookFull.id = "bookBack";
bookFull.style.display = "none";
document.body.appendChild(bookFull);

img = document.createElement("div");
img.id = "recipeImg";
document.getElementById("bookBack").appendChild(img);

recipeBook = document.createElement("div");
recipeBook.id = "book";
document.getElementById("bookBack").appendChild(recipeBook);

back = document.createElement("button");
back.id = "backButton";
back.innerHTML = "Back";
back.onclick = function() {menu(),reset()};
document.getElementById("book").appendChild(back);

selection1 = document.createElement("p");
selection1.id = "structures";
selection1.innerHTML = "Structures";
selection1.onclick = function() {openmenu()};
document.getElementById("book").appendChild(selection1);

function openmenu(){
    console.log("true");
}
//het recipe menu
function book(){
    menuSelection.style.display = "none";
    menuSelection1.style.display = "none";
    bookFull.style.display = "inline-block";
}

function reset(){
    bookFull.style.display = "none";
}

function reset1(){
    bookFull.style.display = "inline-block";
}
