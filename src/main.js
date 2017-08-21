// window.PIXI = require('phaser/build/custom/pixi')
// window.p2 = require('phaser/build/custom/p2')
// window.Phaser = require('phaser/build/custom/phaser-split')

import * as pieces from './game-pieces';

console.log(new pieces.LPiece())
// game.prototype = {
//
//
//    update:
// }

var Game = ndocument.querySelector('#tetris')
var startButton = document.querySelector('#start')
var pauseButton = document.querySelector('#Pause')
// pauseButton.addEventListener('click', togglePlay)
// startButton.addEventListener('click', togglePlay)
var gameBoard  = [
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0]
]
console.log([Game])
Game.height = 600
Game.width = 400

function update(){

}

function draw(){

}
var FPS = 30;
var gameUpdate = setInterval(function() {
  update();
  draw();
}, 1000/FPS);


// var main_state ={
//    create: function(){
//    console.log(game)
//     game.add.tileSprite(0, 0, 400, 600, 'background')
//    },
//    preload: function(){
//       console.log(game.load)
//       game.load.image('background', '../images/Bck.png')
//
//
//    },
//    update: function(){
//
//    }
// }
// game.state.add('main', main_state)
//
// game.state.start('main')
