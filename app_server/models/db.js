const mongoose = require('mongoose');
const dbURI ='mongodb+srv://RKAUR1060:Cc8641060@@cluster0-e5xtw.mongodb.net/test?retryWrites=true&w=majority'; 
//mongodb+srv://lucky:<password>@cluster0-adex2.mongodb.net/test?retryWrites=true&w=majority
// mongoose.connect(dbURI); 
mongoose.connect(dbURI, {dbName: 'foodDB'});
mongoose.connection.on('connected', () => { 
console.log(`Mongoose connected to ${dbURI}`); 
}); 
mongoose.connection.on('error', err => { 
console.log('Mongoose connection error:', err); 
}); 
mongoose.connection.on('disconnected', () => { 
console.log('Mongoose disconnected'); 
}); 
const gracefulShutdown = (msg, callback) => { 
mongoose.connection.close( () => { 
console.log(`Mongoose disconnected through ${msg}`); 
callback(); 
}); 
}; 
// For nodemon restarts ❹
process.once('SIGUSR2', () => { 
gracefulShutdown('nodemon restart', () => { 
process.kill(process.pid, 'SIGUSR2'); 
}); 
}); 
// For app termination ❹
process.on('SIGINT', () => { 
gracefulShutdown('app termination', () => { 
process.exit(0); 
}); 
}); 
// For Heroku app termination 
process.on('SIGTERM', () => { 
gracefulShutdown('Heroku app shutdown', () => { 
process.exit(0); 
}); 
require('/food');
});