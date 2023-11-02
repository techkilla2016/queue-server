
const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    token: {
        type: String,
        required: true,
        default: 'alsdkfj0oij2l3j4lk.2342lk34234asldkfjals.laskdfij234jl2k34'
    },

}, { timestamps: true })

const authModel = new mongoose.model('auth', Schema)
module.exports = authModel