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
        message = "Welcome to Cross Farmers";
        message += "What is your question on? Reply with \n ";
        message += "1: Farming \n";
        message += "2: Market\n";
        message += "4: To exit the system"

    } else if (params.text === '1') {
        message = "Please Select Farming Section, Reply with";
        message += "1: Cow Dairy Farming \n";
        message += "2:Horticulture Farming \n";
        message += "3: Tomato Farming \n";
        endSession = false;

    } else if (params.text === '2') {
        message = "1: Farmer \n";
        message += "2: Buyer";
        endSession = false;
    }else if (params.text === '2*1') {
         message = "Please Select Farm Yield? Reply with \n";
         message += "1: Carrots \n";
         message += "2: Potatoes \n";
         message += "3: Cabbage \n"
         message += "4: Cabbage"
         endSession = false;
    }else if (params.text === '4') {
        message = "Thank you for using Cross Farmers. Please comeback again";
        endSession = true;

    } else if (params.text === 'hello') {

        message = "Dude.... \n";
        endSession = true;

    } else if (params.text === '2*1*1') {

        message = "1: Naivasha \n";
         message += "2: Nyandarua \n";
         message += "3: Nakuru \n"
         message += "4: Enginia"
         endSession = false;

    } else if (params.text === '1*3') {
        message = "Type your Tomato Farming Question";
        message += " \n";
        endSession = true;

    } else if (params.text === '2*1*3*1') {

        message = "Thank you for using Cross Farmers, a reply text will be sent to your mobile shortly with the prices \n";
        endSession = true;

    }else if (params.text === '2*1*3') {
        message = "Select Town / City  Reply with \n";
        message += "1: Nairobi \n";
        message += "2: Kisumu \n";
        message += "3: Mombasa \n"
        message += "4: Eldoret"
        endSession = false;
   }else {
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

const PORT = process.env.PORT


app.listen(PORT, function() {
    console.log('App live on port 3000!')
})