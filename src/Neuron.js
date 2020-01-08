import Synaps from './synaps';
export default class Neuron {
	constructor() {
		this.synapses = [];
		this.value = 0;
		this.sum = 0;
	}
	sigmoid(sum) {
		console.log(sum);
		
		return 1 / (1 + Math.pow(Math.e, sum));
	}
	
	activate() {
		this.value = this.sigmoid(this.sum)
	}

	propagate() {
		this.synapses.forEach(
			({weight, output}) => {
				output.sum += this.value * weight;				
			}
		)
		
	}
}
