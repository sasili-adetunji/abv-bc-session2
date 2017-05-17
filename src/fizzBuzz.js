/* A fizzBuzz function

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Home Session Day2
Date: 17 May, 2017.

*/

module.exports = {

fizzBuzz: function (i){
  if (i % 3 === 0){
    if (i % 5 === 0){
    return "FizzBuzz";}
  
    else{
    return "Fizz";}
  }
  else if (i % 5 === 0){
    return "Buzz";
    
  }
  else
  return i;
  
}
}