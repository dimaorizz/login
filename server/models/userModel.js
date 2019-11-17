const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    id: Number
});

module.exports = mongoose.model('users', userSchema);