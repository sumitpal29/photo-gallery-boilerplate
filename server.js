const express = require('express');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 8080;
const app =  express();
const myMailAddress = 'sumit@fusioncharts.com'

// configuring mailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: myMailAddress,
           pass: '**PurnimaBabu9'
       }
   });

// to support JSON-encoded bodies
app.use(express.json());
// to support URL-encoded bodies
app.use(express.urlencoded()); 

app.use(express.static(__dirname + "/dist/"));

// Defining Routes
app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + '/dist/index.html');
});
app.post('/mail', function(req, res) {
    const mailerName = req.body.mailerName;
    const mailerAdd = req.body.mailerAdd;
    const mailerMsg = req.body.mailerMessage;

    const mailOptions = {
        from: mailerAdd, // sender address
        to: myMailAddress, // list of receivers
        subject: `Mail from ${mailerName}`, // Subject line
        html: `<p>${mailerMsg}</p>`// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            res.send(err)
        else
            res.send('success')
    });
});

// Which port to listen
app.listen(PORT);
// eslint-disable-next-line 
console.log('Vola.. Server Started!!');