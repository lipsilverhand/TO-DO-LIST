import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded( {extended: true}));
app.use(express.static("public"));

let newItems = ["Coding","Reading book"];
app.get("/", (req,res) => {
    res.render("index.ejs", {newListItems: newItems});
});

app.post("/submit", (req,res) => {
    var newItem = req.body["newItem"];
    newItems.push(newItem);
    res.redirect("/");
});

app.listen( port, () => {
    console.log(`Listening on port ${port}`);
});