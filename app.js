const validator = require('validator')
const chalk = require('chalk')

console.log(validator.isEmail('jawale.nandu@gmail.com'))

console.log(chalk.green("Success!"))
