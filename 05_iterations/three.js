// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "Ind") 
/*
Output: 
Map(3) {
  'IN' => 'Ind',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
 
*/

// since key is repeated here so it will update the existing values
//By this we can say in Map key should be unique


// console.log(map);

for (const key of map) {
    console.log(key);
}
/*
Output : 
[ 'IN', 'Ind' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

//Here it we can see the records are displayed as [key, value] pairs 

//So how we can display only key or  values of Map ?
//Using destructuring 
for (const [key, value] of map) {  //here we destruct the Map
     console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const {key, value} of myObject) {
    console.log(key, ':-', value); //TypeError: myObject is not iterable
}

//So for of loop can't be used for objects