const app = express();

const express = require('express');

const rutaMain = require('./routers/main');

app.use('/', rutaMain );

app.use(express.static('./public'));

app.listen(3000, ()=>
    console.log('servidor activo en puerto 3000')
);

