const express = require('express');
const app = express();

app.get('/', ( req, res )=> {
    res.send('Hello World!');
});

app.get('/fort', ( req, res )=> {
    console.dir({ req, res });
    res.send('Hello King Davis!');
})

app.listen(8080, ()=> {
    console.log('Server listening at port 8080');
});