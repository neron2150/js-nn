import Synaps from "./synaps";
import Neuron from "./neuron";

export default class Layer {

  constructor(inputCount, outputCount) {
    const inpunNeurons = this.createArrayOfNewrons(inputCount);
    const outputNeurons = this.createArrayOfNewrons(outputCount);
    this.synapses = [];
    inpunNeurons.forEach( (input) => 
      outputNeurons.forEach( (output) =>{
        const synaps = new Synaps({input, output, weight: Math.random()})
        this.synapses.push(synaps)
        input.synapsesgit .push(synaps)
      }
      )
    )
  }

  pulse() {
    this.synapses.forEach((synaps) => synaps.pulse())
  }

  createArrayOfNewrons(count) {
    return new Array(count)
      .fill()
      .map(() => new Neuron());
  }
}