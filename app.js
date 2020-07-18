const express = require("express");
const app = express();
var path = require("path");
var bodyParser = require("body-parser");

//app.set("views", path.join(__dirname, "view"));

const friends = ["Tony", "Mark", "Steve", "Fred", "David"];
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/posts", function (req, res) {
    const posts = [
        { title: "Post-1", author: "Kafka" },
        { title: "Post-2", author: "Steve Hawkings" },
        { title: "Post-3", author: "Benjamin" },
    ];

    res.render("posts", { posts: posts });
});

app.get("/fall/:thing", (req, res) => {
    const thing = req.params.thing;
    res.render("love", { thingVar: thing });
});

// FORM POST FOR NEW FRIENDS

app.post("/addfriend", function (req, res) {
    const newFriend = req.body.newfriend;
    friends.push(newFriend);
    // res.send("Post is being sent");
    res.redirect("/friends");
});

app.get("/friends", (req, res) => {
    res.render("friends", { friends: friends });
});

app.listen(3000, () => {
    console.log("Server is listening for EJS");
});
