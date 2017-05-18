

let prompt = require('prompt'); 
let request = require('request'); 
let chalk = require('chalk');
var figlet = require('figlet');


clear();
console.log(
  chalk.green(
    figlet.textSync('Currency', { horizontalLayout: 'full' })
  )
); 
console.log(chalk.blue('This app converts your Euros to USD ')); 

 
//Function to convert from eur 

 let cur = { 
 properties: { 
    to: { 

      message: chalk.red('Enter the 3 alphabet of the currency you are converting of USD i.e USD')

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
    console.log('The conversion of 1 ' + 'Euros' + ' TO ' + ' ' + '\n' +

      to + ' as at : ' + data.date + ' is ' +  data.rates.USD) ; 
    } 
  ) 
}) 
