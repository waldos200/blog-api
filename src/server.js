const express = require('express'); // para el servidor 
const bodyParser = require('body-parser'); // parsear las petciones de una ruta y guarda el body (leer corrctamente)
const morgan = require('morgan');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use('/api/v1', routes);
app.use(errors());

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
});
