const mongoose = require('mongoose');

// Intégrez votre connecString MongoDB dans cette variable
const connectionString = 'mongodb+srv://dejaniremirage:LaCapsule72!@clusterdjani.mpjft.mongodb.net/TicketHack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))
 .catch(error => console.error(error));

module.exports = connectionString; 