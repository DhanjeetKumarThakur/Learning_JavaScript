const coding = ["js", "ruby", "java", "python", "cpp"]

//+++++++ forEach() function +++++++++++

//forEach(callback function), now what is callback function ?
// Callback function is a function which passed has a parameter inside another function. 


// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {    
    console.log(item.languageName);
} )

//Has it is a array of object we can destructure it
myCoding.forEach( (item) => {
    let {languageName, languageFileName} = item
    console.log(`${languageName} it's file extension ${languageFileName}`);
} )