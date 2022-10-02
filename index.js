// const express = require("express");
// const connectDB = require("./config/db");
// var cors = require("cors");

// // routes
// const articles = require("./routes/api/articles");

// const app = express();

// // Connect Database
// connectDB();

// // cors
// app.use(cors({ origin: true, credentials: true }));

// // Init Middleware
// app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("Hello world!"));

// // use Routes
// app.use("/api/articles", articles);

// const port = process.env.PORT || 8082;

// app.listen(port, () => console.log(`Server running on port ${port}`));


const express = require("express");
var cors = require("cors");
const connectDB = require("./config/db");

// routes
const articles = require("./routes/api/articles");

const app = express();
const port = process.env.PORT || 8082;

// cors
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.use("/api/articles", articles);

// Connect Database
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