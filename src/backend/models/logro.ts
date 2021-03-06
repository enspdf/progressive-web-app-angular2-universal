const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const logroSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    author: {type: String, require: true}
});

export const Logro = mongoose.model("Logro", logroSchema);