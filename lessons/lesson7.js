//Loops

//console.log('Hello World!')

//for (statement1; statement2; statement3) {}

//for loop (for i loop)

for(let i=0 ;i<10; i++){
    console.log('Hello World!'+i)  
}

var cars=["Volvo","Toyota","Tesla"]
// for of loop
for (let car of cars){
    console.log(car)
    if(car == "Toyota") {
       break
    }
    
}

//ES6  syntax for each  loop
console.log('##################')
cars.forEach(car => {
    console.log(car)

})
