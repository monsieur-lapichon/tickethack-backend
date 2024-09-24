const mongoose = require('mongoose');

/* Schéma */
const orderSchema = mongoose.Schema({
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: "trips" }],
});

/* Modèle */
const Order = mongoose.model('orders', orderSchema);

/* Export */
module.exports = Order;
