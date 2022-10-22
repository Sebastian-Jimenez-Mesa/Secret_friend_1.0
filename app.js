const express = require('express')
const app = express();

const rutaMain = require('./routers/main');

app.use('/', rutaMain );

/* ---- IMPLEMENTANDO MOTOR DE PLANTILLAS ----- */
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('./public'));

app.listen(3000, ()=>
    console.log('servidor activo en puerto 3000')
);

