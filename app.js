const express = require("express");
const app = express();
var path = require("path");

//app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/fall/:thing", (req, res) => {
    const thing = req.params.thing;
    const pass = { thing: thing };
    res.render("love.ejs", pass);
});

app.listen(3000, () => {
    console.log("Server is listening for EJS");
});
