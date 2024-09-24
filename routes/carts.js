var express = require('express');
var router = express.Router();

require('../models/connection')
const Cart = require('../models/carts');
const Order = require('../models/orders')


// créer une route qui affiche les "trips" ajoutés à la collection "carts"
router.get('/carts', (req, res) => {
    Cart.find()
      .then(data => res.json({ carts: data }))
  });

// créer une route qui envoie les "trips" de "carts" vers "ORDERS" au clic sur "purchase" et vide le cart

  router.post('/orders', (req, res) => {
    const trips = req.body.departure
    const total = 
  
    const newOrder = new Order({
      trips: departure,
      total: arrival,
  
    })
    Order.find()
      .then(data => {
        console.log(data)
        res.json({ orders: data })
      })
    newOrder.save();
  
  
  })
//**Clic Purchase** = route post vers "orders", panier vidé, renvoie vers la page =>Bookings

// créer une route qui envoie les "trips" de "carts" vers "ORDERS" au clic sur "purchase" et vide le cart

//créer une fonction TOTAL montant des trips
