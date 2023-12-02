const webSocket = require("ws");
const httpServer = require("http");
const { publishClientMessages } = require("./clientpublisher");
const PORT = 4000
const currentTime = new Date();


const server = httpServer.createServer()


const ws = new webSocket.Server({ server });
const clients = new Set();



ws.on("connection", (ws) => {
    clients.add(ws);

    ws.send("Heepeps backend server system");

    ws.on("message", (message) => {
        console.log(`Payload received from the server @${currentTime}: ${message}`)
        // clients.forEach((client) => {
        //     if (client !== ws) {
        //         client.send(message)
        //     }
        // })
        publishClientMessages(message, ws)
    })
})




server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})