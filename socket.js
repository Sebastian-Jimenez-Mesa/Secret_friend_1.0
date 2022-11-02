const nodemailer = require("nodemailer")

module.exports = function(io,app){
    io.on("connection",(socket) =>{

        //Se ha conectado un nuevo usuario

        socket.on("enviar correos",(jugadores, parejas)=>{
            for (let i = 0; i < jugadores.length; i++) {
                const j = jugadores[i];
                const p = jugadores[i];
                console.log(j[0] + "- >" + p[0])
                console.log(j[1] + "- >" + p[1])
                enviarCorreo(
                    j[1],//correo
                    "Amigo Secreto",//asunto
                    `<h4>Hola ${j[0]}</h4>Tu amigo secreto es: ${p[0]} (${p[1]})<br><span style="color:light">No reveles esta informacion a otra persona<span>`//Cuerpo del mensaje (html)
                )
            }
        })
    })
    function enviarCorreo(para, asunto, html){
        //tienen que crearse un correo en @outlook , en @hotmail
        const transporter = nodemailer.createTransport({
            host:'smtp-mail.outlook.com',
            secureConnection: false,
            port: 587,
            tls:{
                ciphers: 'SSLv3'
            },
            auth:{
                user: 'sebastianjm_1998@outlook.com',
                pass: "Sabrewuls1998*"
            }
        })
        const correo_opns = {
            from: `"No responder" no-repley-@outlook.com` ,
            to:para,
            subject: asunto + '' + Math.floor(Math.randon() * 1000),
            html
        }
        transporter.sendMail(correo_opns,(error,info)=>{
            if(error){
                io.to(socket.id).emit("correo no enviado", error)
                console.log(error)
            }else{
                io.to(socket.id).emit("correo enviado", para);
            }

        })
    }
    
};