import Neuron from './nn/neuron';
import Network from './nn/network';
import Trainer from './nn/trainer';


const nn = new Network([2,2,2,1]);
const trainer = new Trainer();

const trainedNN = trainer.trainXor({network: nn, epoch:1, count:1});
function log( error) {
    console.clear()
    console.log(xor[0].a, xor[0].b, xor[0].ab, xor[0].best.toFixed(10));
    console.log(xor[1].a, xor[1].b, xor[1].ab, xor[1].best.toFixed(10));
    console.log(xor[2].a, xor[2].b, xor[2].ab, xor[2].best.toFixed(10));
    console.log(xor[3].a, xor[3].b, xor[3].ab, xor[3].best.toFixed(10));
    console.log(error);
    
}
