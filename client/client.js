const webSocket = require("ws");

const serverAddress = "ws://127.0.0.1:4000"
const ws = new webSocket(serverAddress);

ws.on('open', () => {
    console.log(`Connected to server ${serverAddress}`);

    ws.send("Hello server")
})

// This line was added inorder to console the message from the server
ws.on('message', (message) => {
    console.log(`payload received from the server: ${message}`)
});

ws.on("close", () => {
    console.log("Connection closed");
})

ws.on("error", (error) => {
    console.log(`an error occured ${error}`)
})