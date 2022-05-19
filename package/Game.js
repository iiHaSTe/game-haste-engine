class Game {
  canvas = null;
  constructor(id, width=window.innerWidth, height=window.innerHeight){
    let app = document.getElementById(id);
    let canvas = document.createElement('canvas');
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    canvas.setAttribute("id", id+"-");
    this.id = id+"-";
    app.appendChild(canvas);
    this.width = width;
    this.height = height;
    this.color = "#ffffff";
  }
  
  ctx(){
    let el = document.querySelector("#"+this.id);
    let ctx = el.getContext('2d');
    return ctx;
  }
  clear(){
    let ctx = this.ctx();
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, this.width, this.height);
  }
  get_canvas(){
    return document.querySelector("#"+this.id);
  }
}
