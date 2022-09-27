const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  journalName: {
    type: String,
    required: true,
  },
  practice: {
    type: String,
    required: true,
  },
  claim: {
    type: String,
    required: true,
  },
  evidenceResult: {
    type: String,
    required: true,
  },
  researchType: {
    type: String,
    required: true,
  },
  participantType: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  published_date: {
    type: Date,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Article = mongoose.model("article", ArticleSchema);
