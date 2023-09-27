//Concatination and interpolation
var price=80
var itemName="Cup"
var messageToPrint ="The price for your "+ itemName+" is "+price+ " dollars"//concatination
var messageToPrint2=`The price  for your ${itemName} is ${price} dollars `//interpolatination
console.log(messageToPrint)
console.log(messageToPrint2)