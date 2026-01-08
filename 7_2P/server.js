const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("A user connected");
    
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

setInterval(() => {
    io.emit("data", Math.floor(Math.random() * 100));
}, 2000);


http.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});