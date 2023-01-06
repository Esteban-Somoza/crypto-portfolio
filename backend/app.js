var express = require('express');
var app = express();
const cors = require('cors');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())


app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

app.use(require('./routes/get'))
app.use(require('./routes/put'))
app.use(require('./routes/post'))
app.use(require('./routes/delete'))


// app.post('/hola', function (req, res) {
//   res.send('[POST]Saludos desde express');
// });

// app.get('/', function (req, res) {
//   res.json(db);
// });

module.exports = app;


