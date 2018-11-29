const express = require('express');
const app = express();
const todoController = require('./controllers/todoController');
//set template engine
app.set('view engine', 'ejs')
app.use(express.static('./public'))

//fire controller
todoController(app);

app.listen(9000, console.log('Listening to 9000'));