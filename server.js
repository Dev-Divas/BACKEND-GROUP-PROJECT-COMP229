let configDB = require('./config/db');
let app = require("./config/express");
let http = require('http');
let productsRouter = require('./routes/products');
let authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRouter);
configDB().catch(console.dir);
var server = http.createServer(app);

server.on('listening', onListening);
server.listen(3000);

function onListening(){
    console.log('Server running at http://localhost:3000/');
}

