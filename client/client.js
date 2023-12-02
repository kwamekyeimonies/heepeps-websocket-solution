const webSocket = require("ws");

const serverURL = "ws://127.0.0.1:4000"
const ws = new webSocket(serverURL);

ws.on('open', () => {
    console.log(`Connected to server ${serverURL}`);

    ws.send("Hello server")
})

ws.on('message', (message) => {
    console.log(`payload received from the server: ${message}`)
});

ws.on("close", () => {
    console.log("Connection closed");
})

ws.on("error", (error) => {
    console.log(`an error occured ${error}`)
})