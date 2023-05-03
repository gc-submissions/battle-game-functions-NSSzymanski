"use strict";

// TODO - write your code here.

function randomDamage() {
  return Math.floor(Math.random() * 10) + 1;
}

function chooseOption(opt1, opt2) {
  var randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
}

const attackPlayer = function (health) {
  return health - randomDamage;
};

function logHealth(player, health) {
  console.log(+player, "health:" + health);
}

function logDeath(winner, loser) {
  console.log(+winner, "defeated" + loser);
}

function isDead(health) {
  return health <= 0;
}

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    var attacker = (chooseOption = { player1, player2 });
    if ((attacker = player1)) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
    }
    if ((isDead = player2Health)) {
      logDeath(player1, player2);
    }
    else (player1Health = attackPlayer(player1Health)){
    logHealth(player1, player1Health)
  }
    if (isDead = player1Health){
        logDeath(player2, player1)
    }
}
}

fight(Nell, Ayanna, 100, 100);
