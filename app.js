const express = require("express");
const app = express();
var path = require("path");

//app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/posts", function (req, res) {
    const posts = [
        { title: "Post-1", author: "Kafka" },
        { title: "Post-2", author: "Steve Hawkings" },
        { title: "Post-3", author: "Benjamin" },
    ];

    res.render("posts.ejs", { posts: posts });
});

{
    let y = 5;
}

console.log(y);

app.get("/fall/:thing", (req, res) => {
    const thing = req.params.thing;
    res.render("love.ejs", { thingVar: thing });
});

app.listen(3000, () => {
    console.log("Server is listening for EJS");
});
