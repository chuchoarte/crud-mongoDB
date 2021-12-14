const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
});

module.exports = model('User', UserSchema);