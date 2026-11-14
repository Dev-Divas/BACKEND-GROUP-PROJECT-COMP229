
const configDB = require('./config/db');
const app = require('./config/express');
const http = require('http');

async function startServer() {
    try {
        await configDB();

        const PORT = process.env.PORT || 3000;
        const server = http.createServer(app);

        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

startServer();
