var http =  require("http");
const querystring = require('querystring');
var morgan = require('morgan')

var server = http.createServer(function(res, req){
    var user = {
        name:  "nva",
        pass: "12345678"
    }
    var formData = "";
    var isLogin = false;

    var formLogin =  `
        <form action="http://127.0.0.1:5000/" method="post">
        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>

            <button type="submit">Login</button>
        </div>
        </form> 
        <style>
        /* Bordered form */
          form {
            border: 3px solid #f1f1f1;
          }

          /* Full-width inputs */
          input[type=text], input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
          }

          /* Set a style for all buttons */
          button {
            background-color: #04AA6D;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
          }

          /* Add a hover effect for buttons */
          button:hover {
            opacity: 0.8;
          }

          /* Extra style for the cancel button (red) */
          .cancelbtn {
            width: auto;
            padding: 10px 18px;
            background-color: #f44336;
          }

          /* Center the avatar image inside this container */
          .imgcontainer {
            text-align: center;
            margin: 24px 0 12px 0;
          }

          /* Avatar image */
          img.avatar {
            width: 40%;
            border-radius: 50%;
          }

          /* Add padding to containers */
          .container {
            padding: 16px;
          }

          /* The "Forgot password" text */
          span.psw {
            float: right;
            padding-top: 16px;
          }

          /* Change styles for span and cancel button on extra small screens */
          @media screen and (max-width: 300px) {
            span.psw {
              display: block;
              float: none;
            }
            .cancelbtn {
              width: 100%;
            }
          }
        </style>
    `

    logincess = `
    <!DOCTYPE html>
      <html>
      <title>W3.CSS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-ios.css">

      <body>
      <div class="w3-container">
        <h1>Wellcom to Website</h1>
        <div class="w3-panel w3-ios-deep-blue">
          <h2>Hello</h2>
          <p>Congratulations, you have successfully logged into the website!!! </p>
        </div>
      </div>

      </body>
      </html>
    `
    res.on("data", function(data){
        formData = data + "";

        formData = formData.split("&");

        var username = formData[0].split("=");
        var pass = formData[1].split("=");

        var uname = username[1];
        var psw = pass[1];
        
        isLogin = user.name == uname && user.pass == psw;
    })

    res.on("end", function(){
        req.statusCode = 200; 
        req.setHeader('Content-Type', "text/html");
        if(isLogin){
            req.end(logincess);
        } else {
            req.end(formLogin);
        }
    })       
})

server.listen("5000", "127.0.0.1");

