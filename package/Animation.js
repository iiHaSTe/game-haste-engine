class SpriteAnimation {
  constructor(dilay, frams=[]){
    this.dilay = dilay;
    this.frams = frams;
    this.index = 0;
  }
  add(src){
    this.frams.push(src);
  }
  run(sprite){
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    setInterval(()=>{
      if (this.index==this.frams.length)
        this.index = 0;
      
      sprite.color = this.frams[this.index];
      
      this.index++;
      
    }, this.dilay);
    /*for (let fram of this.frams){
      sprite.color = fram;
      await sleep(this.dilay);
    }*/
  }
}
