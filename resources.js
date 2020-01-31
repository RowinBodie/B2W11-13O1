var wood = 0;
var stone = 0;
var water = 0;
var meat = 0;
var dayCount = 1;
var time;
var recourses;
var dayHold;

function recourseMenu(){
    recourses = document.createElement("div");
    recourses.id = "recMenu";
    document.body.appendChild(recourses);
    
    //wood
    var woodHolder = document.createElement("div");
    woodHolder.className = "holds";
    woodHolder.id = "hold1";
    document.getElementById("recMenu").appendChild(woodHolder);

    var iconWood = document.createElement("IMG");
    iconWood.src = "images/icons/wood.png";
    iconWood.className = "icon";
    iconWood.id = "iconWood";
    document.getElementById("hold1").appendChild(iconWood);

    var infoWood = document.createElement("p");
    infoWood.innerHTML = "  "+wood;
    infoWood.className = "textRec";
    infoWood.id = "textWood";
    document.getElementById("hold1").appendChild(infoWood);
    
    //stone
    var stoneHolder = document.createElement("div");
    stoneHolder.className = "holds";
    stoneHolder.id = "hold2";
    document.getElementById("recMenu").appendChild(stoneHolder);

    var iconStone = document.createElement("IMG");
    iconStone.src = "images/icons/stone.png";
    iconStone.className = "icon";
    iconStone.id = "iconstone";
    document.getElementById("hold2").appendChild(iconStone);

    var infoStone = document.createElement("p");
    infoStone.innerHTML = "  "+stone;
    infoStone.className = "textRec";
    infoStone.id = "textstone";
    document.getElementById("hold2").appendChild(infoStone);

    //water
    var waterHolder = document.createElement("div");
    waterHolder.className = "holds";
    waterHolder.id = "hold3";
    document.getElementById("recMenu").appendChild(waterHolder);

    var iconWater = document.createElement("IMG");
    iconWater.src = "images/icons/waterdrop.png";
    iconWater.className = "icon";
    iconWater.id = "iconWater";
    document.getElementById("hold3").appendChild(iconWater);

    var infoWater = document.createElement("p");
    infoWater.innerHTML = "  "+water;
    infoWater.className = "textRec";
    infoWater.id = "textWater";
    document.getElementById("hold3").appendChild(infoWater);

    //meat
    var meatHolder = document.createElement("div");
    meatHolder.className = "holds";
    meatHolder.id = "hold4";
    document.getElementById("recMenu").appendChild(meatHolder);

    var iconMeat = document.createElement("IMG");
    iconMeat.src = "images/icons/meat.png";
    iconMeat.className = "icon";
    iconMeat.id = "iconMeat";
    document.getElementById("hold4").appendChild(iconMeat);

    var infoMeat = document.createElement("p");
    infoMeat.innerHTML = "  "+ meat;
    infoMeat.className = "textRec";
    infoMeat.id = "textMeat";
    document.getElementById("hold4").appendChild(infoMeat);

    //sleep
    sleeping = document.createElement("button");
    sleeping.innerHTML = "sleep";
    sleeping.onclick = function() {newDay()};
    sleeping.id = "sleep";
    sleeping.style.display = "none";
    document.body.appendChild(sleeping);

    //Day counters
    dayHold = document.createElement("div");
    dayHold.innerHTML = "Day "+dayCount;
    dayHold.id = "dayHolder";
    document.body.appendChild(dayHold);

    nextDay = document.createElement("h1");
    nextDay.id = "nextDay";
    nextDay.style.display = "none";
    document.body.appendChild(nextDay);
    createTime();
}
//removes the hud
function none(see,saw){
    if(see == "yes"){
        recourses.style.display = "none";
        dayHold.style.display = "none";
    }
    menuSelection.style.display = "none";
    menuSelection1.style.display = "none";
    if(saw == "yes"){
        getWood.style.display = "none";
        getStone.style.display = "none";
        getWater.style.display = "none";
        hunt.style.display = "none";
    }
}
function hud(){
    recourses.style.display = "inline-block";
    dayHold.style.display = "inline-block";
    menuSelection.style.display = "inline-block";
    menuSelection1.style.display = "inline-block";
    getWood.style.display = "inline-block";
    getStone.style.display = "inline-block";
    getWater.style.display = "inline-block";
    hunt.style.display = "inline-block";
    nextDay.style.display = "none";
}
function checkTime(kind){
    if(time != 0){
        if(kind == 0){
            gatherWood();
        }
        else if(kind == 1){
            gatherStone();
        }
        else if(kind == 2){
            gatherWater();
        }
        else if(kind == 3){
            hunting();
        }
    }
    else if(time == 0 ){
        sleep();
        textPaper.style.display = "inline-block";
        text.style.display = "inline";
        text.innerHTML = "na een dag lang werken ben je uitgeput en wil naar bed";
        setTimeout(function(){gone()}, 3000);
    }
}
function gone(){
    textPaper.style.display = "none"
    text.style.display = "none";
}
function createTime(){
    time = Math.floor(Math.random() * 4 +1);
    console.log(time)
}
function gatherWood(){
    console.log(time);
    time -= 1
    if(time == 0 ){
        checkTime();
    }
}
function gatherStone(){
    console.log(time);
    time -= 1
    if(time == 0 ){
        checkTime();
    }
}
function gatherWater(){
    console.log(time);
    time -= 1
    if(time == 0 ){
        checkTime();
    }
}
function hunting(){
    console.log(time);
    time -= 1
    if(time == 0 ){
        checkTime();
    }
}
function sleep(){
    none("no","yes")
    sleeping.style.display = "inline-block"
}
function newDay(){
    background(0);
    none("yes","yes");
    dayCount += 1;
    nextDay.innerHTML = "Day "+ dayCount;
    dayHold.innerHTML = "Day "+ dayCount;
    nextDay.style.display = "inline-block";
    sleeping.style.display = "none";
    setTimeout(function(){hud(),background(4)}, 3000);
    createTime();
}