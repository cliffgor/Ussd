## USSD Application
- This ia a USSD app that enables users to key in a shortcode on 
their phone and select some of the options given to subscribe to a specific service.

## Technologies 
1. Node Js
2. Deployement(Heroku)
3. Africas Talking Api
4.  Ngrok (Tunneling software)

# Installation
- Clone using the repository [USSD](https://github.com/cliffgor/Ussd.git)
- Key in your credentials as follows below 
 ```
 var options = {

sandbox: false, //false if going to prod

apiKey: '', //Your Africas Talking Sandox or Live Key

username: '', // Your Username: "sandbox" for testing...

format: 'json
```
- Run the server using ` node server.js	` in your teminal
-  Open `Ngrok` and runthe port server using this command `ngrok http 3000`

- Add your ngork url as follows `https://398d138f.ngrok.io/ussd` as the callback url in your africastalking sandbox
- And you'll be amazed :wink:
- Open the simuulator and type your given code eg (`*384*123#`)
