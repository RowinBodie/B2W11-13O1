var nummer = 1;
test();

function test(){
    var button1 = document.createElement("button");
    document.body.appendChild(button1);
    button1.onclick = function() {selector(nummer)};
    button1.innerHTML = "test";
}

function selector(number){
    plate(number);
    nummer++;
}

function plate(number){
    if(number == 1){
        var button1 = document.createElement("button");
        document.body.appendChild(button1);
        button1.onclick = function() {background(0)};
        button1.innerHTML = "background";
    }
    else if(number == 2){
        var button2 = document.createElement("button");
        document.body.appendChild(button2);
        button2.onclick = function() {background(1)};
        button2.innerHTML = "button2";
    }
}

function background(optionNumber){
    var options = [
        "url('images/backlevel0.png')", 
        "url('images/backlevel1.png')"
    ];
    var background = document.body;
    background.style.background = options[optionNumber];
}