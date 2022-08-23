const {body} = require('express-validator');

function emailValidator(){
    return [
        body('email', 'email must be valid').isEmail().normalizeEmail()
    ];
}

module.exports = emailValidator;