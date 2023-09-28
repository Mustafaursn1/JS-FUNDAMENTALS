//Declaretive function

function helloOne (){
    console.log('Hello one!')
}
helloOne()

//Anoymus fuction
//ikisi arasindaki fark Declaretive function dan önce helloOne() calisir
//Anoynus 'dan önce helloTwo() calismaz ve hata aliriz
var helloTwo =function(){
    console.log('Hello two!')

}
helloTwo()

//ES6 function syntax or arrow function

var helloTree = () => {
    console.log('Hello Three!')
}
helloTree()

//Function with arguments
function printName(name, lastName){
    console.log(name+' '+lastName)

}
printName('Mike','Smith')

//Function with return
function multiplyByTwo(number){
    var result =number * 2
    return result
}
var myResult=multiplyByTwo(5)
console.log(myResult)

//import function
import {printAge} from '../helpers/printHelper.js'
printAge(5)

//import everything

import * as helper from '../helpers/printHelper.js'

helper.printAge(10)