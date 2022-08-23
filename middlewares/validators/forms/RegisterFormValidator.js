const usernameValidator = require('./../fields/UsernameValidator');
const emailValidator = require('./../fields/EmailValidator');
const passwordValidator = require('./../fields/PasswordValidator');

function registerFormValidators(req) {
    console.log(req);
    return [
        ...usernameValidator(), 
        ...emailValidator(), 
        ...passwordValidator()
    ];
}

module.exports = registerFormValidators;