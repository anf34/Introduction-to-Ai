

function setup() {
  createCanvas(400, 400);
  
  inputs = [0.2, 0.4]
  //Ensure inputs is of length 2 for the purpose of this exercise. I'm gonna put a check in anyway just in case :-)
  percy = new Perceptron();
  console.log(percy.guess(inputs))
}

function draw() {
  background(40, 210, 249);
  
  
}