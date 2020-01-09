import Neuron from './neuron';
import Layer from './layer';

export default class Network {
	constructor (counts, inputs) {
		let lastLayer = undefined
		this.layers = Array(counts.length - 1)
			.fill()
			.map((layer, index) => {
					lastLayer = new Layer(counts[index], counts[index + 1], lastLayer ? lastLayer.outputNeurons: null);
				return lastLayer;
			})
			inputs.forEach((value, index) => {	
				this.layers[0].inputNeurons[index].sum = value;
				console.log(this.layers[0].inputNeurons[index].sum);
			}
			) 
	}
	out() {
		this.layers.forEach((layer, layerNum) => {
			console.log("layer", layerNum);
			layer.synapses.forEach( (synaps, synapsNum) => {

			console.log("    synaps", synapsNum, '{');
				console.log('	i sum =',synaps.input.sum, 'i val =', synaps.input.value );
				console.log('	o sum =',synaps.output.sum,'o val =',  synaps.output.value );
				
			console.log('    }');
			})
			
		})
	}

	think() {
		this.out()
		this.layers.forEach(layer => layer.pulse());
		this.layers[this.layers.length-1].activate();
		const lastSynapsNum = this.layers[this.layers.length-1].synapses.length -1;
		
		this.out()
		return this.layers[this.layers.length-1].synapses[lastSynapsNum].output.value;
	}
};
