const {body} = require('express-validator');

function usernameValidator(){
    return [
        body('username', 'username must be +3 characters long.').exists().isLength({min: 3}),
    ];
}

module.exports = usernameValidator;