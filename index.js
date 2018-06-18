var express = require('express')
var app = express()

var options = {
    sandbox: false, //false if going to prod
    apiKey: '7a071a711f37d71a8ea4ef86bed536e241de86182aa23354c4b0d2c01bc29672', //Your Africas Talking Sandox or Live Key
    username: 'cliffgor', // Your Username: "sandbox" for testing... 
    format: 'json'
};
var AfricasTalking = require('africastalking')(options);
app.post('/ussd', new AfricasTalking.USSD((params, next) => {
    var endSession = false;
    var message = '';
    // console.log(params); //DEBUGGING REMOVE 

    if (params.text === '') {
        message = "Welcome to My Awesome Service \n";
        message += "1: To Halla back \n";
        message += "2: For more awesomeness";

    } else if (params.text === '1') {
        message = "Yoh 'Sup?";
        endSession = true;

    } else if (params.text === '2') {
        message = "Enter 1 for a shocker \n";
        message += "Enter 2 for another shocker";
        endSession = false;
    } else if (params.text === '2*2') {

        message = "Dude.... \n";
        endSession = true;

    } else if (params.text === '2*1') {

        message = "You mad broh?! \n";
        endSession = true;

    } else {
        message = "Invalid option";
        endSession = true;
    }

    next({
        response: message,
        endSession: endSession
    });
}));

app.get('/', function(req, res) {
    res.send('Alive!')
})

app.listen(3000, function() {
    console.log('App live on port 3000!')
})