import Neuron from "./neuron"

export default class Synaps {
  constructor ({input, output, weight}) {
    this.input = input;
    this.output = output;
    this.weight = weight;
  }
  pulse() {
    
    this.input.activate();
    this.input.propagate();
  }
}