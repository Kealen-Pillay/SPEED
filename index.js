const express = require("express");
var cors = require("cors");
const connectDB = require("./config/db");


const articles = require("./routes/api/articles");

const app = express();
const port = process.env.PORT || 8082;


app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.use("/api/articles", articles);


connectDB();
if(process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "/frontend/build"));
    app.get("/", (req,res) => {
        res.sendFile(__dirname+"/frontend/build/index.html")
    })
} else {
    app.get("*", (req,res) => {
        res.send(`API is running on port ${port}`)
    });
}

app.listen(port, () => console.log(`Server running on port ${port}`));