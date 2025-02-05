class Perceptron {
  constructor() {
    this.weights = [];

    for (let i = 0; i < 2; i++) {
      this.weights[i] = random(-1, 1);
    }

    this.bias = random(-1, 1);
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

  guess(inputs_) {
    if (inputs_.length != 2) {
      console.log("Please fix input length");
      return -10;
    }
    let result = this.bias;

    for (let i = 0; i < inputs_.length; i++) {
      result += inputs_[i] * this.weights[i];
    }
    return sign(result);
  }
}
