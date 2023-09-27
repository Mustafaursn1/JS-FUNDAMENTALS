//objects

var customer={
    firstName: 'John',
    lastName:'Smith',
    cars: ["volvo","Toyota","Tesla"]

}
//Dot notation
customer.firstName="Mike"
//Bracket Notation
customer['lastName']="Silver"
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays 

var car=["volvo","Toyota","Tesla"]
console.log(car[0])
console.log(car[2])
console.log(car[4])//undefined
car[1]="BMW"
console.log(car[1])
console.log(customer.cars[0])

