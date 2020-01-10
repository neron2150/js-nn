import Neuron from './neuron.js';
import Network from './network.js';

let xor = [
    {a: 0, b: 0, ab: 0, best: 0},
    {a: 0, b: 1, ab: 1, best: 0},
    {a: 1, b: 0, ab: 1, best: 0},
    {a: 1, b: 1, ab: 0, best: 0}
];
// let nn1 = new Network([2,2,1]);
// let result1 = 0;
// let win = false
// let nn2;
// let result2 = 1;
// let result3 = 0;
// while(true) {
//     nn2 = nn1.mutate();

//     nn2.setInput([1,0]);
//     result1 = nn2.think();
//     nn2.setInput([0,1]);
//     result2 = nn2.think();
//     if(result3 < result2 - result1) {
//         nn1 = nn2.clone();
//         result3 = result2 - result1
//         console.clear();
//         console.log(result2 - result1);
//     }
// }
    // let nn = new Network([1,0]);
    // nn.setInput([1,0]);
    // result1 = nn.think();
    // console.log(result1);
    
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
