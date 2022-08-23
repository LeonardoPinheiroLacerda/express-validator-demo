const {body} = require('express-validator');

function passwordValidator(){
    return [
        body('password', 'password must contain numbers, letters and has 8 characters.').matches(/^(?=\D*\d)[a-zA-Z0-9]{8}$/)
    ];
}

module.exports = passwordValidator;