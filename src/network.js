import Neuron from './neuron';
import Layer from './layer';

export default class Network {
	constructor (counts, inputs) {
		this.layers = Array(counts.length - 1)
			.fill()
			.map((layer, index) => 
				new Layer(counts[index], counts[index + 1])
			)
			inputs.forEach((value, index) => {				
				this.layers[0].synapses[index].input.sum = value
			}
			) 
	}

	think() {
		this.layers.forEach(layer => layer.pulse());
		const lastSynapsNum = this.layers[this.layers.length-1].synapses.length -1;
		return this.layers[this.layers.length-1].synapses[lastSynapsNum].output.value;
	}
};
