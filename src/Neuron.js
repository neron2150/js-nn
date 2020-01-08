class Neuron {

	constructor(inputNeurons = []) {
		this.inputNeurons = inputNeurons;
		this.sum = 0;
		this.value = 0;
		this.error = 0;
	}

	setOutputNeurons(neurons) {
		this.outputNeurons = neurons;
		this.outputWeights = neurons.map(() => Math.random());
	}

	activate() {
		this.value = 1 / (1 + Math.pow(Math.e, this.sum));
	}

	propagate() {
		this.outputWeights.forEach(
			(weight, index) => outputNeurons[index].sum += this.value * weight)
	}
}
export default Neuron;
