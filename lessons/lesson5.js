//Logcal "AND"

console.log(true && true) //all values have to be TRUE for expression to be TRUE
console.log(true && false) //false 

//Logical "OR"
console.log(true || false)// True any value should be TRUE for the expression to be TRUE 
console.log(false || false) // false

var ageIsMoreThanEighteen =true
var isUSCitizen =true

var eligiblityForDriverslicense= ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: '+ eligiblityForDriverslicense)