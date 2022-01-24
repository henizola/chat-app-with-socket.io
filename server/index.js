const app = require("express");

const http = require("http").createServer(app);

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

http.listen(5000, () => {
  console.log("server listning to port 5000");
});
