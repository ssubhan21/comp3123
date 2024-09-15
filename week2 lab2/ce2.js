//Question1
/*const greeter = (myArray, counter) => {
    const greetText = 'Hello';
    for (const name of myArray) {
      console.log(`${greetText} ${name}`);
    }
  };
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
  */

  //Question2
 /* const capitalize = (str) => {
    const [first, ...rest] = str;  
    return first.toUpperCase() + rest.join('').toLowerCase();  
  
  console.log(capitalize('fooBar'));  
  console.log(capitalize('nodeJs'));  */
  

  //Question3
  /*const colors = ['red', 'green', 'blue'];

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  
  const capitalizedColors = colors.map(capitalize);  
  
  console.log(capitalizedColors); */
  
  //Question4
  /*var values = [1, 60, 34, 30, 20, 5];

  const filterLessThan20 = values.filter(value => value < 20);
  
  console.log(filterLessThan20);*/


  //question5
  /*var array = [1, 2, 3, 4];


const calculateSum = array.reduce((acc, value) => acc + value, 0);

const calculateProduct = array.reduce((acc, value) => acc * value, 1);

console.log(calculateSum);     
console.log(calculateProduct); */

//question6
// Car class
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `Model: ${this.model}, Engine: ${this.year}`;
    }
  }
  
  // Sedan subclass extending Car
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year);  // Call the parent constructor to set model and year
      this.balance = balance;
    }
  
    info() {
      return `${this.details()}, Balance: ${this.balance}`;
    }
  }
  
  // Create instances
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details());  // Output: Model: Pontiac Firebird, Engine: 1976
  
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());    // Output: Model: Volvo SD, Engine: 2018, Balance: 30000
  

  
  