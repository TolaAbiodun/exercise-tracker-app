// create user schema 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { 
        type: 'string',
        required: true,
        unique: true,
        trim: true,
        minLength: 5
    },

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;