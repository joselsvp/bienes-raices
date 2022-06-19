//last vension to import express
const express = require('express')

//create app
const app = express()

//Routing
app.get('/', function(request, response) {
    response.send('Hola mundo en express')
});


//Define Port and start project
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running in port 3000`);
});