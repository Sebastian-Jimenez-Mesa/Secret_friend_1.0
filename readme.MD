Grupo Sala 5 - Erika polo - Sebastián Jimenez

Documentación - Secret friend 1.0

1. Para lanzar el servidor debes instalar la dependencia de Nodemon
2. Instala nodemon ejecutando el siguiente comando en la terminal "npm install -g nodemon"
3. Luego de instalar el nodemon ejecuta npm start en la terminal para lanzar el servidor
4. Si todo sale bien veras en la terminal el siguiente mensaje "servidor activo en puerto 3000"
5. El formulario de registo tiene validaciones en el Front End realizadas con JavasCript para enriquecer la experiencia de usuario y tener un mayor seguridad en el aplicativo web.
6. Los grupos que aparecen en el formulario no están puestos de forma manual, se traen directamente desde la Base de datos usando relaciones y EJS para imprimir cada uno de los grupos.
7. Se crea la ruta por post y el metodo para registrar usuarios, ya se pueden registrar usuarios en la base de datos.

---------------------- // -------------------------

Al registrar el ususario en la vista de registro ser redirige a una vista donde simulamos el juego de amigo secreto, se puede crear un usuario, editarlo y eliminarlo, no logramos traer a el usuario de la base de datos, por eso hicimos una simulación de como sería el juego, hay un botón que dice jugar pero no logramos la funcionalidad de enviarle un correo al usuario con su respectivo amigo secreto.
