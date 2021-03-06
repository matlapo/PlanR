var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/', function(req, res, next) {
    const body = req.body;
    try {
        var fullName = body.contactFormFullName;
        var email = body.contactFormEmail;
        var message = body.contactFormMessage;

        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                secure: false,
                auth: {
                    user: 'umbawellness@gmail.com',
                    pass: 'jaja2637'
                },
                tls: {
                    rejectUnauthorized: false
                }
                });
        
            // setup email data with unicode symbols
            let mailOptions = {
                from: 'umbawellness@gmail.com', // sender address
                to: 'jayabisaad@gmail.com', // list of receivers
                subject: 'Message from ' + fullName, // Subject line
                text: 'Full Name: ' + fullName + '\nEmail: ' + email + '\nMessage: ' + message, // plain text body
            };
        
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
            });

        });
        return res.sendStatus(200);
       
    } catch {
        return res.sendStatus(400);
    }
});


module.exports = router;
