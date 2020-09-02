const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciceShema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
}, {
    timestamps: true
});

const Exercice = mongoose.model('Exercice', exerciceShema);

module.exports = Exercice;