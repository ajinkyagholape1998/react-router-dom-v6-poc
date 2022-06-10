// Import express, expressWs, and http
import * as express from 'express';
import * as expressWs from 'express-ws';
import http from 'http'

// Our port
// let port = 4000;

// // App and server
// let app = express();
// let server = http.createServer(app).listen(port);

// // Apply expressWs
// expressWs(app, server);

// app.use(express.static(__dirname + '/views'));

// // Get the route /
// app.get('/', (req: any, res: any) => {
//     res.status(200).send("Welcome to our app");
// });

// // This lets the server pick up the '/ws' WebSocket route
// app.ws('/ws', async function (ws: any, req: any) {
//     // After which we wait for a message and respond to it
//     ws.on('message', async function (msg: any) {
//         // If a message occurs, we'll console log it on the server
//         console.log(msg);
//         // Start listening for messages
//     });
// });