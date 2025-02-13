//COMMAND SHIFT F IS TIDY CODE

let number_of_points = 450;
let points = new Array(number_of_points);
let percy;
let m = 1;
function setup() {
  createCanvas(400, 400);

  percy = new Perceptron();
  
  
  //Declare points
  for (let i = 0; i < number_of_points; i++) {
    points[i] = new Point();
  }
  
  for (let i = 0; i < number_of_points; i++) {
    //console.log(percy.guess(points[i]));
  }
  background(40, 210, 249);
  
  k = new Point()
  k_x = k.get_x()
  k_y = k.get_y()
  fill(255, 0, 0)
  ellipse(k_x, k_y, 15)
  console.log(percy.guess(k))
  k_answer = k.assign_label()
  console.log(k_answer)

}

function draw() {
  
  //Draw a bunch of points and assign a colour to them depending on their score, black if below line, white above
  for (let i = 0; i < number_of_points; i++) {
    points[i].show();
  }

  //The line below is the correct answer for the perceptron that divides the points into two regions.
  stroke(255 / 2);
  line(0, 0, m * width, width);
}

function mousePressed(){
  percy.show()
  console.log("hey")
}
