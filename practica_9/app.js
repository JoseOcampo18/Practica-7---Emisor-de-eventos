const express = require('express');
const app = express();

app.get('/', (req, res) => { //route handler
    res.send('Hello World, this is the root route');
});


app.listen(3000); //Puerto por donde escucha
app.get('/uno', (req, res) => { //route handler
    res.send('Hello World, from route one');
});

//Agregado por mi
app.get('/jose', (req, res) => { //route handler
    res.send('Hello world, from Joses route');
});

//Prueba
app.get('/prueba', (req, res) => { //route handler
    res.send('<h1> Hello world, from route Prueba </h1>' ); //Contenido con HTML
});