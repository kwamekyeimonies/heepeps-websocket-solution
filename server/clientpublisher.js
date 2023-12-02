const clients = new Set();

function publishClientMessages(message, sender) {
    for (const client of clients) {
        if (client !== sender) {
            client.send(message)
        }
    }
}


module.exports = { publishClientMessages }