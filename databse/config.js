const {connect} = require('mongoose');
const {DB_CNN} = process.env;

const dbConnection = async () => {
    try {
        await connect(DB_CNN);
        console.log('Database online');
    } catch (err) {
        console.log(err);
        throw new Error('Error connection with database');
    }
}

module.exports = {
    dbConnection
}