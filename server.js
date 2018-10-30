const express = require('express');
const PORT = process.env.PORT || 8080;
const app =  express();

app.use(express.static(__dirname + "/dist/"));
// Defining Routes
app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + '/dist/index.html');
});
// Which port to listen
app.listen(PORT);
// eslint-disable-next-line 
console.log('Vola.. Server Started!!');