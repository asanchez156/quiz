var path = require('path');

//Cargar Modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQlite
var sequelize = new Sequelize(null, null, null,
    {dialect: "sqlite", storage: "quiz.sqlite"});

//Importar la definición de la tabla Quiz en quiz.
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz = Quiz; //exportar defición de la tabla Quiz

// crea e inicializa tabla de preguntas en DB
sequelize.sync().success(function () {
    //ejecuta el manejador una vez creada la tabla
    Quiz.count().success(function (count) {
        if (count === 0) {  //la tabla se inicializa solo si está vacía.
            Quiz.create({
                pregunta: 'Capital de Italia',
                respuesta: 'Roma'
            }).success(function () {
                console.log('Base de datos inicializada')
            });
        }
        ;
    });
});