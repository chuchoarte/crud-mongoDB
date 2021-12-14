const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./databse/config');
const app = express();
const {PORT} = process.env;

dbConnection();

app.use(express.json());
app.use('/api/users', require('./routes/user'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));