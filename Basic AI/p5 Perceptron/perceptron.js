class Perceptron {
  
  //A perceptron has a pair of weights
  constructor() {
    this.weights = [];
    this.learn_rate = 0.1;
    for (let i = 0; i < 2; i++) {
      this.weights[i] = random(-1, 1);
    }

    //this.bias = random(-1, 1);
    this.bias = 0
  }

  get_weights() {
    return this.weights;
  }

  set_weights(weights) {
    this.weights = weights;
  }

  get_bias() {
    return this.bias;
  }

  set_bias(bias) {
    this.bias = bias;
  }
  
  get_learn_rate(){
    return this.learn_rate;
  }

  //Perceptron takes a point in as input
 
  guess(point_) {
    //!!There is currently no check that the input is of type point.
    let perc_guess = this.bias;
    perc_guess += point_.get_x() * this.weights[0];
    perc_guess += point_.get_y() * this.weights[1];
    
    return sign(perc_guess);
  }
  
  train(point_){
    error = point_.get_label() - guess(point_)
    
    //Tune the weights
    this.weights[0] += error * point_.get_x() * this.get_learn_rate()
    this.weights[1] += error * point_.get_y() * this.get_learn_rate()
    
    
    
  }
  
  show(){
    stroke(20)
    console.log(this.weights[0], this.weights[1])
    line(0, 0, 1000 * this.weights[0], 1000 * this.weights[1])
  }
  
  
  
}

//Perceptron will take as input a point
  //If it is correct, do nothing
  //If it is incorrect, do some sort of operation on it's attributes to steer them closer towards the desired outcome.
  //How to check correctness?
  //Well the perceptron makes a guess, can compare it to the points assigned label.
  //If the perceptron is wrong, change it's weights using some sort of calculation
  //My guess on the calculation: learning_rate * weight[0] * point_label and learning_rate * weight[1] * point_label..?
  //Repeat for next points
  