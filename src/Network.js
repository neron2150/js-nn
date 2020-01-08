import Neuron from './Neuron';
class Network {
	constructor (counts) {
		this.layers = [];
		counts.forEach((count, index) => {
			let pastLayer = index ? this.layers[index-1] : null;
			let currentlayer = Array(count).fill({});
			console.log(currentlayer);
			currentlayer = currentlayer.map(()=> {
				return new Neuron(pastLayer);
			});
			this.layers[index] = currentlayer;
		})
	}

	recursiveOutput(acc = '', index = 0) {
		if (this.index) {
			return 
		}
	}
};
export default Network;
