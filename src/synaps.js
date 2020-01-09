import Neuron from "./neuron"

export default class Synaps {
  constructor ({input, output, weight}) {
    this.input = input;
    this.output = output;
    this.weight = weight;
  }
  activate () {
    this.output.activate();
  }
  propagate () {
    this.input.propagate();
  }
  
  pulse() {
    this.input.activate();
    this.input.propagate();
  }
}