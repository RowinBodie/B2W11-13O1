//andere js
var script = document.createElement('script'); 
script.src =  "menu's.js"; 
document.body.appendChild(script)
//googlefonts
var font = document.createElement('link'); 
font.href = "https://fonts.googleapis.com/css?family=Tomorrow&display=swap"
font.rel = "stylesheet";
document.head.appendChild(font)
var font1 = document.createElement('link'); 
font1.href = "https://fonts.googleapis.com/css?family=Caveat&display=swap"
font1.rel = "stylesheet";
document.head.appendChild(font1)
background(1);
//username
var username; 
//counters
var nextPressed = 0;
var textAmount = 0;
var stageNumber = 0;
var dayCounter = 0;
var waterKan = true;
var etenKan = true;
//text
var textPaper;
var text;
var text2;
var text3;
var text4;
//buttons
var next;
var water;
var eten;
var mines;
var logCamp;
var menuSelection;
var menuSelection1;

var introKnop = document.createElement("button");
document.body.appendChild(introKnop);
introKnop.id = "introKnop"
introKnop.onclick = function() {intro()};
introKnop.innerHTML = "The Begin of The End";

//var days = document.createElement("h3");
//document.body.appendChild(days);
//days.id = "days";
//days.innerHTML = "day:"+DayCounter;

function intro(){
    background(2);
    start();
}

function start(){
    username = prompt("Please enter your username.");

    //aanmaak van de standaart textbalk en van de content die er in moet.

    textPaper = document.createElement("div");
    textPaper.className = "text";
    textPaper.id = "introText" ;
    document.body.appendChild(textPaper);

    introKnop.style.display = "none";

    next = document.createElement("button");
    next.id = "Next";
    next.innerHTML = "Next";
    document.getElementById("introText").appendChild(next);
    next.onclick = function() {nextOne(textAmount,stageNumber)};

    text = document.createElement("div");
    text.className = "textContent";
    text.innerHTML = username+": "+"<br>"+"waar ben ik, wat is dit?";
    document.getElementById("introText").appendChild(text);
    

    text2 = document.createElement("div");
    text2.className = "textContent";
    text2.innerHTML = "Onbekend:"+"<br>"+"Welkom "+username+" in de onbekende wereld, een wereld waar mensen lang geleden de macht hebben verloren, een wereld waar de mensen de gennen zijn die worden gebruikt gebruikt voor voedsel. ik hoop dat je er zin in hebt wat ik denk dat de wezens sie hier leven er heel veel zin in hebben om van je vlees tesnoepen.";
    text2.style.display = "none";
    document.getElementById("introText").appendChild(text2);
    
    text3 = document.createElement("div");
    text3.className = "textContent";
    text3.innerHTML = username+":"+ "<br>"+"Waarom ben ik hier dan waarom heb je me hier heen gehaalt! Ik wil nog niet dood, ik wil naar huis!";
    text3.style.display = "none";
    document.getElementById("introText").appendChild(text3);

    text4 = document.createElement("div");
    text4.className = "textContent";
    text4.innerHTML = "(je kreeg na 30 min nog steeds geen antwoord dus ben je naar het noorden gaan reizen. en je hoopt om antwoorden tevinden antwoorden over waarom en hoe je hier bent gekomen.)";
    text4.style.display = "none";
    document.getElementById("introText").appendChild(text4);
    textAmount = 4;
    stageNumber = 1;
}
function menuAanmaken(){
    //knop naar inventory
    menuSelection = document.createElement("button");
    menuSelection.innerHTML = "inventory";
    menuSelection.id = "inventory";
    menuSelection.className = "bar"
    menuSelection.onclick = function() {inv()};
    document.body.appendChild(menuSelection);

    //knop naar de recipe book
    menuSelection1 = document.createElement("button");
    menuSelection1.innerHTML = "Crafting";
    menuSelection1.id = "recipe";
    menuSelection1.className = "bar"
    menuSelection1.onclick = function() {book(),reset1()};
    document.body.appendChild(menuSelection1);
}
function menu(check){
    menuSelection.style.display = "inline-block";
    menuSelection1.style.display = "inline-block";

    if(check == false){
        menuSelection.style.display = "none"
        menuSelection1.style.display = "none"
    }
}
//tekst loop.
function nextOne(parameter,parameter2){
    textPaper.style.display = "inline-block";
    text.id = "none"
    text2.id = "none1"
    text3.id = "none2"
    text4.id = "none3"
    nextPressed += 1;
    //text content.
    if(nextPressed == 1 && nextPressed < parameter){
        text2.style.display = "inline"
        text.style.display = "none";
    }
    else if(nextPressed == 2 && nextPressed < parameter){
        text3.style.display = "inline";
        text2.style.display = "none";
    }
    else if(nextPressed == 3 && nextPressed < parameter){
        text4.style.display = "inline";
        text3.style.display = "none";
    }
    //stage selector.
    else if(nextPressed == parameter){
        text.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "none";
        textPaper.style.display = "none";
        if(parameter2 == 1){
            loadStage(stage1);
        }
        else if(parameter2 == 2){
            loadStage(stage2);
        }
        else if(parameter2 == 3){
            notLoadStage(stage3);
        }
    }
}
//loadscreen / stage loader.
function loadStage(stage){
    setTimeout(function() {background(0)}, 1);
    setTimeout(stage, 1);
}
//stage loader no loadscreen
function notLoadStage(stage){
    setTimeout(stage, 1);
}
function dayloader(stage){
    setTimeout(function() {background(5)}, 1);
    setTimeout(stage, 1);
}
//overlevings plek zoeken.
function stage1(){
    nextPressed = 0
    textPaper.style.display = "inline-block";
    next.style.display = "inline";
    text.style.display = "inline";
    text.innerHTML = username+":"+"<br>"+"wat is dit voor bos? het voelt zo koud aan, maar ook warm tegelijker tijd. hopelijk kan ik wat vinden dat me kan beschermen? ";
    text2.innerHTML = "(je loopt wat rond en vind een goede plek voor een begin van een camp.)";
    background(3);
    textAmount = 2
    stageNumber = 2
}
//overlevings plek gevonden.
function stage2(){
    nextPressed = 0
    textPaper.style.display = "inline-block";
    next.style.display = "inline";
    text.style.display = "inline";
    text.innerHTML = username+":"+"<br>"+"Dit ziet er uit als een mooi plek voor een begin van een camp waar ik kan overnachten.";
    text2.innerHTML = username+":"+"<br>"+"ik hoop maar dat ik snel wat eten en water kan vinden.";
    background(4);
    textAmount = 2
    stageNumber = 3
}
//eten of water halen.
function stage3(){
    nextPressed = 0
    background(4);
    textPaper.style.display = "inline-block";
    text.style.display = "inline";
    text.id = "selection"
    next.style.display = "none";
    text.innerHTML = "Wat wil je als eerste gaan halen?";
    textAmount = 1

    if(etenKan == true){
        eten = document.createElement("button");
        eten.innerHTML = "Eten";
        eten.className = "w&e";
        eten.id = "eten";
        document.getElementById("introText").appendChild(eten);
        eten.onclick = function() {getFood()};
    }
    
    if(waterKan == true){
        water = document.createElement("button");
        water.innerHTML = "Water";
        water.className = "w&e";
        water.id = "water";
        document.getElementById("introText").appendChild(water); 
        water.onclick = function() {getWater()};
    }
    
    if(waterKan == false && etenKan == false){
        dayloader(main);
    }
}
//de opbouw van je dorp.
function main(){
    background(4);
    textPaper.style.display = "none";
    menuAanmaken();
}
//het level als je water hebt gekozen.
function getWater(){
    textPaper.style.display = "inline-block";
    text.style.display = "inline";
    text.id = "none";
    next.style.display = "inline";
    water.style.display = "none";
    eten.style.display = "none";
    text.innerHTML = "(Je loopt een cirkel om je kamp heen en zit dat je dicht bij een rivier zit.)"+"<br>"+"(je merkt al snel dat het donker wordt dus je drinkt gedachteloos het water uit de rivier en loopt weer terug.)";
    if(etenKan != false){
        text2.innerHTML = "(Je kijkt door de bomen en ziet dat je nog tijd hebt om eten tehalen.)";
    }
    else if(etenKan == false){
        text2.innerHTML = "(Je kijkt in de bomen en ziet dat je perfect in een boom kan slapen dus je besluit om dat tegaan doen.)";
    }
    waterKan = false;
    textAmount = 2
    stageNumber = 3
}
//het level waar je eten hebt gekozen.
function getFood(){
    textPaper.style.display = "inline-block";
    text.style.display = "inline";
    text.id = "none"
    next.style.display = "inline";
    water.style.display = "none";
    eten.style.display = "none";
    if(waterKan != false){
        text.innerHTML = "(Je loopt naar een hoge boom die je al gespot had vanuit je toekomstige kamp.)"+"<br>"+"(Je zit dat het steeds donkerder wordt maar mischien kan ik nog water halen.)"+"<br>"+"(je loopt snel terug naar het kamp.)";
    }
    else if(waterKan == false){
        text.innerHTML = "(Je loopt naar een hoge boom die je al gespot had vanuit je toekomstige kamp.)"+"<br>"+"(Je ziet dat het al donker wordt dus je besluit in een boom teklimmen en tegaan slapen in de boom.)"+"<br>"+"(je loopt snel terug naar het kamp.)";
    }
    
    etenKan = false;
    textAmount = 1
    stageNumber = 3
}
//background selector.
function background(optionNumber){
    var options = [
        "url('images/loadscreen.png')",
        // begin met tellen vanaf deze hier onder (bij 1 beginnen).
        "url('images/backlevel0.png')",
        "url('images/backlevel1.png')",
        "url('images/backlevel2.png')",
        "url('images/backlevelcamp.png')",
        "url('images/daycount.png')"
    ];
    document.body.style.background = options[optionNumber];
}