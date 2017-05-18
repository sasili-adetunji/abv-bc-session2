

let prompt = require('prompt'); 
let request = require('request'); 
let figlet = require('figlet');
let chalk = require('chalk');


console.log(chalk.blue('Currency')); 
console.log(chalk.green('This app converts your Euros to any other Currency')); 

 
//Function to convert from eur 

 let cur = { 
 properties: { 
    to: { 

      message: '3 letter currency Alphabet you are converting TO: USD, GBP' 

    }, 
      } 
}; 
prompt.start(); 
prompt.get(cur, function (err, result) { 
    let from    = result.from, 
        to  = result.to; 
    let link = "http://api.fixer.io/latest?symbols=USD" + to ; 
    request(link, function (err, res, data){ 
    if (err) return console.log(err); 

    data = JSON.parse(data); 
//Display currency information 
    console.log('The conversion of 1 ' + 'Euros' + ' TO ' + ' ' + '\n' +

      to + 'as at : ' + data.date + ' is ' +  data.rates) ; 
    } 
  ) 
}) 
