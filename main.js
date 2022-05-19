//=============================================================================//
const game = new Game("app");
game.color = "#000";
const {width, height} = game;
import ball, {code} from "./sprites/ball.js";
import player, {player_code} from "./sprites/player.js";




let sprites = [
  ball,
  player
]
const right = document.getElementById("right");
const left = document.getElementById("left");
left.ontouchstart = () => {
  player.speed[0] = -3;
}
left.ontouchend = () => {
  player.speed[0] = 0;
}
right.ontouchstart = ()=>{
  player.speed[0] = 3;
}
right.ontouchend = ()=>{
  player.speed[0] = 0;
}
function loop(){
  game.clear();
  
  code(game, player);
  player_code(game);
  
  
  
  renderAll(game.ctx(), sprites);
  requestAnimationFrame(loop);
}
loop();
