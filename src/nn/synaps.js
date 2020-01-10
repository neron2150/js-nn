import Neuron from "./neuron"

export default class Synaps {
  constructor ({input, output, weight}) {
    this.input = input;
    this.output = output;
    this.weight = weight;
  }

  activateInput() {
    this.input.activate();
  }

  activateOutput() {
    this.output.activate();
  }

  propagate () {
    this.input.propagate();
  }
  
  pulse() {
    this.input.activate();
    this.input.propagate();
  }

  mutate(speed = 1) {
    this.weight += (Math.random() - Math.random()) * speed;
  }
}
