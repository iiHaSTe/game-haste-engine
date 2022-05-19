//========================================================================================================================//
const ball = new Sprite(
  [0, 0],
  [20, 20],
  false,
  "#ff0000"
);
ball.speed = [2, 2];

ball.animate(new SpriteAnimation(1000, [
  "red",
  "blue",
  "white"
]));

function code(game, name){
  const {width, height} = game;
  ball.code = (self) => {
    self.move()
    if (self.right < 0 || self.left > width) {
      self.x = self.x > width / 2 ? self.x - self.speed[0]*2 : self.x + self.speed[0]*2* -1;
      self.speed[0] *= -1;
    } else if (self.top < 0 || self.bottom > height) {
      self.y = self.y > height / 2 ? self.y - self.speed[1]*2 : self.y + self.speed[1]*2*-1;
      self.speed[1] *= -1;
    }
    if (self.colliderect(name)) {
      name.color = "#0000ff";
      self.speed[1] *= -1;
      self.y = name.top - self.size[1];
    } else {
      name.color = "#00ff00"
    }
  }
}

export default ball;
export {
  code
};
