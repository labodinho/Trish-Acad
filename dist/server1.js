const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const path = require("path");

//bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//static folder
app.use(express.static(path.join(__dirname, 'dist')));

//send all request to index
app.set('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
});

//set port
const port = process.env.PORT || "2000";
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});