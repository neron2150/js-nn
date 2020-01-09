import Neuron from './neuron.js';
import Network from './network.js';

let xor = [
    {a: 0, b: 0, ab: 0, best: 0},
    {a: 0, b: 1, ab: 1, best: 0},
    {a: 1, b: 0, ab: 1, best: 0},
    {a: 1, b: 1, ab: 0, best: 0}
];

let nn1 = new Network([2,2,2,1], [0,1]);
let nn2 = nn1.mutate(1).setInput([0,1]);

let result1 = nn1.think();
let result2 = nn2.think();
let err1 = 1;
let err2 = 1;
let err = 1;

let speed = 0.1;
function train2 () {
    err = 1
    nn1.setInput([0,1]);
    nn2.setInput([0,1]);
    nn1.out();
    for(let i = 0; i<4;i++) {
        result1 = nn1.think();
        result2 = nn2.think();
        
        err1 = Math.abs(1 - result1);
        err2 = Math.abs(1 - result2);
        if(err1 > err2){
            nn1 = nn2.mutate(speed);
            nn2 = nn2.mutate(speed);
            err = err2
        } else {
            nn1 = nn1.mutate(speed);
            nn2 = nn1.mutate(speed);
            err = err1
        }
    
        //console.log(result1);
        //console.log(result2);
    }
}

function train1 (){
    err = 1
    nn1.setInput([1,0]);
    nn2.setInput([1,0]);
    nn1.out();
    for(let i = 0; i<4;i++) {
        result1 = nn1.think();
        result2 = nn2.think();
        
        err1 = Math.abs(0 - result1);
        err2 = Math.abs(0 - result2);
        if(err1 > err2){
            nn1 = nn2.mutate(speed);
            nn2 = nn2.mutate(speed);
            err = err2
        } else {
            nn1 = nn1.mutate(speed);
            nn2 = nn1.mutate(speed);
            err = err1
        }

        //console.log(result1);
        //console.log(result2);
    }
}
for(let i = 0; i<7000;i++) {

    train1();
    console.log(err)
    train2();
    console.log(err)
    
}



function log( error) {
    console.clear()
    console.log(xor[0].a, xor[0].b, xor[0].ab, xor[0].best.toFixed(10));
    console.log(xor[1].a, xor[1].b, xor[1].ab, xor[1].best.toFixed(10));
    console.log(xor[2].a, xor[2].b, xor[2].ab, xor[2].best.toFixed(10));
    console.log(xor[3].a, xor[3].b, xor[3].ab, xor[3].best.toFixed(10));
    console.log(error);
    
}
