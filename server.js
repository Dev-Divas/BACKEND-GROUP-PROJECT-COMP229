let configDB = require('./config/db');
let app = require("./config/express");
let http = require('http');


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