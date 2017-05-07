var snsParse = require('./lib/parse-sns')
var aws = require('aws-sdk');
var ses = new aws.SES();

module.exports.send = (event, context, callback) => {

  var data = snsParse.parse(event);

  var eParams = {
    Destination: {
      ToAddresses: ["qwertykeith@gmail.com"]
    },
    Message: {
      Body: {
        Text: {
          Data: JSON.stringify(data)
        }
      },
      Subject: {
        Data: "Ses Test Email"
      }
    },
    Source: "qwertykeith@gmail.com"
  };

  console.log('===SENDING EMAIL===');
  var email = ses.sendEmail(eParams, function (err, data) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log("===EMAIL SENT===");
      //      console.log(data);
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'HowdeeeeDoooooo!',
      }),
    };


    callback(null, response);
  });
  console.log("EMAIL CODE END");
  console.log('EMAIL: ', email);
};