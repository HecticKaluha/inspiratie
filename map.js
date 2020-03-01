// init(row, column)
function level1(){
  /* Init Level */
  init(5, 5);
  player.setCharacter("Boy");
  setText("Welkom bij jouw eigen avonturenspel. Probeer de kist te openen", "black");
  /* Level vars */ 
  var key = false;
  /* Map and Objects */
  map[0][0] = sprite.grass;
  map[0][1] = sprite.water;
  map[0][2] = sprite.water;
  map[0][3] = sprite.dirt;
  map[0][4] = sprite.dirt;
  object[0][4] = sprite.key;

  map[1][0] = sprite.dirt;
  map[1][1] = sprite.dirt;
  map[1][2] = sprite.dirt;
  map[1][3] = sprite.dirt;
  map[1][4] = sprite.grass;
  object[1][4] = "";
  
  map[2][0] = sprite.grass;
  map[2][1] = sprite.dirt;
  map[2][2] = sprite.grass;
  map[2][3] = sprite.grass;
  map[2][4] = sprite.grass;
  object[2][4] = sprite.chest;
  
  // Check 
  check = function(){
    if(player.x == 4 && player.y == 0){
      hideElement(player.x,player.y, "spin");
      hasKey = true;
    }
    if(player.x == 4 && player.y == 3){
      if(hasKey){
        changeElement(4, 2, sprite.chest_open);
        showGem(4, 1, sprite.gem_blue);
        setTimeout(function(){
          level2();
        }, 1800);
      } else {
        setText("Je hebt de sleutel nog niet", "red");
      }
    }
    if(player.x == 1 && player.y == 2){
      setText("Er is nog geen pad naar de kist. Maak in het level een pad naar de kist", "red");
    }
  }
  draw();
}


level1();