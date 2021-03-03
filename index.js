const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Database connection
const connect = require('./database/connect');
// require routes
const testAPI = require('./routes/testAPI');

// Create express App
const app = express();
const port = 3000;
// Common Configurations
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Begin route section 
app.use('/api/v1', testAPI);
// End route section

app.listen(process.env.port || port, () => {
    console.log(`NodeJS server start on port ${port}`);
});