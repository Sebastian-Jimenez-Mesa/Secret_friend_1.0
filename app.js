const express = require('express')
const app = express();
const rutaMain = require('./routers/main');
const rutaUsers = require("./routers/users")

var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', rutaMain );
app.use("/", rutaUsers);

/* ---- IMPLEMENTANDO MOTOR DE PLANTILLAS ----- */
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false}));

app.use(express.json());

app.use(express.static('./public'));

app.listen(3000, ()=>
    console.log('servidor activo en puerto 3000')
);

