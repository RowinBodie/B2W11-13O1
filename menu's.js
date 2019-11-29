//de items voor de achtergronden van de recipebook en de inventory.
function items(optionNumber){
    var options = [
        "url('images/menu/recipeMenu.png')"
    ];
    document.body.style.background = options[optionNumber];
}
//het recipe book.
var bookFull = document.createElement("div");
bookFull.id = "bookBack";
bookFull.style.display = "none";
document.body.appendChild(bookFull);

var img1 = document.createElement("div");
img1.className = "img";
document.getElementById("bookBack").appendChild(img1);


var recipeBook = document.createElement("div");
recipeBook.id = "book";
document.getElementById("bookBack").appendChild(recipeBook);

var back = document.createElement("button");
back.id = "backButton";
back.innerHTML = "Back";
back.onclick = function() {menu(),reset()};
document.getElementById("book").appendChild(back);
// de inventory.
var inve = document.createElement("div");
inve.id = "inven";
inve.style.display = "none";
document.body.appendChild(inve);

var containerBorder = document.createElement("div");
containerBorder.id = "containerBorder";
document.getElementById("inven").appendChild(containerBorder);

var container = document.createElement("div");
container.id = "container";
container.className = "layout";
document.getElementById("containerBorder").appendChild(container);



var back1 = document.createElement("button");
back1.id = "back1"
back1.innerHTML = "Back";
back1.onclick = function() {menu(),reset()};
document.getElementById("inven").appendChild(back1);

var img2 = document.createElement("div");
img2.className = "img";
document.getElementById("inven").appendChild(img2);
//in het recipe book.
var selection1 = document.createElement("p");
selection1.id = "structures";
selection1.className = "recipes";
selection1.innerHTML = "Structures";
selection1.onclick = function() {openmenu1()};
document.getElementById("book").appendChild(selection1);

var selection2 = document.createElement("p");
selection2.id = "tools";
selection2.className = "recipes";
selection2.innerHTML = "Tools";
selection2.onclick = function() {openmenu2()};
document.getElementById("book").appendChild(selection2);

var selection3 = document.createElement("p");
selection3.id = "armor";
selection3.className = "recipes";
selection3.innerHTML = "Armor";
selection3.onclick = function() {openmenu2()};
document.getElementById("book").appendChild(selection3);

var selection4 = document.createElement("p");
selection4.id = "crafting";
selection4.className = "recipes";
selection4.innerHTML = "Crafting";
selection4.onclick = function() {openmenu2()};
document.getElementById("book").appendChild(selection4);
//het recipe menu aanroepen.
function book(){
    menuSelection.style.display = "none";
    menuSelection1.style.display = "none";
    bookFull.style.display = "inline-block";
}
//de inventory
function inv(){
    menuSelection.style.display = "none";
    menuSelection1.style.display = "none";
    inve.style.display = "inline-block"
}
//just a rest for the menu's
function reset(){
    inve.style.display = "none"
    bookFull.style.display = "none";
}