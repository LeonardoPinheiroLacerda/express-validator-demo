const express = require('express');
const bodyParser = require('body-parser');
const {validationResult} = require('express-validator');

const registerFormValidators = require('./middlewares/validators/forms/RegisterFormValidator');

const app = express();
const port = 8080;

app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('', (req, res) => {
    res.render('index');
})

app.get('/register', (req, res) => {
    res.render('register', {
        username: '', 
        email: ''
    });
})

app.post('/register', urlencodedParser, registerFormValidators(), (req, res) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const {username, email} = req.body;


        const alert = errors.array();
        res.render('register', {
            alert,
            username, 
            email
        });
        return;
    }

    //Here is where the backend should save this data to a database
    res.json(req.body);


})

app.listen(port, () => console.log("Running on port " + port));