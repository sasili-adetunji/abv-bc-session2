

let prompt = require('prompt'); 
let request = require('request'); 
let chalk = require('chalk');
let figlet = require('figlet');
let clear = require('clear');



clear();
console.log(
  chalk.green(
    figlet.textSync('Currency', { horizontalLayout: 'full' })
  )
); 
console.log(chalk.blue('This app converts Euros to US Dollars ')); 

 
//Function to convert from eur 

 let cur = { 
 properties: { 
    to: { 

      message: chalk.red('Enter the 3 alphabet of the currency you are converting i.e USD')

    }, 
      } 
}; 
prompt.start(); 
prompt.get(cur, function (err, result) { 
    let from    = result.from, 
        to  = result.to.toUpperCase(); 
    let link = "http://api.fixer.io/latest?symbols=USD" + to ; 
    request(link, function (err, res, data){ 
    if (err) return console.log(err); 

    data = JSON.parse(data); 
    //Display currency information 
    console.log('The conversion of 1 ' + chalk.blue('Euros') + ' TO ' + ' ' + '\n' +

      chalk.blue(to) + ' as at : ' + chalk.red(data.date) + ' is ' +  chalk.green(data.rates.USD)) ; 
    } 
  ) 
}) 
