const express = require('express');
const app = express();
const port = 8080;

const todos = [
    'Write http endpoints',
    'Abstract methods',
    'Create CLI tool',
    'Save todos in JSON'
];

app.get('/', ( req, res )=> {
    res.json( todos );
});

app.listen( port, ()=> {
    console.log(`Server listening at port ${ port }`);
});