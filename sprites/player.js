
const player = new Sprite(
  [0, 500],
  [60, 20],
  false,
  "#00ff00"
);
player.speed = [0, 0]


function player_code(game){
  const {width, height} = game;
  
  player.code = (self) => {
    if (self.x < 0)
      self.x = 0
    else if (self.x > width)
      self.x = width
    else
      self.move();
  }
}


export default player;
export {
  player_code
}
