# heepeps-websocket-solution
Heepeps-Websocket-solution


This is an implementation of chat server where message received from client is published to all the client

For the Websocket to run, we included an http server to run on a port, which thereby serves as an address for any client to communicate also.

So when a message is received from the client, the server responses with a message.
Also, the case of error was handled, incase an error occurs in the server or client, this is also consoled inorder to trace the error

Packages uses:
Nodemon: 
    -   This was used to keep the server running in the development 
Http
Websocket(Ws)

The server directory contains the main server whilst the client directory is a sample client

How to run the application
In your terminal just make sure you are in the right directory and just type:
 npm start