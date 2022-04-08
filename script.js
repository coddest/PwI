//navbar code

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// tic tac toe code

var bS = [0,0,0,0,0,0,0,0,0];
var player = new Boolean(false);//player X=true, O=false
var end = new Boolean(false);

function reset_func() {
  bS = [0,0,0,0,0,0,0,0,0];
  player = true;
  end = false;
  const collection = document.getElementsByClassName("ttt-button");
  for (let i = 0; i < collection.length; i++) {
    collection[i].textContent = "";
  }
}

function ttt_click(number) {
  // alert(number);
  if(bS[parseInt(number)-1] == 0 && end == false){
      var area_id = "ttt-"+number;
      if(player){
          document.getElementById(area_id).textContent = "X";
          bS[number-1] = "X";
      }
      else {
          document.getElementById(area_id).textContent = "O";
          bS[number-1] = "O";
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
          if(end == false){
            alert("Player " + bS[0] + " won!");
              end = true
          }
  }

  if(  bS[8] != 0 &&
      ((bS[6] == bS[7] && bS[7] == bS[8]) ||
      (bS[2] == bS[5] && bS[5] == bS[8]))
      ){
          if(end == false){
              alert("Player " + bS[8] + " won!");
              end = true
          }
  }

  if(  bS[4] != 0 &&
      ((bS[1] == bS[4] && bS[4] == bS[7]) ||
      (bS[3] == bS[4] && bS[4] == bS[5]) ||
      (bS[2] == bS[4] && bS[4] == bS[6]))
      ){
          if(end == false){
            alert("Player " + bS[4] + " won!");
              end = true
          }
  }

  if( bS[0] !=0 && bS[1] !=0 && bS[2] !=0 &&
      bS[3] !=0 && bS[4] !=0 && bS[5] !=0 &&
      bS[6] !=0 && bS[7] !=0 && bS[8] !=0
    ){
      alert("Draw!")
    }

  player = !player
}