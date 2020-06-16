const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const app = express();
const port = 3500;
const db = require('./db/index');

app.use(bodyParser.urlencoded({ extended: false }));

//set up db
//db.connectToDb();

//loading routes
require('./routes/routes')(app);

//create logger
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
      ]
});



app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})