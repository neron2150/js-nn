import Neuron from './neuron';
import Layer from './layer';
import _ from 'lodash';
export default class Network {
	constructor (counts, inputs) {
		let lastLayer = undefined
		this.layers = Array(counts.length - 1)
			.fill()
			.map((layer, index) => {
				lastLayer = new Layer(counts[index], counts[index + 1], lastLayer ? lastLayer.outputNeurons: null);
				return lastLayer;
			});
	}
	setInput(inputs) {
		inputs.forEach((value, index) => {	
			this.layers[0].inputNeurons[index].sum = value;
		}) 
		this.layers[0].activateInput();
		return this;
	}
	out() {
		this.layers.forEach((layer, layerNum) => {
			const str = layer.synapses.reduce( (acc = {str:''}, synaps, synapsNum) => {
				acc.str = acc.str + ' ' + synaps.weight.toFixed(1);
				return acc;
			})
			
		});
		return this;
	}

	think() {
		this.layers.forEach(layer => layer.pulse());
		this.layers[this.layers.length-1].activateOutput();
		const lastSynapsNum = this.layers[this.layers.length-1].synapses.length -1;
		return this.layers[this.layers.length-1].outputNeurons.map(({value}) => value);
	}
	mutate(speed){
		let clone = _.cloneDeep(this)
		clone.layers.forEach((layer)=>layer.mutate(speed));
		return clone;
	}
	
};
