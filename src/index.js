const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (rec, res) => {
    res.sendfile(path.resolve(__dirname + "/../public/index.html"));
});

require('./app/controllers/index')(app);
app.listen(3333);