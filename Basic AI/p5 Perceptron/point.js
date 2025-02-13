class Point {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.size = 5
    this.label = this.assign_label()
    
    
  }
  assign_label(){
    if (this.x > (m * this.y)){
      return 1
    } else {
      return -1
    }
    
  }
  show() {
    if (this.label == 1){
      fill(255)
    } else {
      fill(0)
    }
    noStroke()
    ellipse(this.x, this.y, this.size)

  }
  
  get_x(){
    return this.x
  }
  
  get_y(){
    return this.y
  }
  
  get_size(){
    return this.size
  }
  
  get_label(){
    return this.label
  }
}



//COMMAND SHIFT F IS TIDY CODE