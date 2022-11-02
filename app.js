const http = require("http")
const express = require('express')
const socketio = require("socket.io")
const app = express();
const server = http.createServer(app);
//const io = socketio.listen(server);


app.set("port",process.env.PORT || 3000);

const rutaMain = require('./routers/main');
const rutaUsers = require("./routers/users")

var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', rutaMain );
app.use("/users", rutaUsers);

/* ---- IMPLEMENTANDO MOTOR DE PLANTILLAS ----- */
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false}));

app.use(express.json());

app.use(express.static('./public'));

server.listen(app.get("port"),()=>{
    console.log("Servidor corriendo e este puerto" + app.get("port"));
});









