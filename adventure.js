var username;
background(0);
var nextPressed = 0;
var text;
var text2;
var next;

var introKnop = document.createElement("button");
document.body.appendChild(introKnop);
introKnop.id = "introKnop"
introKnop.onclick = function() {intro()};
introKnop.innerHTML = "The Begin of The End";

function intro(){
    background(1);
    start();
    nextOne();
}

function start(){
    username = prompt("Please enter your username.");

    var textPaper = document.createElement("div");
    textPaper.className = "text";
    textPaper.id = "introText" ;
    document.body.appendChild(textPaper);

    introKnop.style.display = "none";

    next = document.createElement("button");
    next.id = "Next";
    next.innerHTML = "Next";
    document.getElementById("introText").appendChild(next);
    next.onclick = function() {nextOne()};
}

function nextOne(){
    nextPressed += 1;
    if (nextPressed == 1){
        text = document.createElement("div");
        text.id = "textIntro";
        text.innerHTML = "hallo "+username+" welkom tot mijn game";
        document.getElementById("introText").appendChild(text);
    }
    else if(nextPressed == 2){
        text.style.display = "none";
        text2 = document.createElement("div");
        text2.id = "textIntro";
        text2.innerHTML = username+" u moet overleven en dan dood gaan";
        document.getElementById("introText").appendChild(text2);
    }
}

function background(optionNumber){
    var options = [
        "url('images/backlevel0.png')",
        "url('images/backlevel1.png')", 
        "url('images/backlevel2.png')"
    ];
    document.body.style.background = options[optionNumber];
}