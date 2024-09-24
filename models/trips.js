const mongoose = require('mongoose');

/* Schéma */
const tripSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
});

/* Modèle */
const Trip = mongoose.model('trips', tripSchema);

/* Export */
module.exports = Trip;
