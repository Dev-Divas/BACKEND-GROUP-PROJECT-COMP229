let configDB = require('./config/db');
let app = require("./config/express");
let http = require('http');
<<<<<<< HEAD
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

=======


async function startServer() {
    try {
        await configDB();
        const server = http.createServer(app);
        server.listen(3000, () => {
            console.log('Server running at http://localhost:3000/');
             });
            }
            catch (error) {
                console.error(
                    "Database connection failed:",
                    error
                );
                process.exit(1);
            }
        }
        startServer();
>>>>>>> origin/main
