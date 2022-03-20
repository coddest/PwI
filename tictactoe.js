var bS = [0,0,0,0,0,0,0,0,0];
var player = new Boolean(false);

//player X = true
//player O = false

function reset_func() {
    bS = [0,0,0,0,0,0,0,0,0];
    player = true;
    document.getElementById("ins").textContent = "Tap any button to start game";
    document.getElementById("b1").textContent = "";
    document.getElementById("b2").textContent = "";
    document.getElementById("b3").textContent = "";
    document.getElementById("b4").textContent = "";
    document.getElementById("b5").textContent = "";
    document.getElementById("b6").textContent = "";
    document.getElementById("b7").textContent = "";
    document.getElementById("b8").textContent = "";
    document.getElementById("b9").textContent = "";
}

function button_1() {
    if(bS[0] == 0){
        if(player){
            document.getElementById("b1").textContent = "X";
            bS[0] = "X";
        }
        else {
            document.getElementById("b1").textContent = "O";
            bS[0] = "O";
        }
        myfunc();
    }
}
function button_2() {
    if(bS[1] == 0){
        if(player){
            document.getElementById("b2").textContent = "X";
            bS[1] = "X";
        }
        else {
            document.getElementById("b2").textContent = "O";
            bS[1] = "O";
        }
        myfunc();
    }
}
function button_3() {
    if(bS[2] == 0){
        if(player){
            document.getElementById("b3").textContent = "X";
            bS[2] = "X";
        }
        else {
            document.getElementById("b3").textContent = "O";
            bS[2] = "O";
        }
        myfunc();
    }
}
function button_4() {
    if(bS[3] == 0){
        if(player){
            document.getElementById("b4").textContent = "X";
            bS[3] = "X";
        }
        else {
            document.getElementById("b4").textContent = "O";
            bS[3] = "O";
        }
        myfunc();
    }
}
function button_5() {
    if(bS[4] == 0){
        if(player){
            document.getElementById("b5").textContent = "X";
            bS[4] = "X";
        }
        else {
            document.getElementById("b5").textContent = "O";
            bS[4] = "O";
        }
        myfunc();
    }
}
function button_6() {
    if(bS[5] == 0){
        if(player){
            document.getElementById("b6").textContent = "X";
            bS[5] = "X";
        }
        else {
            document.getElementById("b6").textContent = "O";
            bS[5] = "O";
        }
        myfunc();
    }
}
function button_7() {
    if(bS[6] == 0){
        if(player){
            document.getElementById("b7").textContent = "X";
            bS[6] = "X";
        }
        else {
            document.getElementById("b7").textContent = "O";
            bS[6] = "O";
        }
        myfunc();
    }
}
function button_8() {
    if(bS[7] == 0){
        if(player){
            document.getElementById("b8").textContent = "X";
            bS[7] = "X";
        }
        else {
            document.getElementById("b8").textContent = "O";
            bS[7] = "O";
        }
        myfunc();
    }
}
function button_9() {
    if(bS[8] == 0){
        if(player){
            document.getElementById("b9").textContent = "X";
            bS[8] = "X";
        }
        else {
            document.getElementById("b9").textContent = "O";
            bS[8] = "O";
        }
        myfunc();
    }
}

function myfunc() {
    if(  bS[0] != 0 &&
        ((bS[0] == bS[1] && bS[1] == bS[2]) ||
        (bS[0] == bS[3] && bS[3] == bS[6]) ||
        (bS[0] == bS[4] && bS[4] == bS[8]))
        ){
        document.getElementById("ins").textContent = 'player '+ bS[0] + ' won!';
    }

    if(  bS[8] != 0 &&
        ((bS[6] == bS[7] && bS[7] == bS[8]) ||
        (bS[2] == bS[5] && bS[5] == bS[8]))
        ){
        document.getElementById("ins").textContent = 'player '+ bS[8] + ' won!';
    }

    if(  bS[4] != 0 &&
        ((bS[1] == bS[4] && bS[4] == bS[7]) ||
        (bS[3] == bS[4] && bS[4] == bS[5]) ||
        (bS[2] == bS[4] && bS[4] == bS[6]))
        ){
        document.getElementById("ins").textContent = 'player '+ bS[4] + ' won!';
    }

    player = !player
}