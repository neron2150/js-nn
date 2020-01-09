import Synaps from './synaps';
export default class Neuron {
	constructor() {
		this.synapses = [];
		this.value = 0;
		this.sum = 0;
	}
	sigmoid(sum) {	
		return 1 / (1 + Math.pow(Math.E, -sum));
	}
	
	activate() {
		this.value = this.sigmoid(this.sum)
		console.log('activate', this.sum);
		
	}
	
	addSum(value) {
		this.sum += value;
		console.log('addSum', this.sum);
		
	}

	propagate() {
		this.synapses.forEach(
			({weight, output}) => {
				output.addSum(this.value * weight);				
			}
		)
		
	}
}
