const express = require("express");
const router = express.Router();

const Article = require("../../models/Article");

router.get("/test", (req, res) => res.send("article route testing!"));

router.get("/", (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: "No Articles found" })
    );
});

router.get("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: "No Articles found" })
    );
});

router.post("/", (req, res) => {
  Article.create(req.body)
    .then((article) => res.json({ msg: "Article added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this book" }));
});

router.put("/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then((article) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

router.delete("/:id", (req, res) => {
  Article.findByIdAndRemove(req.params.id, req.body)
    .then((article) => res.json({ mgs: "Article entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such article" }));
});

module.exports = router;
