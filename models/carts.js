const mongoose = require('mongoose');

/* Schéma */
const cartSchema = mongoose.Schema({
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: "trips" }],
});

/* Modèle */
const Cart = mongoose.model('carts', cartSchema);

/* Export */
module.exports = Cart;
