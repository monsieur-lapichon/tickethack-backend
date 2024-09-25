const mongoose = require('mongoose');

/* Schéma */
const cartSchema = mongoose.Schema({
   departure :String,
   arrival: String,
   date: Date, 
   price: Number, 
   isPaid: Boolean, 
});

/* Modèle */
const Cart = mongoose.model('carts', cartSchema);

/* Export */
module.exports = Cart;
