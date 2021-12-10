const express = require('express');
const bodyParser = require('body-parser');
const db =  require('./database/conexion');
const cors = require('cors');
const app = express();

const controller = require('./controllers/persona.controller');
const port = process.env.PORT || 8080;
  
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.use('/api', controller);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});