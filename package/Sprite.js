class Sprite {
  constructor(pos=[0, 0], size=[20, 20], image=false, opt, speed=[5, 5]){
    //=== Basic Attr ===//
    this.x = pos[0]
    this.y = pos[1]
    this.size = size
    this.speed = speed
    this.path = image ? opt : false
    this.color = !image ? opt : false
    
    //=== events ===//
    this.code = ()=>{};
    this.event= {
      move: ()=>{},
    }
    
    //=== Help Full Attr ===//
    this.right = this.x;
    this.left = this.x + this.size[0];
    
    this.top = this.y;
    this.bottom = this.y + this.size[1];
    
    this.moving = {
      x: false,
      y: false
    }
  }
  
  animate(animation){
    animation.run(this);
  }
  
  move(speed=null){
    if (speed==null){
      this.x += this.speed[0]
      this.y += this.speed[1]
    }else {
      this.speed = speed;
      this.x += this.speed[0]
      this.y += this.speed[1]
    }
    this.event.move(this.pos);
  }
  on(eventName, callBack){
    let eventError = new Error(`Event Name Error: 
The event ${eventName} not found
`);
    if (this.moving.x)
      this.x += speed[0]
    if (this.moving.y)
      this.y += speed[0]
    if (!this.event[eventName]){
      console.error(eventError);
      return;
    }else {
      this.event[eventName] = callBack;
    }
  }
  get_pos(){
    return [this.x, this.y];
  }
  set_pos(pos){
    this.x, this.y = pos[0], pos[1];
  }
  colliderect(sprite){
    return sprite.right < this.left
      && sprite.left > this.right
      && sprite.bottom > this.top
      && sprite.top < this.bottom;
  }
  render(ctx) {
    if (this.path)
      "none";
    else {
      ctx.fillStyle = this.color
      ctx.fillRect(...this.get_pos(), ...this.size)
    }
    this.right = this.x;
    this.left = this.x + this.size[0];
    this.top = this.y;
    this.bottom = this.y + this.size[1];
    this.code(this);
  }
}
function renderAll(ctx, sprites=[Sprite]) {
  for (let sprit of sprites)
    sprit.render(ctx)
}
