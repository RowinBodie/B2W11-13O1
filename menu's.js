var recipeBook;

//de items voor de achtergronden van de recipebook en de inventory.
function items(optionNumber){
    var options = [
        "url('images/menu/recipeMenu.png')"
    ];
    document.body.style.background = options[optionNumber];
}

function book(){
    menuSelection.style.display = "none";
    menuSelection1.style.display = "none";

    recipeBook = document.createElement("div");
    recipeBook.id = "book";
    document.body.appendChild(recipeBook);

    back = document.createElement("button");
    back.id = "backButton";
    back.innerHTML = "Back";
    back.onclick = function() {menu()};
    document.getElementById("book").appendChild(back)
}