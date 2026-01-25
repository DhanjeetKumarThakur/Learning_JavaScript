'use strict';

const marvel_heroes =  ["Iron Man", "Thor", "Captain America"];
const dc_heroes = ["Batman", "Superman"];

const all_heroes = marvel_heroes.push(dc_heroes); //push Adds the elements at last so here it treats the entire array has single element and adds it at last

//console.log(all_heroes); --> output : 4
//console.log(marvel_heroes); //output: [ 'Iron Man', 'Thor', 'Captain America', [ 'Batman', 'Superman' ] ]

//console.log(marvel_heroes[3]);
marvel_heroes.pop();  //removes the last element from array
//console.log(marvel_heroes);

//const heroes = marvel_heroes.concat(dc_heroes);
//console.log(heroes); //[ 'Iron Man', 'Thor', 'Captain America', 'Batman', 'Superman' ]

const all = [...marvel_heroes, ...dc_heroes] //spread operator 
//console.log(all); //[ 'Iron Man', 'Thor', 'Captain America', 'Batman', 'Superman' ]


const anotherArray = [1, 2, 3, [4], [5,6], 7,[9,10,11]]; 
const real_another_array = anotherArray.flat(Infinity);
//console.log(real_another_array);
/*
output: 
[
  1, 2, 3,  4,  5,
  6, 7, 9, 10, 11
]
  */


console.log(Array.isArray("Dhanjeet")); //Output : false
console.log(Array.from("Dhanjeet")); //Output : [ 'D', 'h', 'a', 'n', 'j', 'e', 'e', 't']
console.log(Array.from({name: "Dhanjeet"})); //Output : []

console.log(Array.of(100, 200, 300)); //Output : [100, 200, 300]
